import { BaseI } from './base.types';

export interface PulicationUserI extends BaseI {
    id: string;
    title: string;
    description?: string;
}
