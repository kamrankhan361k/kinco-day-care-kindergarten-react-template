import PageBanner from "../src/components/PageBanner";
import { RightArrow, RightArrowPink, RightArrowWhite } from "../src/Icons";
import Layout from "../src/layouts/Layout";

const Calendar = () => {
  return (
    <Layout bodyClass={"calendar"}>
      <PageBanner pageName={"Calendar"} />
      <section className="tf-section tf-calendar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrap-calendar jus-bet align-fl-end m-b50">
                <div className="calendar-text fx">
                  <span>
                    <i className="far fa-calendar-alt" />
                  </span>
                  <h2>2021-2022</h2>
                </div>
                <a href="#" className="fl-btn st-1">
                  <span className="inner">Download Calender</span>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>January </span>
                  <RightArrowWhite />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>21, First Day of Winter Break</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>25, First Day of Summer Break</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>February</span>
                  <RightArrowWhite />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>21,International Mother’s Language Day</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>March</span>
                  <RightArrowPink />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>No Holidays Are Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>April</span>
                  <RightArrowPink />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>No Holidays Are Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg4 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>May</span>
                  <RightArrowWhite />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>1, International Worker’s Day</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>June</span>
                  <RightArrowPink />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>No Holidays Are Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>July</span>
                  <RightArrowPink />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>No Holidays Are Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg4 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>August</span>
                  <RightArrowWhite />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>1, International Worker’s Day</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>September</span>
                  <RightArrowPink />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>No Holidays Are Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg4 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>October</span>
                  <RightArrowWhite />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>2 Holidays Are Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>November</span>
                  <RightArrowPink />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>No Holidays Are Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>December</span>
                  <RightArrowPink />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>No Holidays Are Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-calendar2">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrap-calendar style2 jus-bet align-fl-end m-b50">
                <div className="calendar-text style2 fx">
                  <span>
                    <i className="far fa-calendar-alt" />
                  </span>
                  <h2>2019-2020</h2>
                </div>
                <a href="#" className="fl-btn st-1">
                  <span className="inner">Download Calender</span>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>January </span>
                  <RightArrow />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>21, First Day of Winter Break</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>25, First Day of Summer Break</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg2 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>February</span>
                  <RightArrow />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>21,International Mother’s Language Day</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>May</span>
                  <RightArrow />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>1, International Worker’s Day</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>August</span>
                  <RightArrow />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>1, International Worker’s Day</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>October </span>
                  <RightArrow />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>2 Holidays Are Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>November</span>
                  <RightArrow />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>No Holidays Are Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Calendar;
