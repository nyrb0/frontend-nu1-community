class Routes {
    private BASE: string = '/';
    AUTH: string = '/auth';

    HOME = this.BASE;
    REGIS = `${this.AUTH}/regis`;
    LOGIN = `${this.AUTH}/login`;
    PROFILE = '/profile';
    NOTIFICATION = '/notification';
    MESSAGE = '/message';
    SAVES = '/saves';
    GROUPS = '/groups';
    SUBSCRIPTIONS = '/subscriptions';
    OTHER = '/other';
}

export const PAGES = new Routes();
