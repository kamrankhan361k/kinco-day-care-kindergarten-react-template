import { Swiper, SwiperSlide } from "swiper/react";
import { twoSlider } from "../SliderProps";

const TestimonialSlider = () => {
  return (
    <Swiper {...twoSlider} className="owl-carousel owl-theme none">
      <SwiperSlide>
        <div
          data-dot=""
          className="item-fb wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1300ms"
        >
          <div className="coustom-padding">
            <div className="heading fx">
              <div className="box-avt">
                <img src="assets/images/thumbnails/avt-quote.jpg" alt="Image" />
              </div>
              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">Bradley Y. Grimes</h4>
                </li>
                <li>
                  <p className="clr-pri-5 f-mulish">Senior Manager</p>
                </li>
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
                “ On the other hand denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment”
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          data-dot=""
          className="item-fb wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1300ms"
        >
          <div className="coustom-padding">
            <div className="heading fx">
              <div className="box-avt">
                <img
                  src="assets/images/thumbnails/avt-quote-2.jpg"
                  alt="Image"
                />
              </div>
              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">Bradley Y. Grimes</h4>
                </li>
                <li>
                  <p className="clr-pri-5 f-mulish">Senior Manager</p>
                </li>
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
                “ On the other hand denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment”
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          data-dot=""
          className="item-fb wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1300ms"
        >
          <div className="coustom-padding">
            <div className="heading fx">
              <div className="box-avt">
                <img src="assets/images/thumbnails/avt-quote.jpg" alt="Image" />
              </div>
              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">Bradley Y. Grimes</h4>
                </li>
                <li>
                  <p className="clr-pri-5 f-mulish">Senior Manager</p>
                </li>
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
                “ On the other hand denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment”
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          data-dot=""
          className="item-fb wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1300ms"
        >
          <div className="coustom-padding">
            <div className="heading fx">
              <div className="box-avt">
                <img
                  src="assets/images/thumbnails/avt-quote-2.jpg"
                  alt="Image"
                />
              </div>
              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">Bradley Y. Grimes</h4>
                </li>
                <li>
                  <p className="clr-pri-5 f-mulish">Senior Manager</p>
                </li>
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
                “ On the other hand denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment”
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div className="owl-dots" />
    </Swiper>
  );
};
export default TestimonialSlider;
