class Routes {
    private BASE: string = '/';
    AUTH: string = '/auth';

    HOME = this.BASE;
    REGIS = `${this.AUTH}/regis`;
    LOGIN = `${this.AUTH}/login`;
    PROFILE = `/profile/:username`;
    PROFILE_LINK = `/profile`;
    NOTIFICATION = '/notification';
    MESSAGE = '/message';
    SAVES = '/saves';
    GROUPS = '/groups';
    SUBSCRIPTIONS = '/subscriptions';
    VACANCY = '/vacancy';
    OTHER = '/other';

    POST_PAGE = '/post/:postId';
}
export const PAGES = new Routes();

class RoutesProfile {
    private BASE: string = PAGES.PROFILE;

    POSTS = this.BASE;
    CLOSE = `${this.BASE}/close`;
    SAVES = `${this.BASE}/saves`;
    LIKES = `${this.BASE}/likes`;
    VIDEOS = `${this.BASE}/saves`;
}
export const ROUTES_PROFILE = new RoutesProfile();

class RoutesNotification {
    private BASE: string = PAGES.NOTIFICATION;

    SETTINGS = `${this.BASE}/settings`;
}

export const ROUTES_NOTIFICATION = new RoutesNotification();
