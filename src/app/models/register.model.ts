export interface User {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  role: 'veterinarian' | 'owner';
}

export interface Veterinarian {
  user: User;
  phone_number: string;
  cabinet_address: string;
}

export interface Owner {
  user: User;
  city: string;
  street: string;
  number: string;
  county: string;
  CNP: string;
  phone_number: string;
}
