import Link from "next/link";
import { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import PagginationFuntion from "../src/components/PagginationFuntion";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";

const Classes = () => {
  let sort = 6;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".single-product__", sort, active);
    let list = document.querySelectorAll(".single-product__");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout bodyClass={"classes"}>
      <PageBanner pageName={"Classes"} />

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
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 single-product__">
              <div
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
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 single-product__">
              <div
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
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 single-product__">
              <div
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
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 single-product__">
              <div
                className="item-courses wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1300ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/img-courses-1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <div className="box-wrap">
                    <h4 className="title">
                      <Link href="/classe-details">
                        <a>General Science</a>
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
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 single-product__">
              <div
                className="item-courses wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1300ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/img-courses-2.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <div className="box-wrap">
                    <h4 className="title">
                      <Link href="/classe-details">
                        <a>Digital Social Network</a>
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
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 single-product__">
              <div
                className="item-courses wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1300ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/img-courses-3.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <div className="box-wrap">
                    <h4 className="title">
                      <Link href="/classe-details">
                        <a>Physical Education</a>
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
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 single-product__">
              <div
                className="item-courses wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1300ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/img-courses-4.jpg"
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
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 single-product__">
              <div
                className="item-courses wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1300ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/img-courses-5.jpg"
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
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 single-product__">
              <div
                className="item-courses wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1300ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/img-courses-6.jpg"
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
            </div>
            <div className="col-md-12">
              <div
                className="themesflat-pagination style fx fx-style2"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <PagginationFuntion
                  setActive={setActive}
                  active={active}
                  state={state}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Classes;
