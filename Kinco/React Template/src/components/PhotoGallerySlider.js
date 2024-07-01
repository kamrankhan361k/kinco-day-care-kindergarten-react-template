import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { fourSlider } from "../SliderProps";

const PhotoGallerySlider = () => {
  return (
    <Swiper {...fourSlider} className="owl-carousel owl-theme none dots-none">
      <SwiperSlide>
        <div
          className="sc-gallery-2 st-1 wow fadeIn animated"
          data-wow-delay="0.5ms"
          data-wow-duration="1200ms"
        >
          <img src="assets/images/common/sc-gallery-6.jpg" alt="Image" />
          <div className="overlay">
            <div className="inner-overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={100}
                height={100}
                viewBox="0 0 100 100"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                            .cls-1 {\n                                                              fill: #fff;\n                                                            }\n                                                          ",
                    }}
                  />
                </defs>
                <g>
                  <rect className="cls-1" x={49} width={2} height={100} />
                  <rect
                    className="cls-1"
                    x="-0.5"
                    y="49.5"
                    width={100}
                    height={2}
                  />
                </g>
              </svg>
              <h3>
                <Link href="/gallery">
                  <a className="clr-pri-1">Student Playing</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="sc-gallery-2 wow fadeIn animated"
          data-wow-delay="0.5ms"
          data-wow-duration="1200ms"
        >
          <img src="assets/images/common/sc-gallery-7.jpg" alt="Image" />
          <div className="overlay">
            <div className="inner-overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={100}
                height={100}
                viewBox="0 0 100 100"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                            .cls-1 {\n                                                              fill: #fff;\n                                                            }\n                                                          ",
                    }}
                  />
                </defs>
                <g>
                  <rect className="cls-1" x={49} width={2} height={100} />
                  <rect
                    className="cls-1"
                    x="-0.5"
                    y="49.5"
                    width={100}
                    height={2}
                  />
                </g>
              </svg>
              <h3>
                <Link href="/gallery">
                  <a className="clr-pri-1">Student Playing</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="sc-gallery-2 st-1 wow fadeIn animated"
          data-wow-delay="0.5ms"
          data-wow-duration="1200ms"
        >
          <img src="assets/images/common/sc-gallery-8.jpg" alt="Image" />
          <div className="overlay">
            <div className="inner-overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={100}
                height={100}
                viewBox="0 0 100 100"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                            .cls-1 {\n                                                              fill: #fff;\n                                                            }\n                                                          ",
                    }}
                  />
                </defs>
                <g>
                  <rect className="cls-1" x={49} width={2} height={100} />
                  <rect
                    className="cls-1"
                    x="-0.5"
                    y="49.5"
                    width={100}
                    height={2}
                  />
                </g>
              </svg>
              <h3>
                <Link href="/gallery">
                  <a className="clr-pri-1">Student Playing</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        {" "}
        <div
          className="sc-gallery-2 st-2 wow fadeIn animated"
          data-wow-delay="0.5ms"
          data-wow-duration="1200ms"
        >
          <img src="assets/images/common/sc-gallery-9.jpg" alt="Image" />
          <div className="overlay">
            <div className="inner-overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={100}
                height={100}
                viewBox="0 0 100 100"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                            .cls-1 {\n                                                              fill: #fff;\n                                                            }\n                                                          ",
                    }}
                  />
                </defs>
                <g>
                  <rect className="cls-1" x={49} width={2} height={100} />
                  <rect
                    className="cls-1"
                    x="-0.5"
                    y="49.5"
                    width={100}
                    height={2}
                  />
                </g>
              </svg>
              <h3>
                <Link href="/gallery">
                  <a className="clr-pri-1">Student Playing</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default PhotoGallerySlider;
