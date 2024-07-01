import Link from "next/link";
import { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import PagginationFuntion from "../src/components/PagginationFuntion";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";

const Events = () => {
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".sc-event-box", sort, active);
    let list = document.querySelectorAll(".sc-event-box");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout bodyClass={"pricing"}>
      <PageBanner pageName={"Events"} />
      <section className="tf-section tf-event">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrap-sc-event">
                <div
                  className="sc-event-box active fx wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <div className="image">
                    <img src="assets/images/common/01.vents.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="/event-details">
                        <a>Internastional Mother’s Day</a>
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-map-marker-alt" />
                          55 Main Street,2nd Block, 3rd Floor, New York City
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          25 Feb 2022
                        </span>
                        <span>
                          <i className="far fa-clock" />
                          Friday, 08am - 05pm
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link href="/event-details">
                    <a className="fl-btn st-1">
                      <span className="inner">Read more</span>
                    </a>
                  </Link>
                </div>
                <div
                  className="sc-event-box fx wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <div className="image">
                    <img src="assets/images/common/02.vents.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="/event-details">
                        <a>Price Giving Ceremony</a>
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-map-marker-alt" />
                          55 Main Street,2nd Block, 3rd Floor, New York City
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          25 Feb 2022
                        </span>
                        <span>
                          <i className="far fa-clock" />
                          Friday, 08am - 05pm
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link href="/event-details">
                    <a className="fl-btn st-1">
                      <span className="inner">Read more</span>
                    </a>
                  </Link>
                </div>
                <div
                  className="sc-event-box fx wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <div className="image">
                    <img src="assets/images/common/03.vents.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="/event-details">
                        <a>Results Awards Conference</a>
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-map-marker-alt" />
                          55 Main Street,2nd Block, 3rd Floor, New York City
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          25 Feb 2022
                        </span>
                        <span>
                          <i className="far fa-clock" />
                          Friday, 08am - 05pm
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link href="/event-details">
                    <a className="fl-btn st-1">
                      <span className="inner">Read more</span>
                    </a>
                  </Link>
                </div>
                <div
                  className="sc-event-box fx wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <div className="image">
                    <img src="assets/images/common/04.vents.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="/event-details">
                        <a>Internastional Mother’s Day</a>
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-map-marker-alt" />
                          55 Main Street,2nd Block, 3rd Floor, New York City
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          25 Feb 2022
                        </span>
                        <span>
                          <i className="far fa-clock" />
                          Friday, 08am - 05pm
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link href="/event-details">
                    <a className="fl-btn st-1">
                      <span className="inner">Read more</span>
                    </a>
                  </Link>
                </div>
                <div
                  className="sc-event-box fx wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <div className="image">
                    <img src="assets/images/common/05.vents.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="/event-details">
                        <a>Internastional Mother’s Day</a>
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-map-marker-alt" />
                          55 Main Street,2nd Block, 3rd Floor, New York City
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          25 Feb 2022
                        </span>
                        <span>
                          <i className="far fa-clock" />
                          Friday, 08am - 05pm
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link href="/event-details">
                    <a className="fl-btn st-1">
                      <span className="inner">Read more</span>
                    </a>
                  </Link>
                </div>
                <div
                  className="sc-event-box fx wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <div className="image">
                    <img src="assets/images/common/06.vents.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="/event-details">
                        <a>Keep Always Your Smile</a>
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-map-marker-alt" />
                          55 Main Street,2nd Block, 3rd Floor, New York City
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          25 Feb 2022
                        </span>
                        <span>
                          <i className="far fa-clock" />
                          Friday, 08am - 05pm
                        </span>
                      </li>
                    </ul>
                  </div>
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
                className="themesflat-pagination style m-t30 fx fx-style2"
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
export default Events;
