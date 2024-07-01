import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { themesflatcarousel } from "../SliderProps";

const LatestProgramSlider = () => {
  return (
    <Swiper {...themesflatcarousel} className="owl-carousel owl-theme none">
      <div className="swiper-wrapper">
        <SwiperSlide>
          <div
            data-dot=""
            className="item-courses wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1300ms"
          >
            <div className="box-feature">
              <img
                src="assets/images/common/slider-courses-1.jpg"
                alt="Image"
              />
            </div>
            <div className="box-content">
              <div className="box-wrap">
                <h4 className="title">
                  <Link href="/classe-details">
                    <a>Drawing &amp; Painting</a>
                  </Link>
                </h4>
                <p className="sub f-mulish">
                  Consectetur adipiscing elit seds eiusmo tempor incide
                </p>
              </div>
              <ul>
                <li>
                  <i className="far fa-user-graduate clr-pri-5" />
                  4-6 Years
                </li>
                <li>
                  <i className="far fa-book clr-pri-6" />5 Class
                </li>
                <li>
                  <i className="fal fa-usd-circle clr-pri-3" />
                  $259.95
                </li>
                <li>
                  <i className="far fa-clock clr-pri-8" />6 Months
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            data-dot=""
            className="item-courses wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1300ms"
          >
            <div className="box-feature">
              <img
                src="assets/images/common/slider-courses-2.jpg"
                alt="Image"
              />
            </div>
            <div className="box-content">
              <div className="box-wrap">
                <h4 className="title">
                  <Link href="/classe-details">
                    <a>Computer Learning</a>
                  </Link>
                </h4>
                <p className="sub f-mulish">
                  Consectetur adipiscing elit seds eiusmo tempor incide
                </p>
              </div>
              <ul>
                <li>
                  <i className="far fa-user-graduate clr-pri-5" />
                  4-6 Years
                </li>
                <li>
                  <i className="far fa-book clr-pri-6" />5 Class
                </li>
                <li>
                  <i className="fal fa-usd-circle clr-pri-3" />
                  $259.95
                </li>
                <li>
                  <i className="far fa-clock clr-pri-8" />6 Months
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            data-dot=""
            className="item-courses wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1300ms"
          >
            <div className="box-feature">
              <img
                src="assets/images/common/slider-courses-3.jpg"
                alt="Image"
              />
            </div>
            <div className="box-content">
              <div className="box-wrap">
                <h4 className="title">
                  <Link href="/classe-details">
                    <a>Basic English JR</a>
                  </Link>
                </h4>
                <p className="sub f-mulish">
                  Consectetur adipiscing elit seds eiusmo tempor incide
                </p>
              </div>
              <ul>
                <li>
                  <i className="far fa-user-graduate clr-pri-5" />
                  4-6 Years
                </li>
                <li>
                  <i className="far fa-book clr-pri-6" />5 Class
                </li>
                <li>
                  <i className="fal fa-usd-circle clr-pri-3" />
                  $259.95
                </li>
                <li>
                  <i className="far fa-clock clr-pri-8" />6 Months
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            data-dot=""
            className="item-courses wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1300ms"
          >
            <div className="box-feature">
              <img
                src="assets/images/common/slider-courses-2.jpg"
                alt="Image"
              />
            </div>
            <div className="box-content">
              <div className="box-wrap">
                <h4 className="title">
                  <Link href="/classe-details">
                    <a>Computer Learning</a>
                  </Link>
                </h4>
                <p className="sub f-mulish">
                  Consectetur adipiscing elit seds eiusmo tempor incide
                </p>
              </div>
              <ul>
                <li>
                  <i className="far fa-user-graduate clr-pri-5" />
                  4-6 Years
                </li>
                <li>
                  <i className="far fa-book clr-pri-6" />5 Class
                </li>
                <li>
                  <i className="fal fa-usd-circle clr-pri-3" />
                  $259.95
                </li>
                <li>
                  <i className="far fa-clock clr-pri-8" />6 Months
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="owl-nav">
        <div className="owl-prev"> </div>
        <div className="owl-next"> </div>
      </div>
      <div className="owl-dots" />
    </Swiper>
  );
};
export default LatestProgramSlider;
