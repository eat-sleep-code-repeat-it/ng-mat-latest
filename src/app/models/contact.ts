import { IContact } from '../interfaces/i-contact';

export class Contact implements IContact {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };

  constructor(contact: IContact) {
    this.id = contact.id;
    this.name = contact.email.toUpperCase();
    this.email = contact.email.trim();
  }
}
