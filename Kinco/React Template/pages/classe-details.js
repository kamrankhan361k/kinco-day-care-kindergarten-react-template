import Link from "next/link";
import LatestProgramSlider from "../src/components/LatestProgramSlider";
import PageBanner from "../src/components/PageBanner";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";

const ClassesDetails = () => {
  return (
    <Layout bodyClass={"classes-details"}>
      <PageBanner pageName={"Classes Details"} />
      <section className="tf-section tf-classe-detail">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-12">
              <article className="article tf-details">
                <h2 className="heading">General Drawing &amp; Painting</h2>
                <div className="tf-img-box fx">
                  <div className="image">
                    <img src="assets/images/avata/comment5.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h5>Nathan M. Beeman</h5>
                    <p className="f-mulish">Senior Teacher</p>
                  </div>
                </div>
                <div
                  className="image m-b30 wow fadeInUp animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <img
                    src="assets/images/common/sc-classe-details1.jpg"
                    alt=""
                  />
                </div>
                <div className="inner-image fx">
                  <div
                    className="image wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <img
                      src="assets/images/common/sc-classe-details2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className="image wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <img
                      src="assets/images/common/sc-classe-details3.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="teacher-desc">
                  <ul className="fx m-b17">
                    <li className="style">
                      <span>M</span>
                    </li>
                    <li>
                      <span className="f-mulish">
                        Sed ut perspiciatis unde omnis iste natus error
                        voluptatem accusantium doloremque laudantium totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        architecto beatae vitae dicta sunt explicabo enim ipsam
                        voluptatem quia voluptas
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="f-mulish">
                  But I must explain to you how all this mistaken idea
                  denouncing pleasure and praising pain was born and will give
                  you a complete account of the system, and expound the actual
                  teachings of the gexplorer of the truth, the master-builder of
                  human happiness. No one rejects, dislikes, or avoids pleasure
                  itself because it is pleasure, but because those who do not
                  know how to pursue
                </p>
                <div
                  className="image m-t40 wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <img
                    src="assets/images/common/sc-classe-details4.jpg"
                    alt=""
                  />
                </div>
                <div className="wrap m-t30">
                  <h3 className="title">Requirements</h3>
                  <p className="f-mulish">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate noprovident similique sunt in culpa qui
                    officia deserunt mollitia animi est laborum
                  </p>
                  <ul className="list">
                    <li>
                      <span>
                        Designing Better Links For Websites And Emails: A
                        Guideline
                      </span>
                    </li>
                    <li>
                      <span>
                        Advent Calendars For Web Designers And Developers
                        (December 2022 Edition)
                      </span>
                    </li>
                    <li>
                      <span>
                        Protect Your API Key In Production With Next.js API
                        Route
                      </span>
                    </li>
                    <li>
                      <span>
                        Smashing Podcast Episode 44 With Chris Ferdinandi Is The
                        Web Dead?
                      </span>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-12">
              <div
                id="sidebar"
                className="classe-details p-t17 wow fadeInRight animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="widget widget-infor-details">
                  <h4 className="title-widget bg-style1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                    >
                      <image
                        width={40}
                        height={40}
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFR0lEQVRYhcWYe4hWVRTFf84446Q26mRK7+wxpdNUUlpREkEQVNQfRZLVH1oRPYgkkiixtEzKHpNlTJJjD3sMQokRIRGVNhk9FIJKx9FSUzOmaNTmod+4Y4/rjrf7+r6ZT2zB5d57zt7nrnvOOvvsczCz/+s6w8wazKzZzK5N41DCkcck4BtgIzAVOBMYm8biSBK8EvgBWAWcDtwFDAH2A0fFrI8gwQuBJuATYCRwG3AMsAhoB8oAi3kJA2Mlhw9OYgEwRUT8/m6k9UG694tgOXAqcBZQDZwCjAaqgAqgG9gJrAU+B74N+d4PvKjn6UBdrPVkonGEZkypmU02s4/NbI8lo9PMdpnZVjPbbmb7IlavmtloM3vSzBrNrDJpZoauCvlNM7MRZrbUzG5WeY9d2PgGGTu5FWY2y8xuNLNaMxuW0HhwDTezq0XO0ZRgE1yDzOxRM1uu9xL5TDGzUaEfnppEcLoqkxou9FplZn8m2I4xs/pQT69T+QC9zw7Z/uc9PIu7dD86poPC4ZreHbJ2/b4HbFZYaVCIGR/RXi7yhX3BgxP8UQ4b8wo2PwaEZqQH5PXAZGCmJt3tIhtF4BN827mMA34u0cPxwJ6YWzIGJJbG8Rtwq+LcXAXkUuBhYEW0pyJwLicAZwdD3KGGwhgOPAB84H8C7NWfHtDdJbFeISUJvwBva/hOBl7X8zzgRNmnxb8yccqMg7XACzL8CVipuLdbw+V/6GvocTHPQ6gBZgE3qaRBBFv0nldOWQS/Air7MPRRXAasVtls4AkF9z4hay3uTiFXVqAOt2vdddvH1Z77PgS8L5s0DfYii+Aw4D5gObBNHzA1GuhwWx4NLtWzy+EN+T4DnKbyNA32ImuIXYMvaTJ8r2zkD/Wqa+dY4AKtz2kYK81dr/pXlEBs0HtRGvwaGAH8HaspDJcCX8pyjkJN3iGNImuIcwnkyjRxKmLWcexUxuwafEzkPEF9EGiUddEa9OVpmfQU6K9NocfftwD3xjwPYrNiH9LgYsXSZ0MpflEaPBeo1+TwnO8zTYo2pei++lysexo8j3weuEb1C3Rt0ntRGlyjrPivWE1hmKT9B1qLnwM6+9pI1hDnEsiVSkflMes4dgB3SINzRc59H1GGQ7Ea9Bl8p/YRLRrqnHTUJf34UN0T8zyITdKdY4w2SXtFtkblRWtwkRpZJ6JbFAeDtfgi4KSY5yFUKzAHcXAh8LS0TLEabFIwbo3VFIbLtZlyzABeDjKUEAJNRjOpggjmUshVqC6aBUfhvTQNeDMjSQiynFSppVZoe+lbxneUGe/TcHco+fTn5gwNehxckkDOt6/zVd6okVoW8xayerBWMSynbYFnIFuVD5ZJexO1dy4E5yvtuk62H2qdXpPlm0VwtcJCe6wmG9FRGa/JcYneZ2oj/09mKwUQPNAPcuWhHNJ3dK8pce1QTFwc88iDLA32B60iWS/dTgDuBgb3hxx5erA/yCn2VSu0zC+2wTDBoDejoWWIktKRynCGqpd8FvtS+GtoE7RQs/KpUJvnKaEYKp9OycB9dwG/h74VHB708goeuqU5xy3KlK/QkpQaRCNYqdRrpZYz19yomFUyfP/yBfBpaEvbw6fnbETLmv9Zc8jde+U7nYq26G/btJ7uVxJQpaOMq3T+Nzjk75nMR0rVdsgPBfpK+fr++BwtmRNDHTZB4WxDcFjzlg5rxoWPvvpxrTWz1iIPoGp0r3NiA3V6UCeBL1EArlJvFDqJghUm0Jqfx3gvFRolfDh9BF2Xrk/frPmOcl7AekbKgWVf0WVm7YeprTlmxr+2LDj7Hwc5XwAAAABJRU5ErkJggg=="
                      />
                    </svg>
                    Informations
                  </h4>
                  <div className="inner-infor">
                    <ul>
                      <li>
                        <span>
                          <i className="fal fa-usd-circle" />
                          Course Price
                        </span>
                        <span className="style">$259</span>
                      </li>
                      <li>
                        <span>
                          <i className="fal fa-user-circle" />
                          Total Seat
                        </span>
                        <span className="style">35.0</span>
                      </li>
                      <li>
                        <span>
                          <i className="fal fa-clock" />
                          Class Time
                        </span>
                        <span className="style">08 - 10am</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          Days
                        </span>
                        <span className="style">Sun-Friday</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-file-alt" />
                          Lessions
                        </span>
                        <span className="style">12</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-globe" />
                          Language
                        </span>
                        <span className="style">English</span>
                      </li>
                    </ul>
                    <Link href="/contact">
                      <a className="fl-btn st-1">
                        <span className="inner">Enroll Now</span>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="widget new-couses">
                  <h4 className="title-widget bg-style2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                    >
                      <image
                        width={40}
                        height={40}
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFR0lEQVRYhcWYe4hWVRTFf84446Q26mRK7+wxpdNUUlpREkEQVNQfRZLVH1oRPYgkkiixtEzKHpNlTJJjD3sMQokRIRGVNhk9FIJKx9FSUzOmaNTmod+4Y4/rjrf7+r6ZT2zB5d57zt7nrnvOOvvsczCz/+s6w8wazKzZzK5N41DCkcck4BtgIzAVOBMYm8biSBK8EvgBWAWcDtwFDAH2A0fFrI8gwQuBJuATYCRwG3AMsAhoB8oAi3kJA2Mlhw9OYgEwRUT8/m6k9UG694tgOXAqcBZQDZwCjAaqgAqgG9gJrAU+B74N+d4PvKjn6UBdrPVkonGEZkypmU02s4/NbI8lo9PMdpnZVjPbbmb7IlavmtloM3vSzBrNrDJpZoauCvlNM7MRZrbUzG5WeY9d2PgGGTu5FWY2y8xuNLNaMxuW0HhwDTezq0XO0ZRgE1yDzOxRM1uu9xL5TDGzUaEfnppEcLoqkxou9FplZn8m2I4xs/pQT69T+QC9zw7Z/uc9PIu7dD86poPC4ZreHbJ2/b4HbFZYaVCIGR/RXi7yhX3BgxP8UQ4b8wo2PwaEZqQH5PXAZGCmJt3tIhtF4BN827mMA34u0cPxwJ6YWzIGJJbG8Rtwq+LcXAXkUuBhYEW0pyJwLicAZwdD3KGGwhgOPAB84H8C7NWfHtDdJbFeISUJvwBva/hOBl7X8zzgRNmnxb8yccqMg7XACzL8CVipuLdbw+V/6GvocTHPQ6gBZgE3qaRBBFv0nldOWQS/Air7MPRRXAasVtls4AkF9z4hay3uTiFXVqAOt2vdddvH1Z77PgS8L5s0DfYii+Aw4D5gObBNHzA1GuhwWx4NLtWzy+EN+T4DnKbyNA32ImuIXYMvaTJ8r2zkD/Wqa+dY4AKtz2kYK81dr/pXlEBs0HtRGvwaGAH8HaspDJcCX8pyjkJN3iGNImuIcwnkyjRxKmLWcexUxuwafEzkPEF9EGiUddEa9OVpmfQU6K9NocfftwD3xjwPYrNiH9LgYsXSZ0MpflEaPBeo1+TwnO8zTYo2pei++lysexo8j3weuEb1C3Rt0ntRGlyjrPivWE1hmKT9B1qLnwM6+9pI1hDnEsiVSkflMes4dgB3SINzRc59H1GGQ7Ea9Bl8p/YRLRrqnHTUJf34UN0T8zyITdKdY4w2SXtFtkblRWtwkRpZJ6JbFAeDtfgi4KSY5yFUKzAHcXAh8LS0TLEabFIwbo3VFIbLtZlyzABeDjKUEAJNRjOpggjmUshVqC6aBUfhvTQNeDMjSQiynFSppVZoe+lbxneUGe/TcHco+fTn5gwNehxckkDOt6/zVd6okVoW8xayerBWMSynbYFnIFuVD5ZJexO1dy4E5yvtuk62H2qdXpPlm0VwtcJCe6wmG9FRGa/JcYneZ2oj/09mKwUQPNAPcuWhHNJ3dK8pce1QTFwc88iDLA32B60iWS/dTgDuBgb3hxx5erA/yCn2VSu0zC+2wTDBoDejoWWIktKRynCGqpd8FvtS+GtoE7RQs/KpUJvnKaEYKp9OycB9dwG/h74VHB708goeuqU5xy3KlK/QkpQaRCNYqdRrpZYz19yomFUyfP/yBfBpaEvbw6fnbETLmv9Zc8jde+U7nYq26G/btJ7uVxJQpaOMq3T+Nzjk75nMR0rVdsgPBfpK+fr++BwtmRNDHTZB4WxDcFjzlg5rxoWPvvpxrTWz1iIPoGp0r3NiA3V6UCeBL1EArlJvFDqJghUm0Jqfx3gvFRolfDh9BF2Xrk/frPmOcl7AekbKgWVf0WVm7YeprTlmxr+2LDj7Hwc5XwAAAABJRU5ErkJggg=="
                      />
                    </svg>
                    New Couses
                  </h4>
                  <ul className="inner-infor">
                    <li className="fx">
                      <img
                        src="assets/images/thumbnails/widget1.jpg"
                        alt="Image"
                        className="feature"
                      />
                      <ul className="box-content">
                        <li className="couses">First (2-4 Year)</li>
                        <li>
                          <h5>
                            <Link href="/blog-single">
                              <a>HR General Science</a>
                            </Link>
                          </h5>
                        </li>
                        <li className="user">
                          <span>By</span>
                          <a href="#">Natha Beem</a>
                        </li>
                      </ul>
                    </li>
                    <li className="fx">
                      <img
                        src="assets/images/thumbnails/widget12.jpg"
                        alt="Image"
                        className="feature"
                      />
                      <ul className="box-content">
                        <li className="couses">First (2-4 Year)</li>
                        <li>
                          <h5>
                            <Link href="/blog-single">
                              <a>HR General Science</a>
                            </Link>
                          </h5>
                        </li>
                        <li className="user">
                          <span>By</span>
                          <a href="#">Natha Beem</a>
                        </li>
                      </ul>
                    </li>
                    <li className="fx">
                      <img
                        src="assets/images/thumbnails/widget13.jpg"
                        alt="Image"
                        className="feature"
                      />
                      <ul className="box-content">
                        <li className="couses">First (2-4 Year)</li>
                        <li>
                          <h5>
                            <Link href="/blog-single">
                              <a>HR General Science</a>
                            </Link>
                          </h5>
                        </li>
                        <li className="user">
                          <span>By</span>
                          <a href="#">Natha Beem</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-gallery">
                  <h4 className="title-widget bg-style3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={44}
                      height={38}
                      viewBox="0 0 44 38"
                    >
                      <image
                        width={44}
                        height={38}
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAYAAAC/H3lnAAADtElEQVRYhc2YW4hNURjHf3NmTAxiXGJIJMKURDRy94JcUiIlySSUy4OkmZT7CynXXB5QHkSKBybXKJeGMCK5ptxnRiKXQWJmaTn/3exz1pnj3PbM/Gu3z1nfWmv/97e+9f2/tbOMMQBzgbVAH8DoaipkAx+BA0BpNAdLeAZwAvgBVHjtTUj4N9AT6A2cAqZHWI0xv4wxVdbTzew6asIo8PMKAbk+zzYnXBWXbn5OId1bNkPCHrc7QA2wxv7JUWPQMdsGWAzMBt4Du4ELTq9IeNzuA52AjUALFCeXAozficaYWuOiLEZf/1WqEe3Udtv+CTnvlVl0B84BdcAYrWQesB6YApyN8zQvtfbW/To+tweFzZp3APBcv38CG4AewAKgEHiUwPPb4gvsoGAF6YGPrB+r9XuqY4mNrMYgTAKrmJSqBk34sMKh0LHAFt3LHEscBE14pe4PgWlAvmJ3KzAfOA48dkbFQbqbbhDwEvjiWMKwRUyRdvipKNsJ5eWkkKqH7Wb6A9wDPgMlTo963AI6ytsnFSaTgZlOz0SQgnCs05hqY8wKY0y5/i+O0Tedq0TzDtYcB1MRjkNK+nZ5uwLbgRHAXWA/MMoZkWEkSjhPS1sM7HFq1DBRW6BcA3o5ozOIRAjbtPQKGAYsAZY5PcLqNVi/K4LMPv+beLRk01ZLE4B9To96WDWbBHQALjvW5FEba0Q8wsUqor/KexedHi7OKxuMBQ6mSfi70xInD+8Clqt4HtfQ4AawDegPLJTC1WqDJlNz10lkiJZuj3Cur+2YEnqZ1CkVLAL6qaS0eA0UJDlPttPiC4mn8sBtkd2UBlkPNizsZv0GjJdTkrlWaZ6IlclRjA4FKrV0VsWOOI9PDcOBKmWO/CRniFnFWQ9/UE3QVZKZKbIW1TpZtAduOtb4yI1lDSm2qvTxIt6RJVWc0cmiSHVEWghJxSq0MYKClfS9wDxJe8rwNl2rAMl6WApcAdYlcSxy4BFurG9pNqe/AE4DAx1rAvAI1zUSYRTLqJZu7Vjr4UlzhDM9wjF1OyDYrDRSz74R5xE1ukeocUibbVwKeTIdlEtYBupcFwtz1PbWb8uRstk3/aSK67mONJ0bSt4ZgJ33jaaZJdH6qeU3Oqi2UGapjCZ8U29rvw4OUYlo8a4hPc8Q+qrgN/ryn+eL1yfADqVDD+F9FnXmytI5ankz/MC904ig319ZepNXqgOqA/Tw/+DfbPYAYc+NBdGELWzhbpfimcLCe5GmgEeuy7/aGor/AjHZzr4LExZTAAAAAElFTkSuQmCC"
                      />
                    </svg>
                    Photo Gallery
                  </h4>
                  <div className="inner-infor list-gallery fx">
                    <div className="box-photo">
                      <div className="overlay fx">
                        <i className="fal fa-plus" />
                      </div>
                      <img
                        src="assets/images/thumbnails/widget5.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="box-photo active">
                      <div className="overlay fx">
                        <i className="fal fa-plus" />
                      </div>
                      <img
                        src="assets/images/thumbnails/widget1.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="box-photo">
                      <div className="overlay fx">
                        <i className="fal fa-plus" />
                      </div>
                      <img
                        src="assets/images/thumbnails/widget6.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="box-photo">
                      <div className="overlay fx">
                        <i className="fal fa-plus" />
                      </div>
                      <img
                        src="assets/images/thumbnails/widget7.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="box-photo">
                      <div className="overlay fx">
                        <i className="fal fa-plus" />
                      </div>
                      <img
                        src="assets/images/thumbnails/widget3.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="box-photo">
                      <div className="overlay fx">
                        <i className="fal fa-plus" />
                      </div>
                      <img
                        src="assets/images/thumbnails/widget8.jpg"
                        alt="Image"
                      />
                    </div>
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
export default ClassesDetails;
