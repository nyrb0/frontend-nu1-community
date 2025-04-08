import { COLORS } from '@/shared/constants/colors';
import { subscribeService } from '@/shared/services/subscribe.service';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { useState } from 'react';

interface ISubscribeButton {
    isSubs: boolean;
    w?: number;
    h?: number;
    id: string;
}
const SubscribeButton = ({ isSubs, w, h, id }: ISubscribeButton) => {
    const [isSubscription, setIsSubscription] = useState(isSubs);

    const onHandleSubscription = async () => {
        if (isSubscription) {
            const response = await subscribeService.unsubscribe(id);
            if (response.status === 200) {
                setIsSubscription(false);
                console.log('Отписалось');
            }
            // setIsSubscription(false);
        } else {
            const response = await subscribeService.subscribe(id);
            if (response.status === 200) {
                setIsSubscription(true);
                console.log('Подписалось');
            }
            // setIsSubscription(true);
        }
    };

    return (
        <>
            <PrimaryButton
                style={{ height: h, width: w, border: isSubscription ? '1px solid var(--white-color)' : 'none' }}
                color={COLORS.WHITE}
                background={isSubscription ? 'transparant' : COLORS.NORMAL}
                type='button'
                onClick={onHandleSubscription}
            >
                {isSubscription ? 'Отписаться' : 'Подписаться'}
            </PrimaryButton>
        </>
    );
};

export default SubscribeButton;
