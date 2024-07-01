// import DonutChart from "../src/components/DonutChart";
import dynamic from "next/dynamic";
import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import TfCounter from "../src/components/TfCounter";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";
const DonutChart = dynamic(() => import("../src/components/DonutChart"), {
  ssr: false,
});

const Teacher = () => {
  return (
    <Layout bodyClass={"teacher"}>
      <PageBanner pageName={"Our Teacher"} />

      <section className="tf-section tf-about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-2">
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
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <p className="sub f-mulish clr-pri-1">Computer Teacher</p>
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
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <p className="sub f-mulish clr-pri-1">Arts &amp; Drawing</p>
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
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <p className="sub f-mulish clr-pri-1">English Teacher</p>
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
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <p className="sub f-mulish clr-pri-1">Science Teacher</p>
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
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-employee wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="800ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-employee-5.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content st-5">
                  <h4 className="name">
                    <Link href="/teacher-details">
                      <a className="clr-pri-1">Herbert D. Malick</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">Computer Teacher</p>
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
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-employee wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-employee-6.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content st-1">
                  <h4 className="name">
                    <Link href="/teacher-details">
                      <a className="clr-pri-1">Steven S. Mitchell</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">Arts &amp; Drawing</p>
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
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-employee wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-employee-7.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content st-7">
                  <h4 className="name">
                    <Link href="/teacher-details">
                      <a className="clr-pri-1">Frank T. Norman</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">English Teacher</p>
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
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-employee wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1400ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-employee-8.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content st-8">
                  <h4 className="name">
                    <Link href="/teacher-details">
                      <a className="clr-pri-1">Scott M. Fletcher</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">Science Teacher</p>
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
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-employee wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="800ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-employee-9.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content st-7">
                  <h4 className="name">
                    <Link href="/teacher-details">
                      <a className="clr-pri-1">Herbert D. Malick</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">Computer Teacher</p>
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
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-employee wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-employee-12.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content st-3">
                  <h4 className="name">
                    <Link href="/teacher-details">
                      <a className="clr-pri-1">Steven S. Mitchell</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">Arts &amp; Drawing</p>
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
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-employee wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-employee-10.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content st-2">
                  <h4 className="name">
                    <Link href="/teacher-details">
                      <a className="clr-pri-1">Ronald V. White</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">English Teacher</p>
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
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-employee wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1400ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-employee-11.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content st-1">
                  <h4 className="name">
                    <Link href="/teacher-details">
                      <a className="clr-pri-1">Donald M. Laporte</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">Science Teacher</p>
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
            </div>
          </div>
        </div>
      </section>
      <TfCounter />
      <section className="tf-section tf-counter2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="title-heading m-t27 b58">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <span className="inner-sub st-2">Best Skills</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  We’re Very Professional and Experience
                </h2>
              </div>
              {/*/.title-heading*/}
              <div className="wrap-couter fx">
                <div className="progress-couter firt">
                  <div className="couter">
                    <div className="chart">
                      <DonutChart
                        value={79}
                        color={"#FC477E"}
                        background={"#FFECF2"}
                      />
                      <span className="percent">79</span>
                    </div>
                    <h4 className="heading-progress">Service Orientation</h4>
                  </div>
                </div>
                <div className="progress-couter two">
                  <div className="couter">
                    <div className="chart">
                      <DonutChart
                        value={83}
                        color={"#FAB319"}
                        background={"#fef7e8"}
                      />
                      <span className="percent">83</span>
                    </div>

                    <h4 className="heading-progress">Time Management</h4>
                  </div>
                </div>
                <div className="progress-couter three">
                  <div className="couter">
                    <div className="chart">
                      <DonutChart
                        value={68}
                        color={"#B250FE"}
                        background={"#f7edff"}
                      />
                      <span className="percent">68</span>
                    </div>
                    <h4 className="heading-progress">Critical Thinking</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image text-right">
                <img
                  src="assets/images/common/sc-service-9.jpg"
                  alt="Image"
                  className="mb-w100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Teacher;
