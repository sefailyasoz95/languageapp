export type UserModel = {
  name: string;
  email: string;
  message: string;
  token: string;
  _id: string;
};

export type Login = {
  email: string;
  password: string;
};
export type Register = {
  name: string;
  email: string;
  password: string;
};
