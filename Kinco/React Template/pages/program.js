import Link from "next/link";
import { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import PagginationFuntion from "../src/components/PagginationFuntion";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";

const Programs = () => {
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".single_box_", sort, active);
    let list = document.querySelectorAll(".single_box_");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout bodyClass={"pricing"}>
      <PageBanner pageName={"Programs"} pageTitle={"Programs"} />
      <section className="tf-section tf-program">
        <div className="container">
          <div className="row">
            <div className="col-md-6 single_box_">
              <div
                className="sc-program active wow fadeIn animated"
                data-wow-delay="0.5ms"
                data-wow-duration="1000ms"
              >
                <div className="content">
                  <p>First School (1-2 Years)</p>
                  <h3>
                    <Link href="/program-details">
                      <a>For Children To Recognize And Be Human Sociable</a>
                    </Link>
                  </h3>
                  <Link href="/program-details">
                    <a className="fl-btn st-13">
                      <span className="inner">read more</span>
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img src="assets/images/common/sc-program1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 single_box_">
              <div
                className="sc-program wow fadeIn animated"
                data-wow-delay="0.5ms"
                data-wow-duration="1200ms"
              >
                <div className="content">
                  <p>First School (1-2 Years)</p>
                  <h3>
                    <Link href="/program-details">
                      <a>For Children To Recognize And Be Human Sociable</a>
                    </Link>
                  </h3>
                  <Link href="/program-details">
                    <a className="fl-btn st-13">
                      <span className="inner">read more</span>
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img src="assets/images/common/sc-program2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 single_box_">
              <div
                className="sc-program wow fadeIn animated"
                data-wow-delay="0.5ms"
                data-wow-duration="1200ms"
              >
                <div className="content">
                  <p>First School (1-2 Years)</p>
                  <h3>
                    <Link href="/program-details">
                      <a>For Children To Recognize And Be Human Sociable</a>
                    </Link>
                  </h3>
                  <Link href="/program-details">
                    <a className="fl-btn st-13">
                      <span className="inner">read more</span>
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img src="assets/images/common/sc-program3.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 single_box_">
              <div
                className="sc-program wow fadeIn animated"
                data-wow-delay="0.5ms"
                data-wow-duration="1200ms"
              >
                <div className="content">
                  <p>First School (1-2 Years)</p>
                  <h3>
                    <Link href="/program-details">
                      <a>For Children To Recognize And Be Human Sociable</a>
                    </Link>
                  </h3>
                  <Link href="/program-details">
                    <a className="fl-btn st-13">
                      <span className="inner">read more</span>
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img src="assets/images/common/sc-program4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 single_box_">
              <div
                className="sc-program wow fadeIn animated"
                data-wow-delay="0.5ms"
                data-wow-duration="1200ms"
              >
                <div className="content">
                  <p>First School (1-2 Years)</p>
                  <h3>
                    <Link href="/program-details">
                      <a>For Children To Recognize And Be Human Sociable</a>
                    </Link>
                  </h3>
                  <Link href="/program-details">
                    <a className="fl-btn st-13">
                      <span className="inner">read more</span>
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img src="assets/images/common/sc-program5.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 single_box_">
              <div
                className="sc-program wow fadeIn animated"
                data-wow-delay="0.5ms"
                data-wow-duration="1200ms"
              >
                <div className="content">
                  <p>First School (1-2 Years)</p>
                  <h3>
                    <Link href="/program-details">
                      <a>For Children To Recognize And Be Human Sociable</a>
                    </Link>
                  </h3>
                  <Link href="/program-details">
                    <a className="fl-btn st-13">
                      <span className="inner">read more</span>
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img src="assets/images/common/sc-program6.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 single_box_">
              <div
                className="sc-program wow fadeIn animated"
                data-wow-delay="0.5ms"
                data-wow-duration="1200ms"
              >
                <div className="content">
                  <p>First School (1-2 Years)</p>
                  <h3>
                    <Link href="/program-details">
                      <a>For Children To Recognize And Be Human Sociable</a>
                    </Link>
                  </h3>
                  <Link href="/program-details">
                    <a className="fl-btn st-13">
                      <span className="inner">read more</span>
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img src="assets/images/common/sc-program7.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 single_box_">
              <div
                className="sc-program wow fadeIn animated"
                data-wow-delay="0.5ms"
                data-wow-duration="1200ms"
              >
                <div className="content">
                  <p>First School (1-2 Years)</p>
                  <h3>
                    <Link href="/program-details">
                      <a>For Children To Recognize And Be Human Sociable</a>
                    </Link>
                  </h3>
                  <Link href="/program-details">
                    <a className="fl-btn st-13">
                      <span className="inner">read more</span>
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img src="assets/images/common/sc-program8.jpg" alt="" />
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
export default Programs;
