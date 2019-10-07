export class User {
    name: String;
    lastName: String;
    birthDate: Date;
    email: String;
    picture: String;
    password: String;
    type: [String];
    rating: Number;
    guiderInfo: {
      description: String;
      location: String;
      languages: [String];
      busyDates: [Date];
      rating: Number;
      acreditation: [String];
    };
}
