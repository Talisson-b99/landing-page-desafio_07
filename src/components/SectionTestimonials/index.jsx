import CardTestimonials from "./components/card-testimonials";
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SectionTestimonials = () => {
  return (
    <section className="s-testimonials">
      <div className="container">
        <h5>Testimonials</h5>
        <h2>Our Client Reviews</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={39}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <CardTestimonials />
          </SwiperSlide>
          <SwiperSlide>
            <CardTestimonials />
          </SwiperSlide>
          <SwiperSlide>
            <CardTestimonials />
          </SwiperSlide>
          <SwiperSlide>
            <CardTestimonials />
          </SwiperSlide>
          <SwiperSlide>
            <CardTestimonials />
          </SwiperSlide>
          <SwiperSlide>
            <CardTestimonials />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SectionTestimonials;
