export interface UserModel {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  // createdAt: number;
}

export interface SignUpUser {
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  password: string;
}
