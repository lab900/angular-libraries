export interface MergerDataExample {
  name: string;
  firstName: string;
  languages: string[];
  address: {
    country: string;
    street: string;
    number: number;
    box: string;
  };
  text?: string;
  dateOfBirth?: Date;
}
