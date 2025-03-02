import { axiosService } from './api/http';

export const imageService = {
    async getImage(key: string | undefined): Promise<string | undefined> {
        if (!key) {
            console.error('Error: Image key is undefined or empty.');
            return undefined;
        }
        const response = await axiosService.get(`image/${key}`, { responseType: 'blob' });

        if (response.data) {
            const imageUrl = URL.createObjectURL(response.data);
            return imageUrl;
        }
        console.error('Error: Image not found.');
        return '';
    },
};
