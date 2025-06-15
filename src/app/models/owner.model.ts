import { User } from './user.model';

export interface Owner {
  user: User;
  city: string;
  street: string;
  number: string;
  county: string;
  CNP: string;
  phone_number: string;
}
