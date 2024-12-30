import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styles from "./SliderBase.module.css";

export const SliderBase = (props) => {
  if (!props?.content?.length) return null;

  const prepareContent = props.content.map((item) => (
    <SwiperSlide style={{width: `${props.widhtItem}px`}} key={item.id}>
      <Image 
        src={item.imgUrl} 
        alt={item.imgAlt} 
        className={styles.carouselItem} 
        width={props.widhtItem} 
        height={props.heightItem} 
      />
    </SwiperSlide>
  ));

  return (
    <div style={{ width: "100%", maxWidth: "100%" }}>
      <Swiper
        modules={[
          Autoplay, 
          Navigation, 
          Pagination
        ]}
        spaceBetween={30} // Расстояние между слайдами
        slidesPerView={'auto'} // Количество слайдов на экране
        navigation // Стрелки навигации
        pagination={{ clickable: true }} // Пагинация
        autoplay={{
          delay: props.interval, // Интервал авто перемотки
          disableOnInteraction: false, // Продолжать авто перемотку, когда пользователь взаимодействует с каруселью
        }}
        loop={true} // Бесконечная прокрутка
      >
        {prepareContent}
      </Swiper>
    </div>
  );
};


/* 
<SliderBase 
    content={ 
        [ 
            {id: "", imgUrl: "", imgAlt: ""}, 
            {id: "", imgUrl: "", imgAlt: ""} 
        ]
    } 
    interval={400}
    widhtItem={"320px"}
    heightItem={"320px"}
/> 
*/

