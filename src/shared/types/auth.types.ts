export interface IAuth {
  username: string;
  password: string;
}

export interface IUser {
  username: string;
  email?: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}
