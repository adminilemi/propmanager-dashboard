import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

export const ImageSlider = ({ imageData }) => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.swiper.slideNext();
  };

  const previous = () => {
    sliderRef.current.swiper.slidePrev();
  };

  return (
    <section className='relative my-10 overflow-hidden'>
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          nextEl: '.btnNext',
          prevEl: '.btnPrev',
          disabledClass: 'swiper-button-disabled',
        }}
        scrollbar={{ el: '.swiper-scrollbar' }}
        modules={[Navigation, Pagination]}
        className='mySwiper '
      >
        {imageData?.map(({ _id, url }) => (
          <SwiperSlide key={_id} className='!w-full'>
            <figure className='overflow-hidden'>
              <img
                src={url !== '' ? url : ''}
                alt='Ilemi product image'
                className='object-cover'
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={next}
        className='btnNext absolute top-[45%] left-3 z-40 bg-mainColor w-[30px] h-[30px] rounded-full grid place-items-center text-white'
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={previous}
        className='btnPrev absolute top-[45%] right-3 lg:right-50 z-40 bg-mainColor w-[30px] h-[30px] rounded-full grid place-items-center text-white'
      >
        <FaChevronRight />
      </button>
    </section>
  );
};
