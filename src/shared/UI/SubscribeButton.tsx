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
            {isSubscription ? (
                <PrimaryButton
                    style={{ height: h, width: w, border: '1px solid var(--white-color)' }}
                    color={COLORS.WHITE}
                    background={'transparant'}
                    type='button'
                    onClick={onHandleSubscription}
                >
                    Отписаться
                </PrimaryButton>
            ) : (
                <PrimaryButton
                    onClick={onHandleSubscription}
                    style={{ height: h, width: w }}
                    color={COLORS.WHITE}
                    background={COLORS.NORMAL}
                    type='button'
                >
                    Подписаться
                </PrimaryButton>
            )}
        </>
    );
};

export default SubscribeButton;
