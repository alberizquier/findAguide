import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarWidthHandlerService {

  constructor() { }
}


export class WidthHandler {
  private nameElement: string;
  private element: HTMLElement;
  private minW: number;
  private maxW: number;
  private time: number;
  private tickCount: number;
  private showing: boolean;
  private hidding: boolean;
  private _width: number;
  private deltaW: number;


  constructor(nameElement: string, hidden: boolean, minW: number, maxW: number, time: number) {
    this.nameElement = nameElement;
    this.element = null;
    this.minW = minW;
    this.maxW = maxW;
    this.time = time;
    this.tickCount = 0;
    this.showing = false;
    this.hidding = false;
    this.deltaW = 0;
    if (hidden) {
      this.width = this.minW;
    }
    else {
      this.width = this.maxW;
    }
  }

  //
  get width(): number {
    return this._width;
  }

  set width(value) {
    if (value < this.minW) {
      value = this.minW;
    }
    else if (value > this.maxW) {
      value = this.maxW;
    }
    this._width = value;
    if (this.element) {
      this.element.style.width = `${value}%`;
    }
  }
  //
  show() {
    if (this.width < this.maxW) {
      this.showing = true;
      this.hidding = false;
      this.deltaW = (this.maxW - this.width) / (this.time * 1000);
      this.start();
    }
  }

  hide() {
    if (this.width > this.minW) {
      this.showing = false;
      this.hidding = true;
      this.deltaW = (this.minW - this.width) / (this.time * 1000);
      this.start();
    }
  }

  tick() {
    //tiempo pasado entre ticks
    let msecs = Date.now() - this.tickCount;
    this.tickCount = Date.now();
    //
    if (this.showing) {
      //cambiamos la anchura
      if (this.width < this.maxW) {
        //la nueva distancia es igual a la actual + el deltaW(velocidad) * tiempo transcurrido
        this.width = this.width + this.deltaW * msecs;
      }
      //si queda margen preparamos un nuevo tick
      if (this.width < this.maxW) {
        setTimeout(this.tick.bind(this), 25)
      }
      else {
        //se acabó
        this.showing = false;
      }
    }
    else if (this.hidding) {
      //cambiamos la anchura
      if (this.width > this.minW) {
        //la nueva distancia es igual a la actual + el deltaW(velocidad) * tiempo transcurrido
        this.width = this.width + this.deltaW * msecs;
      }
      //si queda margen preparamos un nuevo tick
      if (this.width > this.minW) {
        setTimeout(this.tick.bind(this), 25)
      }
      else {
        //se acabó
        this.hidding = false;
      }
    }
  }

  start() {
    let setWidth: boolean;
    if (this.showing) {
      if (this.width < this.maxW) {
        setWidth = this.element == null;
        this.element = document.getElementById(this.nameElement);
        if (this.element) {
          if(setWidth){
            this.width = this.width;
          }
          this.tickCount = Date.now();
          this.tick();
        }
      }

    } else if (this.hidding) {
      if (this.width > this.minW) {
        setWidth = this.element == null;
        this.element = document.getElementById(this.nameElement);
        if (this.element) {
          if(setWidth){
            this.width = this.width;
          }
          this.tickCount = Date.now();
          this.tick();
        }
      }
    }
  }
}
