import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import PageBanner from "../src/components/PageBanner";
import TestimonialSlider from "../src/components/TestimonialSlider";
import TfCounter from "../src/components/TfCounter";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";
import { fourSlider } from "../src/SliderProps";

const About = () => {
  return (
    <Layout bodyClass={"about"}>
      <PageBanner pageName={"About Us"} />
      <section className="tf-section tf-about">
        <div className="container">
          <div className="row">
            <div className="ol-xl-7 col-lg-7 col-md-12">
              <div className="wrap-image ps-re">
                <img
                  src="assets/images/background/bg-aboutus-2.png"
                  alt=""
                  className="bg1-about"
                />
                <div className="fx m-b32 align-fl-end">
                  <div
                    className="image m-r30 wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1200ms"
                  >
                    <img
                      src="assets/images/common/sc-about1.jpg"
                      alt="Images"
                    />
                  </div>
                  <div
                    className="image wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1200ms"
                  >
                    <img
                      src="assets/images/common/sc-about2.jpg"
                      alt="Images"
                    />
                  </div>
                </div>
                <div className="image p-l70">
                  <img src="assets/images/common/sc-about3.jpg" alt="Images" />
                </div>
                <div
                  className="box-parents wow fadeInUp animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
                  <h5 className="clr-pri-2 title">
                    <span className="clr-pri-3">25638+</span>Parents Say About
                    Our School
                  </h5>
                  <ul className="fx">
                    <li>
                      <img
                        src="assets/images/thumbnails/list-quote-5.jpg"
                        alt="Image"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/thumbnails/list-quote-1.jpg"
                        alt="Image"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/thumbnails/list-quote-2.jpg"
                        alt="Image"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/thumbnails/list-quote-3.jpg"
                        alt="Image"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/thumbnails/list-quote-4.jpg"
                        alt="Image"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/thumbnails/list-quote-6.jpg"
                        alt="Image"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-12">
              <div className="sc-about-2 p-t19">
                <div className="title-heading">
                  <div className="sub-heading clr-pri-3 f-mulish">
                    <span className="inner-sub st-2">About Us</span>
                    <RightArrow />
                  </div>
                  <h2 className="title clr-pri-2">
                    We Learn Smart Way To Build Bright Futute
                  </h2>
                </div>
                <div className="inner">
                  <p
                    className="wrap f-mulish clr-pri-4  wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    Amet consectetur adipiscin elitsed eiusmod tempor incididunt
                    labore et dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravida. Risus commodo maecenas accumsan
                  </p>
                  <h4 className="title-line">
                    Most Successful Results Institute For kindergarten Since
                    2021
                  </h4>
                  <ul>
                    <li className="st-1 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Outdoor Games</p>
                    </li>
                    <li className="st-2 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Sport Activites</p>
                    </li>
                    <li className="st-3 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Nutritious Foods</p>
                    </li>
                    <li className="st-4 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Event &amp; Party</p>
                    </li>
                  </ul>
                  <Link href="/testimonials">
                    <a className="fl-btn st-11">
                      <span className="inner">learn more Us</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-courses">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Our Activities</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  We Do Something Better For Bright Children Future Activities
                </h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="fx sc-discovery-about">
                <div className="col-discovery">
                  <div
                    className="sc-discovery-2 wow fadeInUp animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="800ms"
                  >
                    <div className="box-feature">
                      <svg
                        id="Features"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={120}
                        height={100}
                        viewBox="0 0 120 100"
                      >
                        <g id="_02" data-name={1}>
                          <image
                            id="Icon7"
                            width={120}
                            height={100}
                            xlinkHref="data:img/png;base64,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"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="box-content">
                      <h4 className="title">
                        <Link href="/classes">
                          <a>Study &amp; Game</a>
                        </Link>
                      </h4>
                      <p className="wrap f-mulish">
                        Sed ut perspiciatis unde omnis iste natu voluptatem
                        accus antium dolorem
                      </p>
                      <Link href="/classes">
                        <a className="fl-btn st-13">
                          <span className="inner">read more</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-discovery">
                  <div
                    className="sc-discovery-2 wow fadeInUp animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="box-feature">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={101}
                        height={99}
                        viewBox="0 0 101 99"
                      >
                        <image
                          id="balloons"
                          width={101}
                          height={99}
                          xlinkHref="data:img/png;base64,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"
                        />
                      </svg>
                    </div>
                    <div className="box-content">
                      <h4 className="title">
                        <Link href="/program">
                          <a>Event &amp; Programs</a>
                        </Link>
                      </h4>
                      <p className="wrap f-mulish">
                        Sed ut perspiciatis unde omnis iste natu voluptatem
                        accus antium dolorem
                      </p>
                      <Link href="/program">
                        <a className="fl-btn st-13">
                          <span className="inner">read more</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-discovery">
                  <div
                    className="sc-discovery-2 wow fadeInUp animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1200ms"
                  >
                    <div className="box-feature">
                      <svg
                        id="Features3"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={128}
                        height={106}
                        viewBox="0 0 128 106"
                      >
                        <g id="_03" data-name={3}>
                          <image
                            width={128}
                            height={106}
                            xlinkHref="data:img/png;base64,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"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="box-content">
                      <h4 className="title">
                        <Link href="/teacher">
                          <a>Competitions</a>
                        </Link>
                      </h4>
                      <p className="wrap f-mulish">
                        Sed ut perspiciatis unde omnis iste natu voluptatem
                        accus antium dolorem
                      </p>
                      <Link href="/teacher">
                        <a className="fl-btn st-13">
                          <span className="inner">read more</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-discovery">
                  <div
                    className="sc-discovery-2 wow fadeInUp animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1400ms"
                  >
                    <div className="box-feature">
                      <svg
                        id="Features4"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={110}
                        height={107}
                        viewBox="0 0 110 107"
                      >
                        <g id="_044" data-name={4}>
                          <image
                            id="icon2"
                            width={110}
                            height={107}
                            xlinkHref="data:img/png;base64,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"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="box-content">
                      <h4 className="title">
                        <Link href="/events">
                          <a>Outdoor Games</a>
                        </Link>
                      </h4>
                      <p className="wrap f-mulish">
                        Sed ut perspiciatis unde omnis iste natu voluptatem
                        accus antium dolorem
                      </p>
                      <Link href="/events">
                        <a className="fl-btn st-13">
                          <span className="inner">read more</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TfCounter />
      <section className="tf-section tf-employee">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-1">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Meet Our Teacher</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  We Have Lot’s Of Experience Teacher To Teach The Students
                </h2>
              </div>
            </div>
            <div className="col-12">
              <div className="slider-employee">
                <div className="themesflat-carousel clearfix">
                  <Swiper
                    {...fourSlider}
                    className="owl-carousel owl-theme none dots-none"
                  >
                    <SwiperSlide>
                      <div
                        className="sc-employee wow fadeInUp animated"
                        data-wow-delay="0.3ms"
                        data-wow-duration="800ms"
                      >
                        <div className="box-feature">
                          <img
                            src="assets/images/common/sc-employee-1.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="box-content st-1">
                          <h4 className="name">
                            <Link href="/teacher-details">
                              <a className="clr-pri-1">Patrick K. Carlson</a>
                            </Link>
                          </h4>
                          <p className="sub f-mulish clr-pri-1">
                            Computer Teacher
                          </p>
                          <div className="social">
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="sc-employee active wow fadeInUp animated"
                        data-wow-delay="0.3ms"
                        data-wow-duration="1000ms"
                      >
                        <div className="box-feature">
                          <img
                            src="assets/images/common/sc-employee-2.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="box-content st-2">
                          <h4 className="name">
                            <Link href="/teacher-details">
                              <a className="clr-pri-1">Roderick M. Neal</a>
                            </Link>
                          </h4>
                          <p className="sub f-mulish clr-pri-1">
                            Arts &amp; Drawing
                          </p>
                          <div className="social">
                            <a href="#" className="active">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="sc-employee wow fadeInUp animated"
                        data-wow-delay="0.3ms"
                        data-wow-duration="1200ms"
                      >
                        <div className="box-feature">
                          <img
                            src="assets/images/common/sc-employee-3.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="box-content st-3">
                          <h4 className="name">
                            <Link href="/teacher-details">
                              <a className="clr-pri-1">Frank T. Norman</a>
                            </Link>
                          </h4>
                          <p className="sub f-mulish clr-pri-1">
                            English Teacher
                          </p>
                          <div className="social">
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="sc-employee wow fadeInUp animated"
                        data-wow-delay="0.3ms"
                        data-wow-duration="1400ms"
                      >
                        <div className="box-feature">
                          <img
                            src="assets/images/common/sc-employee-4.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="box-content st-4">
                          <h4 className="name">
                            <Link href="/teacher-details">
                              <a className="clr-pri-1">Scott M. Fletcher</a>
                            </Link>
                          </h4>
                          <p className="sub f-mulish clr-pri-1">
                            Science Teacher
                          </p>
                          <div className="social">
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/*/.themesflat-carousel*/}
              </div>
              {/*/.slider-2*/}
            </div>
          </div>
        </div>
      </section>
      <section className="tf-sc-contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className="sc-contact wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="wrap">
                  <h2 className="title clr-pri-1">
                    Ready To Admit Your Child ?
                  </h2>
                  <p className="sub clr-pri-1 f-mulish">
                    Amet consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore
                  </p>
                </div>
                <div className="inner-sc-contact">
                  <div className="box-btn">
                    <Link href="/contact">
                      <a className="fl-btn st-9">
                        <span className="inner">Enroll Now</span>
                      </a>
                    </Link>
                  </div>
                  <div className="inner-contact fx">
                    <svg
                      id="CTA"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={49}
                      height={47}
                      viewBox="0 0 49 47"
                    >
                      <g id="Phone2">
                        <image
                          width={49}
                          height={47}
                          xlinkHref="data:img/png;base64,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"
                        />
                      </g>
                    </svg>
                    <ul>
                      <li className="clr-pri-1">Hotline</li>
                      <li className="clr-pri-1">+012 (345) 678</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-feedback">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Parents Feedback</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  What Parents Say About Our{" "}
                  <span className="clr-pri-3">Kindco</span> Kindergarten
                </h2>
              </div>
            </div>
            <div className="col-12 pd0-135">
              <div className="slider-fb">
                <TestimonialSlider />
                {/*/.themesflat-carousel*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
