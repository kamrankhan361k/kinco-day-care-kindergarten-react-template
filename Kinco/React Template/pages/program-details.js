import Link from "next/link";
import LatestProgramSlider from "../src/components/LatestProgramSlider";
import PageBanner from "../src/components/PageBanner";
import ProgramAccordion from "../src/components/ProgramAccordion";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";

const ProgramsDetails = () => {
  return (
    <Layout bodyClass={"program-details"}>
      <PageBanner pageName={"Program Single"} pageTitle={"Program Single"} />
      <section className="tf-section tf-program-details">
        <img
          src="assets/images/pattern/program_details1.png"
          alt=""
          className="bg1"
        />
        <img
          src="assets/images/pattern/program_details2.png"
          alt=""
          className="bg2"
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-12 col-12">
              <div className="sc-program-content">
                <div className="title-heading">
                  <div className="sub-heading clr-pri-3 f-mulish">
                    <span className="inner-sub st-2">
                      First School (1-2 Years)
                    </span>
                    <RightArrow />
                  </div>
                  <h2 className="title clr-pri-2">
                    For Children To Recognize Be Human Sociable
                  </h2>
                </div>
                <div className="wrap-box">
                  <p className="f-mulish st-1">
                    Amet consectetur adipiscin elitsed eiusmod tempor incidie
                    labore dolore magna aliqua. Quis ipsum suspendisse ultries
                    gravida. Risus commodo maecenas accumsan
                  </p>
                  <div className="icon" />
                </div>
                <div className="tf-img-box fx">
                  <div className="image">
                    <img src="assets/images/avata/comment4.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h5>Ronald J. Jones</h5>
                    <p className="f-mulish">Head Lead Teacher</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12 col-12">
              <div
                className="image text-right p-t15 tab-l-100 wow fadeInRight animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <img src="assets/images/common/sc-program9.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-program-details2">
        <div className="container-fluid">
          <div className="wrap-details fx">
            <div
              className="image tab-l-100 wow fadeInLeft animated"
              data-wow-delay="0.3ms"
              data-wow-duration="1200ms"
            >
              <img src="assets/images/common/sc-program10.jpg" alt="" />
            </div>
            <div className="sc-about-2">
              <div className="title-heading">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <span className="inner-sub st-2">Why Learn Us ?</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  We Learn Smart Way To Build Bright Futute
                </h2>
              </div>
              <div className="inner">
                <p
                  className="wrap f-mulish clr-pri-4  wow fadeIn   animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1000ms",
                    animationDelay: "0.3ms",
                    animationName: "fadeIn",
                  }}
                >
                  Amet consectetur adipiscin elitsed eiusmod tempor incididunt
                  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                  gravida. Risus commodo maecenas accumsan
                </p>
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
                <Link href="/about">
                  <a className="fl-btn st-11">
                    <span className="inner">learn more Us</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-program-details3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="sc-about-3">
                <div className="sc-about-content">
                  <div className="title-heading">
                    <div className="sub-heading clr-pri-3 f-mulish">
                      <span className="inner-sub st-2">How Needs Programs</span>
                      <RightArrow />
                    </div>
                    <h2 className="title clr-pri-2">
                      Programs Make Great Place Learn More Knowladge
                    </h2>
                  </div>
                  <p className="wrap f-mulish st-1">
                    Sed ut perspiciatis unde omnis iste natus error sit volupta
                    accusantium doloremque laudantium totam rem aperiam eaque
                    quae abillo inventore veritatis et quasi architecto beatae
                    vitae dicta sunts.
                  </p>
                  <div className="box-btn fx">
                    <Link href="/about">
                      <a className="fl-btn st-3">
                        <span className="inner">learn more Us</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ProgramAccordion />
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-galley">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-4">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Photo Gallery</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Explore Our Case Studies &amp; Recent Photo Gallery
                </h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div
                className="sc-gallery wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature active">
                  <img
                    src="assets/images/common/sc-gallery-1.jpg"
                    alt="Image"
                  />
                  <div className="overlay" />
                  <div className="box-content">
                    <h5 className="title">
                      <Link href="/gallery">
                        <a className=" clr-pri-2">Outdoor &amp; Gaming</a>
                      </Link>
                    </h5>
                    <p className="f-rubik">kindergarten</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div
                className="sc-gallery wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-gallery-2.jpg"
                    alt="Image"
                  />
                  <div className="overlay" />
                  <div className="box-content">
                    <h5 className="title">
                      <Link href="/gallery">
                        <a className=" clr-pri-2">Outdoor &amp; Gaming</a>
                      </Link>
                    </h5>
                    <p className="f-rubik">kindergarten</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div
                className="sc-gallery wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-gallery-3.jpg"
                    alt="Image"
                  />
                  <div className="overlay" />
                  <div className="box-content">
                    <h5 className="title">
                      <Link href="/gallery">
                        <a className="clr-pri-2">Outdoor &amp; Gaming</a>
                      </Link>
                    </h5>
                    <p className="f-rubik">kindergarten</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div
                className="sc-gallery mg-bt wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-gallery-4.jpg"
                    alt="Image"
                  />
                  <div className="overlay" />
                  <div className="box-content">
                    <h5 className="title">
                      <Link href="/gallery">
                        <a className=" clr-pri-2">Outdoor &amp; Gaming</a>
                      </Link>
                    </h5>
                    <p className="f-rubik">kindergarten</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div
                className="sc-gallery mgbt-0 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-gallery-5.jpg"
                    alt="Image"
                  />
                  <div className="overlay" />
                  <div className="box-content">
                    <h5 className="title">
                      <Link href="/gallery">
                        <a className=" clr-pri-2">Outdoor &amp; Gaming</a>
                      </Link>
                    </h5>
                    <p className="f-rubik">kindergarten</p>
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
export default ProgramsDetails;
