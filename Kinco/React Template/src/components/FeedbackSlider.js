import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialSlider } from "../SliderProps";

const FeedbackSlider = () => {
  return (
    <Swiper
      {...testimonialSlider}
      className="owl-carousel owl-theme none home2TestimonialSlider"
    >
      <SwiperSlide>
        <div className="item-quote" data-dot="">
          <div className="heading">
            <div className="left fx">
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
            <div className="right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={91}
                height={71}
                viewBox="0 0 91 71"
              >
                <g>
                  <image
                    width={91}
                    height={71}
                    xlinkHref="data:img/png;base64,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"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="wrap">
            <p className="clr-pri-2">
              “ On the other hand denounce with right eouses indignation and
              dislike men who are so beguiledec and demoralized by the charms of
              pleasure of the moment”
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item-quote" data-dot="">
          <div className="heading">
            <div className="left fx">
              <div className="box-avt">
                <img
                  src="assets/images/thumbnails/avt-quote4.jpg"
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
            <div className="right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={91}
                height={71}
                viewBox="0 0 91 71"
              >
                <g>
                  <image
                    width={91}
                    height={71}
                    xlinkHref="data:img/png;base64,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"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="wrap">
            <p className="clr-pri-2">
              “ On the other hand denounce with right eouses indignation and
              dislike men who are so beguiledec and demoralized by the charms of
              pleasure of the moment”
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item-quote" data-dot="">
          <div className="heading">
            <div className="left fx">
              <div className="box-avt">
                <img
                  src="assets/images/thumbnails/avt-quote5.jpg"
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
            <div className="right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={91}
                height={71}
                viewBox="0 0 91 71"
              >
                <g>
                  <image
                    width={91}
                    height={71}
                    xlinkHref="data:img/png;base64,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"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="wrap">
            <p className="clr-pri-2">
              “ On the other hand denounce with right eouses indignation and
              dislike men who are so beguiledec and demoralized by the charms of
              pleasure of the moment”
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item-quote" data-dot="">
          <div className="heading">
            <div className="left fx">
              <div className="box-avt">
                <img
                  src="assets/images/thumbnails/avt-quote6.jpg"
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
            <div className="right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={91}
                height={71}
                viewBox="0 0 91 71"
              >
                <g>
                  <image
                    width={91}
                    height={71}
                    xlinkHref="data:img/png;base64,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"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="wrap">
            <p className="clr-pri-2">
              “ On the other hand denounce with right eouses indignation and
              dislike men who are so beguiledec and demoralized by the charms of
              pleasure of the moment”
            </p>
          </div>
        </div>
      </SwiperSlide>
      <div className="owl-dots" />
    </Swiper>
  );
};
export default FeedbackSlider;
