class Routes {
  private BASE: string = "/";
  AUTH: string = "/auth";

  HOME = this.BASE;
  REGIS = `${this.AUTH}/regis`;
  LOGIN = `${this.AUTH}/login`;
  PROFILE = "/profile";
}

export const PAGES = new Routes();
