import { ISvg } from '@/shared/types/svg.types';
import React from 'react';

const IconAnswer: React.FC<ISvg> = ({ ...props }) => {
    return (
        <svg {...props} width='16' height='16' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M10.25 13.0625C10.25 13.3097 10.1767 13.5514 10.0393 13.757C9.90199 13.9625 9.70677 14.1227 9.47836 14.2174C9.24995 14.312 8.99862 14.3367 8.75614 14.2885C8.51366 14.2403 8.29094 14.1212 8.11612 13.9464C7.9413 13.7716 7.82225 13.5488 7.77402 13.3064C7.72579 13.0639 7.75054 12.8126 7.84515 12.5841C7.93976 12.3557 8.09998 12.1605 8.30554 12.0232C8.5111 11.8858 8.75278 11.8125 9 11.8125C9.33152 11.8125 9.64947 11.9442 9.88389 12.1786C10.1183 12.413 10.25 12.731 10.25 13.0625ZM17.4375 9C17.4375 10.6688 16.9427 12.3001 16.0155 13.6876C15.0884 15.0752 13.7706 16.1566 12.2289 16.7952C10.6871 17.4338 8.99064 17.6009 7.35393 17.2754C5.71721 16.9498 4.2138 16.1462 3.03379 14.9662C1.85379 13.7862 1.05019 12.2828 0.724628 10.6461C0.399065 9.00936 0.566156 7.31286 1.20477 5.77111C1.84338 4.22936 2.92484 2.9116 4.31238 1.98448C5.69992 1.05735 7.33122 0.5625 9 0.5625C11.237 0.564981 13.3817 1.45473 14.9635 3.03653C16.5453 4.61833 17.435 6.763 17.4375 9ZM15.5625 9C15.5625 7.70206 15.1776 6.43327 14.4565 5.35407C13.7354 4.27487 12.7105 3.43374 11.5114 2.93704C10.3122 2.44034 8.99272 2.31038 7.71972 2.5636C6.44672 2.81681 5.2774 3.44183 4.35962 4.35961C3.44183 5.27739 2.81682 6.44672 2.5636 7.71972C2.31038 8.99272 2.44034 10.3122 2.93704 11.5114C3.43374 12.7105 4.27488 13.7354 5.35407 14.4565C6.43327 15.1776 7.70206 15.5625 9 15.5625C10.7399 15.5606 12.408 14.8686 13.6383 13.6383C14.8686 12.408 15.5606 10.7399 15.5625 9ZM9 4C7.10469 4 5.5625 5.40156 5.5625 7.125V7.4375C5.5625 7.68614 5.66128 7.9246 5.83709 8.10041C6.01291 8.27623 6.25136 8.375 6.5 8.375C6.74864 8.375 6.9871 8.27623 7.16292 8.10041C7.33873 7.9246 7.4375 7.68614 7.4375 7.4375V7.125C7.4375 6.43594 8.14063 5.875 9 5.875C9.85938 5.875 10.5625 6.43594 10.5625 7.125C10.5625 7.81406 9.85938 8.375 9 8.375C8.75136 8.375 8.51291 8.47377 8.33709 8.64959C8.16128 8.8254 8.0625 9.06386 8.0625 9.3125V9.9375C8.06194 10.1691 8.14715 10.3927 8.30169 10.5653C8.45623 10.7378 8.66916 10.847 8.89945 10.8719C9.12973 10.8967 9.36106 10.8354 9.54884 10.6998C9.73662 10.5642 9.86756 10.3639 9.91641 10.1375C11.368 9.77187 12.4375 8.56016 12.4375 7.125C12.4375 5.40156 10.8953 4 9 4Z'
                fill='#94A3B8'
            />
        </svg>
    );
};

export default IconAnswer;
