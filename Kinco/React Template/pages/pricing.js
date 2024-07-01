import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import LatestProgramSlider from "../src/components/LatestProgramSlider";
import PageBanner from "../src/components/PageBanner";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";

const Pricing = () => {
  return (
    <Layout bodyClass={"pricing"}>
      <PageBanner pageName={"Pricing Plan"} />
      <section className="tf-section tf-pricing">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-heading m-t27 b61">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <span className="inner-sub st-2">Pricing Plan</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  We Provide Awesome Pricing Package For Study
                </h2>
              </div>
              {/*/.title-heading*/}
            </div>
            <div className="col-md-12">
              <Tab.Container defaultActiveKey={"monthly"}>
                <div className="flat-tabs">
                  <Nav as={"ul"} className="menu-tab">
                    <Nav.Link as={"li"} eventKey={"monthly"} className="month">
                      <span className="fl-btn st-9">
                        <span className="inner">monthly</span>
                      </span>
                    </Nav.Link>
                    <Nav.Link as={"li"} eventKey={"year"} className="year">
                      <span className="fl-btn st-9">
                        <span className="inner">yearly</span>
                      </span>
                    </Nav.Link>
                  </Nav>
                  <Tab.Content className="content-tab">
                    <Tab.Pane eventKey={"monthly"}>
                      <div className="content-inner">
                        <div
                          className="sc-pricing m-b90 wow fadeIn animated"
                          data-wow-delay="0.3ms"
                          data-wow-duration="1200ms"
                        >
                          <div className="content">
                            <h4>1st Session</h4>
                            <p className="f-mulish">
                              Sit amet, consectetur adipiscing elit sed eiusmod
                              tempor
                            </p>
                          </div>
                          <div className="pricing">
                            <span className="number">$125.59/</span>
                            <span>monthly</span>
                          </div>
                          <ul className="list">
                            <li>
                              <span>Outdoor Games</span>
                            </li>
                            <li>
                              <span>School Transports</span>
                            </li>
                            <li>
                              <span>Best/Special Programs</span>
                            </li>
                            <li>
                              <span>Annual Tours &amp; Travels</span>
                            </li>
                          </ul>
                          <Link href="/contact">
                            <a className="fl-btn st-9">
                              <span className="inner">Choose plan</span>
                            </a>
                          </Link>
                        </div>
                        <div
                          className="sc-pricing style2 wow fadeIn animated"
                          data-wow-delay="0.3ms"
                          data-wow-duration="1200ms"
                        >
                          <ul className="fx start">
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                          </ul>
                          <div className="content">
                            <h4>1st Session</h4>
                            <p className="f-mulish">
                              Sit amet, consectetur adipiscing elit sed eiusmod
                              tempor
                            </p>
                          </div>
                          <div className="pricing">
                            <span className="number">$249.59/</span>
                            <span>monthly</span>
                          </div>
                          <ul className="list">
                            <li>
                              <span>Outdoor Games</span>
                            </li>
                            <li>
                              <span>School Transports</span>
                            </li>
                            <li>
                              <span>Best/Special Programs</span>
                            </li>
                            <li>
                              <span>Annual Tours &amp; Travels</span>
                            </li>
                            <li>
                              <span>Fun &amp; Game Campaing</span>
                            </li>
                            <li>
                              <span>Tiffen &amp; Lunch Package</span>
                            </li>
                          </ul>
                          <Link href="/contact">
                            <a className="fl-btn st-9">
                              <span className="inner">Choose plan</span>
                            </a>
                          </Link>
                        </div>
                        <div
                          className="sc-pricing style3 wow fadeIn animated"
                          data-wow-delay="0.3ms"
                          data-wow-duration="1200ms"
                        >
                          <div className="content">
                            <h4>1st Session</h4>
                            <p className="f-mulish">
                              Sit amet, consectetur adipiscing elit sed eiusmod
                              tempor
                            </p>
                          </div>
                          <div className="pricing">
                            <span className="number">$398.59/</span>
                            <span>monthly</span>
                          </div>
                          <ul className="list">
                            <li>
                              <span>Outdoor Games</span>
                            </li>
                            <li>
                              <span>School Transports</span>
                            </li>
                            <li>
                              <span>Best/Special Programs</span>
                            </li>
                            <li>
                              <span>Annual Tours &amp; Travels</span>
                            </li>
                            <li>
                              <span>Fun &amp; Game Campaing</span>
                            </li>
                            <li>
                              <span>Tiffen &amp; Lunch Package</span>
                            </li>
                          </ul>
                          <Link href="/contact">
                            <a className="fl-btn st-9">
                              <span className="inner">Choose plan</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={"year"}>
                      <div className="content-inner">
                        <div
                          className="sc-pricing m-b90 wow fadeIn animated"
                          data-wow-delay="0.3ms"
                          data-wow-duration="1200ms"
                        >
                          <div className="content">
                            <h4>1st Session</h4>
                            <p className="f-mulish">
                              Sit amet, consectetur adipiscing elit sed eiusmod
                              tempor
                            </p>
                          </div>
                          <div className="pricing">
                            <span className="number">$125.59/</span>
                            <span>monthly</span>
                          </div>
                          <ul className="list">
                            <li>
                              <span>Outdoor Games</span>
                            </li>
                            <li>
                              <span>School Transports</span>
                            </li>
                            <li>
                              <span>Best/Special Programs</span>
                            </li>
                            <li>
                              <span>Annual Tours &amp; Travels</span>
                            </li>
                          </ul>
                          <Link href="/contact">
                            <a className="fl-btn st-9">
                              <span className="inner">Choose plan</span>
                            </a>
                          </Link>
                        </div>
                        <div
                          className="sc-pricing style2 wow fadeIn animated"
                          data-wow-delay="0.3ms"
                          data-wow-duration="1200ms"
                        >
                          <ul className="fx start">
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                          </ul>
                          <div className="content">
                            <h4>1st Session</h4>
                            <p className="f-mulish">
                              Sit amet, consectetur adipiscing elit sed eiusmod
                              tempor
                            </p>
                          </div>
                          <div className="pricing">
                            <span className="number">$249.59/</span>
                            <span>monthly</span>
                          </div>
                          <ul className="list">
                            <li>
                              <span>Outdoor Games</span>
                            </li>
                            <li>
                              <span>School Transports</span>
                            </li>
                            <li>
                              <span>Best/Special Programs</span>
                            </li>
                            <li>
                              <span>Annual Tours &amp; Travels</span>
                            </li>
                            <li>
                              <span>Fun &amp; Game Campaing</span>
                            </li>
                            <li>
                              <span>Tiffen &amp; Lunch Package</span>
                            </li>
                          </ul>
                          <Link href="/contact">
                            <a className="fl-btn st-9">
                              <span className="inner">Choose plan</span>
                            </a>
                          </Link>
                        </div>
                        <div
                          className="sc-pricing style3 wow fadeIn animated"
                          data-wow-delay="0.3ms"
                          data-wow-duration="1200ms"
                        >
                          <div className="content">
                            <h4>1st Session</h4>
                            <p className="f-mulish">
                              Sit amet, consectetur adipiscing elit sed eiusmod
                              tempor
                            </p>
                          </div>
                          <div className="pricing">
                            <span className="number">$398.59/</span>
                            <span>monthly</span>
                          </div>
                          <ul className="list">
                            <li>
                              <span>Outdoor Games</span>
                            </li>
                            <li>
                              <span>School Transports</span>
                            </li>
                            <li>
                              <span>Best/Special Programs</span>
                            </li>
                            <li>
                              <span>Annual Tours &amp; Travels</span>
                            </li>
                            <li>
                              <span>Fun &amp; Game Campaing</span>
                            </li>
                            <li>
                              <span>Tiffen &amp; Lunch Package</span>
                            </li>
                          </ul>
                          <Link href="/contact">
                            <a className="fl-btn st-9">
                              <span className="inner">Choose plan</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
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
                      <g>
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
      <section className="tf-section tf-courses">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Latest Program</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  We Provide Awesome Program To Build Bright Future
                </h2>
              </div>
            </div>
            <div className="col-12">
              <div className="slider-courses">
                <div className="themesflat-carousel clearfix">
                  <LatestProgramSlider />
                </div>
                {/*/.themesflat-carousel*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Pricing;
