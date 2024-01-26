export interface UserLogin {
  email?: string | null;
  password?: string | null;
}
export interface UserInfo {
  first_name: string;
  last_name: string;
  role: string;
  token: string;
}

