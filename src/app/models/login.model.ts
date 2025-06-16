export interface LoginRequest {
  email_or_username: string;
  password: string;
}

export interface LoggedInUser {
  id: number;
  email: string;
  username: string;
  role: 'owner' | 'veterinarian';
}

export interface LoginResponse {
  refresh: string;
  access: string;
  user: LoggedInUser;
}
