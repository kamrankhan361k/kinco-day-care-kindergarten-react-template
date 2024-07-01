import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import FaqAccordion from "../src/components/FaqAccordion";
import PageBanner from "../src/components/PageBanner";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";
import { brandSlider } from "../src/SliderProps";

const FAQs = () => {
  return (
    <Layout bodyClass={"faq"}>
      <PageBanner pageName={"FAQs"} />
      <section className="tf-section tf-faq">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-2">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Need Any Support</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  We Are Ready To Help You For Your’s Informations
                </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="sc-faq wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="image">
                  <img src="assets/images/common/sc-faq1.png" alt="Image" />
                </div>
                <div className="content">
                  <h4>Supports and Info</h4>
                  <p className="desc">
                    Edipiscin elitsed eiusmod incididunt dolore magna
                    suspendisse
                  </p>
                  <Link href="/contact">
                    <a className="fl-btn st-5">
                      <span className="inner">Contact Us</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="sc-faq active wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="image">
                  <img src="assets/images/common/sc-faq2.png" alt="Image" />
                </div>
                <div className="content">
                  <h4>News and Updates</h4>
                  <p className="desc">
                    Edipiscin elitsed eiusmod incididunt dolore magna
                    suspendisse
                  </p>
                  <Link href="/contact">
                    <a className="fl-btn st-5">
                      <span className="inner">Contact Us</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="sc-faq wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="image">
                  <img src="assets/images/common/sc-faq3.png" alt="Image" />
                </div>
                <div className="content">
                  <h4>Events and Programs</h4>
                  <p className="desc">
                    Edipiscin elitsed eiusmod incididunt dolore magna
                    suspendisse
                  </p>
                  <Link href="/contact">
                    <a className="fl-btn st-5">
                      <span className="inner">Contact Us</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-faq-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-heading">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <span className="inner-sub st-2">Asked Questions</span>
                  <RightArrow />
                </div>
                <h2 className="title">Freequently Asked Questions</h2>
              </div>
            </div>
            <div className="col-md-12">
              <Tab.Container defaultActiveKey={"General"}>
                <div className="flat-tabs tab-faq m-t50">
                  <Nav as={"ul"} className="menu-tab">
                    <Nav.Link as={"li"} eventKey={"General"}>
                      <span>General</span>
                    </Nav.Link>
                    <Nav.Link as={"li"} eventKey={"Courses"}>
                      <span>Courses</span>
                    </Nav.Link>
                    <Nav.Link as={"li"} eventKey={"News"}>
                      <span>News &amp; Updates</span>
                    </Nav.Link>
                    <Nav.Link as={"li"} eventKey={"Team"}>
                      <span>Team Members</span>
                    </Nav.Link>
                    <Nav.Link as={"li"} eventKey={"Student"}>
                      <span>Student &amp; Result</span>
                    </Nav.Link>
                  </Nav>
                  <Tab.Content className="content-tab">
                    <Tab.Pane eventKey={"General"}>
                      <div className="content-inner">
                        <FaqAccordion />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={"Courses"}>
                      <FaqAccordion />
                    </Tab.Pane>
                    <Tab.Pane eventKey={"News"}>
                      <FaqAccordion />
                    </Tab.Pane>
                    <Tab.Pane eventKey={"Team"}>
                      <FaqAccordion />
                    </Tab.Pane>
                    <Tab.Pane eventKey={"Student"}>
                      <FaqAccordion />
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-sc-blog">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Latest News &amp; Blog</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Get Our Every Single Updates Latest News &amp; Blog
                </h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div
                className="box-artice fl-scale st-2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature inner-scale">
                  <Link href="/blog-single">
                    <a>
                      <img
                        src="assets/images/post/box-aricle1.jpg"
                        alt="Image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="box-content">
                  <div className="meta-post st-1">
                    <ul className="fx">
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-calendar-alt clr-pri-3" />
                            25 Dec 2021
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-comment-alt-dots clr-pri-3" />
                            Comments (05)
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="title-article-post">
                    <Link href="/blog-single">
                      <a>
                        Useful VS Code Extensions Fronts End Developer Smashing
                      </a>
                    </Link>
                  </h4>
                  <div className="btn-rm">
                    <Link href="/blog-single">
                      <a className="fl-btn st-4">
                        <span className="inner">read more</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div
                className="box-artice fl-scale st-2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature inner-scale">
                  <Link href="/blog-single">
                    <a>
                      <img
                        src="assets/images/post/box-aricle2.jpg"
                        alt="Image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="box-content">
                  <div className="meta-post st-1">
                    <ul className="fx">
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-calendar-alt clr-pri-3" />
                            25 Dec 2021
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-comment-alt-dots clr-pri-3" />
                            Comments (05)
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="title-article-post">
                    <Link href="/blog-single">
                      <a>
                        Everything Developers Need Know About Figma World Engine
                      </a>
                    </Link>
                  </h4>
                  <div className="btn-rm">
                    <Link href="/blog-single">
                      <a className="fl-btn st-4 active">
                        <span className="inner">read more</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div
                className="box-artice fl-scale st-2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature inner-scale">
                  <Link href="/blog-single">
                    <a>
                      <img
                        src="assets/images/post/box-aricle3.jpg"
                        alt="Image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="box-content">
                  <div className="meta-post st-1">
                    <ul className="fx">
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-calendar-alt clr-pri-3" />
                            25 Dec 2021
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-comment-alt-dots clr-pri-3" />
                            Comments (05)
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="title-article-post">
                    <Link href="/blog-single">
                      <a>
                        Create A Headless WordPress Site JAMstack Useful VS Code
                        Extensions Fronts End Developer Smashing
                      </a>
                    </Link>
                  </h4>
                  <div className="btn-rm">
                    <Link href="/blog-single">
                      <a className="fl-btn st-4">
                        <span className="inner">read more</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-brand">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="slider-brand">
                <div className="themesflat-carousel clearfix">
                  <Swiper
                    {...brandSlider}
                    className="owl-carousel owl-theme none dots-none"
                  >
                    <SwiperSlide>
                      <Link href="/">
                        <a>
                          <img
                            className="img2"
                            src="assets/images/common/logoipsum.png"
                            alt="Image"
                          />
                        </a>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link href="/">
                        <a>
                          <img
                            className="img2"
                            src="assets/images/common/logoipsum.png"
                            alt="Image"
                          />
                        </a>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link href="/">
                        <a>
                          <img
                            className="img2"
                            src="assets/images/common/logoipsum.png"
                            alt="Image"
                          />
                        </a>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link href="/">
                        <a>
                          <img
                            className="img2"
                            src="assets/images/common/logoipsum.png"
                            alt="Image"
                          />
                        </a>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link href="/">
                        <a>
                          <img
                            className="img2"
                            src="assets/images/common/logoipsum.png"
                            alt="Image"
                          />
                        </a>
                      </Link>
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
    </Layout>
  );
};
export default FAQs;
