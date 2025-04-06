export const localUsername = {
    set(body: any) {
        localStorage.setItem('username', body);
    },
    get(): string {
        return localStorage.getItem('username') || '';
    },
    delete() {
        localStorage.removeItem('username');
    },
};
