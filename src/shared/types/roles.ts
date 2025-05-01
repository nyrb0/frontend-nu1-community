export const ROLES = {
    ADMIN: 'ADMIN',
    MODERATOR: 'MODERATOR',
    COMPANY: 'COMPANY',
    USER: 'USER',
} as const;

export type ROLES = keyof typeof ROLES;

export const POSITION = {
    INTERN: 'Intern',
    JUNIOR: 'Junior',
    JUNIOR_PLUS: 'Junior+',
    MIDDLE: 'Middle',
    MIDDLE_PLUS: 'Middle+',
    SENIOR: 'Senior',
};
export type POSITION = keyof typeof POSITION;
