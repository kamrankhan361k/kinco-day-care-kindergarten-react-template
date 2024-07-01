import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const EventsDetails = () => {
  return (
    <Layout bodyClass={"event-details"}>
      <PageBanner pageName={"Events Details"} />
      <section className="tf-section tf-event-detail">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-12">
              <article className="article tf-details">
                <div
                  className="image m-b26 wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <img src="assets/images/post/box-article10.jpg" alt="" />
                </div>
                <div className="wrap m-b45">
                  <h2 className="title">International Child’s Day</h2>
                  <p className="f-mulish">
                    But I must explain to you how all this mistaken idea
                    denouncing pleasure and praising pain was born and will give
                    you a complete account of the system, and expound the actual
                    teachings of the gexplorer of the truth, the master-builder
                    of human happiness. No one rejects, dislikes, or avoids
                    pleasure itself because it is pleasure, but because those
                    who do not know how to pursue
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
                <div className="inner-image fx">
                  <div
                    className="image wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <img src="assets/images/post/01_event_details.jpg" alt="" />
                  </div>
                  <div
                    className="image wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <img src="assets/images/post/02_event_details.jpg" alt="" />
                  </div>
                </div>
                <div className="wrap">
                  <h3 className="title">Event Venifites</h3>
                  <p className="f-mulish">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate noprovident similique sunt in culpa qui
                    officia deserunt mollitia animi est laborum
                  </p>
                  <p className="font-style">
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihiles molestiae consequatur vel illum qui
                    dolorem eum pariatur
                  </p>
                </div>
                <div className="map">
                  <div className="flat-map">
                    <iframe
                      className="map-content wow fadeInUp animated"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4457.30210514409!2d144.9550716623184!3d-37.818421643591336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20%C3%9Ac!5e0!3m2!1svi!2s!4v1631871760998!5m2!1svi!2s"
                      width={1720}
                      height={655}
                      style={{
                        border: 0,
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                      allowFullScreen=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-12">
              <div
                id="sidebar"
                className="sidebar-style2 classe-details wow fadeInRight animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="widget widget-infor-details">
                  <h4 className="title-widget bg-style1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={38}
                      height={40}
                      viewBox="0 0 38 40"
                    >
                      <image
                        width={38}
                        height={40}
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAoCAYAAACSN4jeAAAFE0lEQVRYhb1Ya4iVVRRdo5aaWpNTyUw4qeWdybKyycymKIZSIyOLoiB6wETQayjKKOtHkEHWj4iSIoWyt5BkajpWzqRpj0EqR83sASNGlBplD5p0asW2dejMufvcueOPDizud/Za+3z7nu98++zzgeT/gVqSC0l28b/2I8l2kud79x+A/rUKAGP66fMAgI0ApgFoBXA5gEsAPAlgJIB2AOsAHNLLy4s2QQXJq0muJ/kXyZ9JDnV0Hl7X/HQ7XMBZJPcKg4PdEwY0k2wluU+DW2Cv6LrK0ad4TdrLSO4i+YGjiWF/+PNSgc0i+a0GNeFdJI8RN072ox2/GE9Id7hsNepvdLQBVdJclwusjeRvJIc73AVyPsrhAiZFC7w5so8l2eLoYywl+UsusFUk1zl2w6nJTHjYpMc+VdqnSQ5wdB4a5VPpkW+S7EhsBZKrNZN0fAKGi79C/avUn+BoPQwiuZ/kzHLSxQwA2wGMBrAEQBeAhUWqf9tE/a7V72IAw+RTTuuRZogX9askP9P1YP3jRRF/c4lZmyDuCIfzcCLJhyJ7g/xrUvEZeowr1D9Wwmr1h5D8ieTbzk3uJ/mD9Ic6vIeC9J+KeyT86SCezt6tVfaBJL8m+SvJ5VJ8p7UQfC0BvyzOEuqfJFc6QeRQLd8lJHtI3hsCmxK9PfYoTk8W8AhxH5Kc47xhldJfpH69+isygUBLZX5iowJDCGwnyS8c0TXOgDlY260Zjtfa8oz+NvFz1X9Gb2MhDuwjpQHLUdO0r3U6g+VgM/MVyc0K7jDZJ+rmSx0fwykk/5Aftb4RB1YVkdbe07rxBkuxOiRE2W1P/D3ajE8W/0ayBCxBn6dHZ+2EdOy4M0nbhheAhw0aNPX5Xht/eDPrpNtBco+qiNCeiiuKGAdm5iDaGgBNAOqVfONmNdsOAJUAqgDsV/21DMCjALoBbNMYu7O39qLtA6syM5XC3uJvSI7SNrfP0WSRJTJYo6DGRXyLCsnUZ16SGyc7miyyhANLuulCvU83vTHRL5C9SRt5jTMeNOtzHXvZgbU7MxVmZFaifVH2qc44KTqknXMwgbXJeXxkuziThF+QvdEZJ8Xt0t6p30J/Alspp7rEXtDWFfqW8d8pIyib8btViFJLAToPUC+WldYjPeeAsDGPdzgPX5K80LEHDIteBNuqrk/4B6N13OENYHhXgmqHS3GHjmAeF2OgdoAehws4Xvdt8chnRW7V4/E0Ac9Je67D5bBVhcOghA+12TxvjYUTTr361rZlbrBYfDmzFeMk+R2X2B+T3V38i7QRh36otTYnuudld7879IEmFZPh0d2k65k66buBLVMJE9vCQXSL1sl89b1MPl1Bd+jscKmjuVb+a6OXwSqST3Q9xgusOZ7OCEO1NvaUCOolcV0qsber35roGnTS71TVa1XIbFUlXaGE8qa9U9Hn1tQUhwv//szEHuqxtJLts94rMkTJrlsJ7y0dRuz5Nzj69dIXFXtCKLPPdrgsUuIeDVKro9QmzaAdRo50BgnVRl9JeJdm3ONcpIXix8CBj3mTiwq34vY+gHMA1ALYWcT2blsA7AXQWMRkWvqJoEIVZl+tTUGNLSMoa3UANhRZS7VkGh/PvJXe4xvtcB7CUW2Uw2WREiM0yIKMQ6ifyj20XCn9LQ5XEh45Q4PZKegGZerZ+jRgrVfdVAK3Sv9wf4PKBWY4TZ85/1aasFOybejhMFsOLMWknwHKA4l/AEBc4bzuAKASAAAAAElFTkSuQmCC"
                      />
                    </svg>
                    Informations
                  </h4>
                  <div className="inner-infor">
                    <ul>
                      <li>
                        <span>
                          <i className="fal fa-usd-circle" />
                          Event Price
                        </span>
                        <span className="style">$259</span>
                      </li>
                      <li>
                        <span>
                          <i className="fal fa-user-circle" />
                          Total Seat
                        </span>
                        <span className="style">95</span>
                      </li>
                      <li>
                        <span>
                          <i className="fal fa-clock" />
                          Event Time
                        </span>
                        <span className="style">08 - 10am</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          Event Day
                        </span>
                        <span className="style">Friday</span>
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
                          Organizar
                        </span>
                        <span className="style">Nicholas A.</span>
                      </li>
                    </ul>
                    <Link href="/contact">
                      <a className="fl-btn st-1">
                        <span className="inner">Join Events</span>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="widget new-couses">
                  <h4 className="title-widget bg-style4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={38}
                      height={40}
                      viewBox="0 0 38 40"
                    >
                      <image
                        width={38}
                        height={40}
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAoCAYAAACSN4jeAAAFE0lEQVRYhb1Ya4iVVRRdo5aaWpNTyUw4qeWdybKyycymKIZSIyOLoiB6wETQayjKKOtHkEHWj4iSIoWyt5BkajpWzqRpj0EqR83sASNGlBplD5p0asW2dejMufvcueOPDizud/Za+3z7nu98++zzgeT/gVqSC0l28b/2I8l2kud79x+A/rUKAGP66fMAgI0ApgFoBXA5gEsAPAlgJIB2AOsAHNLLy4s2QQXJq0muJ/kXyZ9JDnV0Hl7X/HQ7XMBZJPcKg4PdEwY0k2wluU+DW2Cv6LrK0ad4TdrLSO4i+YGjiWF/+PNSgc0i+a0GNeFdJI8RN072ox2/GE9Id7hsNepvdLQBVdJclwusjeRvJIc73AVyPsrhAiZFC7w5so8l2eLoYywl+UsusFUk1zl2w6nJTHjYpMc+VdqnSQ5wdB4a5VPpkW+S7EhsBZKrNZN0fAKGi79C/avUn+BoPQwiuZ/kzHLSxQwA2wGMBrAEQBeAhUWqf9tE/a7V72IAw+RTTuuRZogX9askP9P1YP3jRRF/c4lZmyDuCIfzcCLJhyJ7g/xrUvEZeowr1D9Wwmr1h5D8ieTbzk3uJ/mD9Ic6vIeC9J+KeyT86SCezt6tVfaBJL8m+SvJ5VJ8p7UQfC0BvyzOEuqfJFc6QeRQLd8lJHtI3hsCmxK9PfYoTk8W8AhxH5Kc47xhldJfpH69+isygUBLZX5iowJDCGwnyS8c0TXOgDlY260Zjtfa8oz+NvFz1X9Gb2MhDuwjpQHLUdO0r3U6g+VgM/MVyc0K7jDZJ+rmSx0fwykk/5Aftb4RB1YVkdbe07rxBkuxOiRE2W1P/D3ajE8W/0ayBCxBn6dHZ+2EdOy4M0nbhheAhw0aNPX5Xht/eDPrpNtBco+qiNCeiiuKGAdm5iDaGgBNAOqVfONmNdsOAJUAqgDsV/21DMCjALoBbNMYu7O39qLtA6syM5XC3uJvSI7SNrfP0WSRJTJYo6DGRXyLCsnUZ16SGyc7miyyhANLuulCvU83vTHRL5C9SRt5jTMeNOtzHXvZgbU7MxVmZFaifVH2qc44KTqknXMwgbXJeXxkuziThF+QvdEZJ8Xt0t6p30J/Alspp7rEXtDWFfqW8d8pIyib8btViFJLAToPUC+WldYjPeeAsDGPdzgPX5K80LEHDIteBNuqrk/4B6N13OENYHhXgmqHS3GHjmAeF2OgdoAehws4Xvdt8chnRW7V4/E0Ac9Je67D5bBVhcOghA+12TxvjYUTTr361rZlbrBYfDmzFeMk+R2X2B+T3V38i7QRh36otTYnuudld7879IEmFZPh0d2k65k66buBLVMJE9vCQXSL1sl89b1MPl1Bd+jscKmjuVb+a6OXwSqST3Q9xgusOZ7OCEO1NvaUCOolcV0qsber35roGnTS71TVa1XIbFUlXaGE8qa9U9Hn1tQUhwv//szEHuqxtJLts94rMkTJrlsJ7y0dRuz5Nzj69dIXFXtCKLPPdrgsUuIeDVKro9QmzaAdRo50BgnVRl9JeJdm3ONcpIXix8CBj3mTiwq34vY+gHMA1ALYWcT2blsA7AXQWMRkWvqJoEIVZl+tTUGNLSMoa3UANhRZS7VkGh/PvJXe4xvtcB7CUW2Uw2WREiM0yIKMQ6ifyj20XCn9LQ5XEh45Q4PZKegGZerZ+jRgrVfdVAK3Sv9wf4PKBWY4TZ85/1aasFOybejhMFsOLMWknwHKA4l/AEBc4bzuAKASAAAAAElFTkSuQmCC"
                      />
                    </svg>
                    Recent Events
                  </h4>
                  <div className="widget-news st-2 inner-infor">
                    <ul className="list-news">
                      <li className="fx">
                        <img
                          src="assets/images/thumbnails/widget1.jpg"
                          alt="Image"
                          className="feature"
                        />
                        <ul className="box-content">
                          <li>
                            <h6 className="title">
                              <Link href="/blog-single">
                                <a>Bake Layers Accesilit Testing Supporte</a>
                              </Link>
                            </h6>
                          </li>
                          <li>
                            <Link href="/blog-single">
                              <a className="fx meta-news clr-pri-4">
                                <i className="far fa-calendar-alt" />
                                <span className="f-rubik">25 nov 2021</span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="fx">
                        <img
                          src="assets/images/thumbnails/widget2.jpg"
                          alt="Image"
                          className="feature"
                        />
                        <ul className="box-content">
                          <li>
                            <h6 className="title">
                              <Link href="/blog-single">
                                <a>Bake Layers Accesilit Testin Supporte</a>
                              </Link>
                            </h6>
                          </li>
                          <li>
                            <Link href="/blog-single">
                              <a className="fx meta-news clr-pri-4">
                                <i className="far fa-calendar-alt" />
                                <span className="f-rubik">25 nov 2021</span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="fx">
                        <img
                          src="assets/images/thumbnails/widget3.jpg"
                          alt="Image"
                          className="feature"
                        />
                        <ul className="box-content">
                          <li>
                            <h6 className="title">
                              <Link href="/blog-single">
                                <a>Bake Layers Accesilit Testin Supporte</a>
                              </Link>
                            </h6>
                          </li>
                          <li>
                            <Link href="/blog-single">
                              <a className="fx meta-news clr-pri-4">
                                <i className="far fa-calendar-alt" />
                                <span className="f-rubik">25 nov 2021</span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="fx">
                        <img
                          src="assets/images/thumbnails/widget4.jpg"
                          alt="Image"
                          className="feature"
                        />
                        <ul className="box-content">
                          <li>
                            <h6 className="title">
                              <Link href="/blog-single">
                                <a>Bake Layers Accesilit Testin Supporte</a>
                              </Link>
                            </h6>
                          </li>
                          <li>
                            <Link href="/blog-single">
                              <a className="fx meta-news clr-pri-4">
                                <i className="far fa-calendar-alt" />
                                <span className="f-rubik">25 nov 2021</span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
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
    </Layout>
  );
};
export default EventsDetails;
