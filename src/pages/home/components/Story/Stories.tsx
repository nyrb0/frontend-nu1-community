import { Swiper, SwiperSlide } from 'swiper/react';
import AddStory from './AddStory';
import StoryBlock from './StoryBlock';

import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Stories = () => {
    return (
        <div className='df' style={{ gap: 9 }}>
            <AddStory />

            <Swiper
                slidesPerView='auto'
                spaceBetween={4} // Уменьшил расстояние между слайдами
                freeMode={true}
                modules={[FreeMode]}
                className='mySwiper'
            >
                {Array.from({ length: 20 }, (_, i) => (
                    <SwiperSlide key={i} style={{ maxWidth: 80 }}>
                        <StoryBlock src='https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676296366191520185.png' username='nu1bo' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Stories;
