export interface MergerDataExample {
  name: string;
  firstName: string;
  languages: string[];
  address: {
    street: string;
    number: number;
  };
  text?: string;
  dateOfBirth?: Date;
}
