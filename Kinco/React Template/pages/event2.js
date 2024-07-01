import Link from "next/link";
import { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import PagginationFuntion from "../src/components/PagginationFuntion";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";

const Events2 = () => {
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
      <PageBanner pageName={"Events2"} />
      <section className="tf-section tf-event">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 single_box_">
              <div
                className="sc-event-box style2 active fx wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="image">
                  <img src="assets/images/common/07.vents.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/event-details">
                      <a>Mother’s Day</a>
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <span>
                        <i className="far fa-map-marker-alt" />
                      </span>
                      <span>
                        55 Main Street, 2nd Block, 3rd Floor, New York
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-calendar-alt" />
                        25 Feb 2022
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-clock" />
                        Friday, 08am - 05pm
                      </span>
                    </li>
                  </ul>
                  <Link href="/event-details">
                    <a className="fl-btn st-1">
                      <span className="inner">Read more</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 single_box_">
              <div
                className="sc-event-box style2 active fx wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="image">
                  <img src="assets/images/common/08.vents.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/event-details">
                      <a>Annual Ceremony</a>
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <span>
                        <i className="far fa-map-marker-alt" />
                      </span>
                      <span>
                        55 Main Street, 2nd Block, 3rd Floor, New York
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-calendar-alt" />
                        25 Feb 2022
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-clock" />
                        Friday, 08am - 05pm
                      </span>
                    </li>
                  </ul>
                  <Link href="/event-details">
                    <a className="fl-btn st-1">
                      <span className="inner">Read more</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 single_box_">
              <div
                className="sc-event-box style2 active fx wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="image">
                  <img src="assets/images/common/09.vents.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/event-details">
                      <a>Mother’s Day</a>
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <span>
                        <i className="far fa-map-marker-alt" />
                      </span>
                      <span>
                        55 Main Street, 2nd Block, 3rd Floor, New York
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-calendar-alt" />
                        25 Feb 2022
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-clock" />
                        Friday, 08am - 05pm
                      </span>
                    </li>
                  </ul>
                  <Link href="/event-details">
                    <a className="fl-btn st-1">
                      <span className="inner">Read more</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 single_box_">
              <div
                className="sc-event-box style2 active fx wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="image">
                  <img src="assets/images/common/10.vents.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/event-details">
                      <a>Annual Ceremony</a>
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <span>
                        <i className="far fa-map-marker-alt" />
                      </span>
                      <span>
                        55 Main Street, 2nd Block, 3rd Floor, New York
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-calendar-alt" />
                        25 Feb 2022
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-clock" />
                        Friday, 08am - 05pm
                      </span>
                    </li>
                  </ul>
                  <Link href="/event-details">
                    <a className="fl-btn st-1">
                      <span className="inner">Read more</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 single_box_">
              <div
                className="sc-event-box style2 active fx wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="image">
                  <img src="assets/images/common/11.vents.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/event-details">
                      <a>Mother’s Day</a>
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <span>
                        <i className="far fa-map-marker-alt" />
                      </span>
                      <span>
                        55 Main Street, 2nd Block, 3rd Floor, New York
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-calendar-alt" />
                        25 Feb 2022
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-clock" />
                        Friday, 08am - 05pm
                      </span>
                    </li>
                  </ul>
                  <Link href="/event-details">
                    <a className="fl-btn st-1">
                      <span className="inner">Read more</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 single_box_">
              <div
                className="sc-event-box style2 active fx wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="image">
                  <img src="assets/images/common/12.vents.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/event-details">
                      <a>Annual Ceremony</a>
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <span>
                        <i className="far fa-map-marker-alt" />
                      </span>
                      <span>
                        55 Main Street, 2nd Block, 3rd Floor, New York
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-calendar-alt" />
                        25 Feb 2022
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-clock" />
                        Friday, 08am - 05pm
                      </span>
                    </li>
                  </ul>
                  <Link href="/event-details">
                    <a className="fl-btn st-1">
                      <span className="inner">Read more</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 single_box_">
              <div
                className="sc-event-box style2 active fx wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="image">
                  <img src="assets/images/common/13.vents.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/event-details">
                      <a>Mother’s Day</a>
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <span>
                        <i className="far fa-map-marker-alt" />
                      </span>
                      <span>
                        55 Main Street, 2nd Block, 3rd Floor, New York
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-calendar-alt" />
                        25 Feb 2022
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-clock" />
                        Friday, 08am - 05pm
                      </span>
                    </li>
                  </ul>
                  <Link href="/event-details">
                    <a className="fl-btn st-1">
                      <span className="inner">Read more</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 single_box_">
              <div
                className="sc-event-box style2 active fx wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="image">
                  <img src="assets/images/common/14.vents.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/event-details">
                      <a>Annual Ceremony</a>
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <span>
                        <i className="far fa-map-marker-alt" />
                      </span>
                      <span>
                        55 Main Street, 2nd Block, 3rd Floor, New York
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-calendar-alt" />
                        25 Feb 2022
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-clock" />
                        Friday, 08am - 05pm
                      </span>
                    </li>
                  </ul>
                  <Link href="/event-details">
                    <a className="fl-btn st-1">
                      <span className="inner">Read more</span>
                    </a>
                  </Link>
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
export default Events2;
