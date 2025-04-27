export const ROLES = {
    ADMIN: 'ADMIN',
    MODERATOR: 'MODERATOR',
    COMPANY: 'COMPANY',
    USER: 'USER',
} as const;

export type ROLES = keyof typeof ROLES;
