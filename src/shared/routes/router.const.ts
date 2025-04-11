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
    SETTINGS = '/settings';
    CHATS = '/chats';
    POST_PAGE = '/post/:postId';

    COMMENTS = '/comments/:postId';
}
export const PAGES = new Routes();

class RoutesProfile {
    private BASE: string = PAGES.PROFILE;

    POSTS = this.BASE;
    CLOSE = `${this.BASE}/close`;
    SAVES = `${this.BASE}/saves`;
    LIKES = `${this.BASE}/likes`;
    VIDEOS = `${this.BASE}/saves`;
    EDIT_PROFILE = `${this.BASE}/edit`;
}
export const ROUTES_PROFILE = new RoutesProfile();

class RoutesSettings {
    private BASE: string = `${PAGES.SETTINGS}`;
    EDIT_PROFILE = `${this.BASE}`;
    SICURITY = `${this.BASE}/security`;
    CONFIDEN = `${this.BASE}/confidentiality`;
    ACCOUNT = `${this.BASE}/account`;
    DETEILS = `${this.BASE}/details`;
}
export const ROUTES_SETTINGS = new RoutesSettings();

class RoutesNotification {
    private BASE: string = PAGES.NOTIFICATION;

    SETTINGS = `${this.BASE}/settings`;
}

export const ROUTES_NOTIFICATION = new RoutesNotification();
