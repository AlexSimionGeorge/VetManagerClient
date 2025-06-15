import {User} from './user.model';

export interface Veterinarian {
  user: User;
  phone_number: string;
  cabinet_address: string;
}
