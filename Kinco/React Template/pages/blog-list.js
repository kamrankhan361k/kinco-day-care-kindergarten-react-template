import Link from "next/link";
import { useEffect, useState } from "react";
import PageBanner2 from "../src/components/PageBanner2";
import PagginationFuntion from "../src/components/PagginationFuntion";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";

const Blog = () => {
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".single_box_", sort, active);
    let list = document.querySelectorAll(".single_box_");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout bodyClass={["shop", "style", "bloglist"]}>
      <PageBanner2 pageName={"Blog List"} pageTitle={"Blog List View"} />
      <section className="tf-section tf-blog-list">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-12">
              <article className="box-blog-list single_box_">
                <div
                  className="box-feature wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
                  <img
                    src="assets/images/post/box-blog-list1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <div className="meta-post st-2">
                    <ul className="fx">
                      <li className="fx">
                        <i className="far fa-calendar-alt clr-pri-3" />
                        25 Dec 2021
                      </li>
                      <li className="fx">
                        <i className="far fa-comment-alt-dots clr-pri-3" />
                        Comments (05)
                      </li>
                    </ul>
                  </div>
                  <h3 className="title-article-post">
                    <a href="b">
                      Useful Code Extensions Fronts End Developer Smashing
                      Headless WordPress Site On The JAMstack{" "}
                    </a>
                  </h3>
                  <p className="sub f-rubik">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam, eaque ipsa quae abillo inventore veritatis et quasi
                    architecto
                  </p>
                  <div className="box-btn">
                    <a href="b" className="fl-btn st-1">
                      <span className="inner">read more</span>
                    </a>
                  </div>
                </div>
              </article>
              <article className="box-blog-list single_box_">
                <div
                  className="box-feature wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
                  <img
                    src="assets/images/post/box-blog-list2.jpg"
                    alt="Image"
                  />
                  <div className="overlay jus-ct">
                    <a
                      href="https://www.youtube.com/watch?v=CZsARU7HcBI"
                      className="fl-play st-1 popup-youtube"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="box-content">
                  <div className="meta-post st-2">
                    <ul className="fx">
                      <li className="fx">
                        <i className="far fa-calendar-alt clr-pri-3" />
                        25 Dec 2021
                      </li>
                      <li className="fx">
                        <i className="far fa-comment-alt-dots clr-pri-3" />
                        Comments (05)
                      </li>
                    </ul>
                  </div>
                  <h3 className="title-article-post">
                    <a href="b">
                      Useful Code Extensions Fronts End Developer Smashing
                      Headless WordPress Site On The JAMstack{" "}
                    </a>
                  </h3>
                  <p className="sub f-rubik">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam, eaque ipsa quae abillo inventore veritatis et quasi
                    architecto
                  </p>
                  <div className="box-btn">
                    <a href="b" className="fl-btn st-1">
                      <span className="inner">read more</span>
                    </a>
                  </div>
                </div>
              </article>
              <div className="quotes-article st-1 st-3 fx single_box_">
                <div className="box-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={60}
                    height={46}
                    viewBox="0 0 60 46"
                  >
                    <g>
                      <image
                        id="quote_1_"
                        data-name="quote(1)"
                        width={60}
                        height={46}
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAFKklEQVRogcVaa2wVRRT+LEqVlIeFiopiAygKFEsRAtEgFVBCMWrwlfBDozGG1EdMiOGPUf9IopEoUTHVqLHx/UMjRiUlWN9BKrUoIiBFkYiiSJWAQGs/M+Qbc7xs9+7du9N7knPP7s6Z8+2ZMzuPM/cEkkhA1QAuBzANwCQAlQDKABwE8C2AdgDrAHyZxFgKmgxgDoA6ABMBDAHgXrwLwGYAbQDWAvgur2nncAzPJPkak9OnJK/PY7MQXkhybQH4q0nOibMfF+EnADSa+w5F0UXzVwC9AIYq4jMBXGF0WwDcDmBnyohWAWgCcLV59pH4awD79WwEgBoA9QBmGN1mAEvUA/NGuIpku2m11xXpfJEZR/JRU+8QybkpojqV5G/GziqSkxLWe8HU6yR5Xq5ebqVhJHeZF16U4oVrSG40wLFdLIcvJPmP6u1I2NC5PI/kXtk4QLI6zuEOKf5CcmyR398a4/TZCfQH6wUdtZGsKAL7NJLbZGs3yQFRDj8she7cVimCN8lmRwIbLdL9ieTADLBdb+2SzZdyHa420bguI2cdjyTZK7uLY/TmGvyJGeJfYuzWWYf9x/5ZhmCeHzCR60vHD5LPBMB/S7ZbvMODSPbo4ewAgCeTPCL7syLKLzBRGBkAf4Kxf4ZbLc0DMADAXgCtKefNODoM4E2VXxWhd41kq+b3rMmtBLfI5oIyLRocvRcAzNM6ybqIMr9geDcg/hrJi5zD43TzTUDAHZLVEWUef0tEWVa0XXZGO4dP1c3vAQEPSFZElFVK7guI/5fHLwsIYmmgro/2E15f+N1lZiFeFRDwLMk9EWV/SI4IiD/a4zuHv9dNTUDAWsmoccJ/XxMC4vvBcrNz+HPdzA8I6Efitoiy9ZINAfEv/g9fC4/uFDubpFxO8rDsT4uoM94uDALgn2/sD3MRPgTgRbXA8gCtOxVAuXDaI8q3Atio64cC4PvoOowuP0o/KOlyVoszBrxU8kMAPX3oLJW8GcCUjPFnS35w7NeEfrnC3qvsRVZdqlV2l+bRe196e0iekiG+z540MCIB4DMV+7SoLxZssNke1uTRdRt+v3/9iuTQDPCnyF6PTyjkKgwh+aOU3EB2Y5GAi2Tr54T6k80AuquP3VUhfJ/dGkY57Hg4yQ1mZHP7yfqUgC/LxpMF1KlVA3l6TpFKg+8zLo1xDnteyf+TS9OsIHmDppp8YCeSPCgLlxX4opXKllr6WOPMApJlCWzYLM6ZSRx2PJ3kKzye7k4AeKVq7S+iS87PSQZ6StKAy6S73j5PCnwOyVtIPq/RNEkX86mVVUU47NkNoHeSfIPk2yRHJaizVfhL7POkZ0uFkjv7+VN1pgPYEAIkhmrNIqfSbJAQant4k+TOEjjr6A7Jd6yzxyiD7hbF29Wd7glkP47LTdLwuKOeEIA+F9yb0eKhUG6Mm/tDdOn7JZvNd9yftExYj0RhZj1ojTEJu/EAtvWzswsBrHapHB3l/p2rkHWE/fautQTOWvynopxFxhEeBWC3rksxFdWb/HdVX1nYLCO8QvKLEk1FKyWbYlPOGY2MY82yLyqNE5obDP7wOKysItwk2Vqi6D4t+VjehH4GLT/LtO65JYjuXcI+opPKWP0sAH8Q4LMlcLbCJAwak9QpFvBegR1Vure/HX5V+J1J6xQDdrrpyreVwFn7d4YZ/eHwJwJrL4Gzg5TddNRcSN20gLea1h1TAocfF7b7m9NJhdRNOy25w+tNSqB3prRRDLnzKPdXyGu1bk5GAP4F7gbvN8tsuegAAAAASUVORK5CYII="
                      />
                    </g>
                  </svg>
                </div>
                <div className="box-content">
                  <div className="inner clr-pri-1">
                    Get Started With UI Design With These Tips Ways Speed Up
                    Your Workflow Systems
                  </div>
                  <div className="author clr-pri-1">Fred G. Landreth</div>
                </div>
              </div>
              <article className="box-blog-list single_box_">
                <div
                  className="box-feature wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
                  <img
                    src="assets/images/post/box-blog-list3.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <div className="meta-post st-2">
                    <ul className="fx">
                      <li className="fx">
                        <i className="far fa-calendar-alt clr-pri-3" />
                        25 Dec 2021
                      </li>
                      <li className="fx">
                        <i className="far fa-comment-alt-dots clr-pri-3" />
                        Comments (05)
                      </li>
                    </ul>
                  </div>
                  <h3 className="title-article-post">
                    <a href="b">
                      Useful Code Extensions Fronts End Developer Smashing
                      Headless WordPress Site On The JAMstack{" "}
                    </a>
                  </h3>
                  <p className="sub f-rubik">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam, eaque ipsa quae abillo inventore veritatis et quasi
                    architecto
                  </p>
                  <div className="box-btn">
                    <a href="b" className="fl-btn st-1">
                      <span className="inner">read more</span>
                    </a>
                  </div>
                </div>
              </article>
              <article className="box-blog-list single_box_">
                <div
                  className="box-feature wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
                  <img
                    src="assets/images/post/box-blog-list4.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <div className="meta-post st-2">
                    <ul className="fx">
                      <li className="fx">
                        <i className="far fa-calendar-alt clr-pri-3" />
                        25 Dec 2021
                      </li>
                      <li className="fx">
                        <i className="far fa-comment-alt-dots clr-pri-3" />
                        Comments (05)
                      </li>
                    </ul>
                  </div>
                  <h3 className="title-article-post">
                    <a href="b">
                      Useful Code Extensions Fronts End Developer Smashing
                      Headless WordPress Site On The JAMstack{" "}
                    </a>
                  </h3>
                  <p className="sub f-rubik">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam, eaque ipsa quae abillo inventore veritatis et quasi
                    architecto
                  </p>
                  <div className="box-btn">
                    <a href="b" className="fl-btn st-1">
                      <span className="inner">read more</span>
                    </a>
                  </div>
                </div>
              </article>
              <div
                className="themesflat-pagination st-2"
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
            <div className="col-xl-4 col-lg-4 col-md-12 col-12">
              <div
                id="sidebar"
                className="sidebar-style2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="inner-sidebar fl-st-1">
                  <div className="widget widget-quote">
                    <div className="box-feature">
                      <div className="inner">
                        <img
                          src="assets/images/post/post-quotes2.jpg"
                          alt="Image"
                        />
                        <div className="box-icon jus-ali-ct">
                          <i className="far fa-quote-right" />
                        </div>
                      </div>
                    </div>
                    <div className="box-content">
                      <h5 className="author clr-pri-2">Patrick D. Smith</h5>
                      <p className="wrap f-rubik">
                        Sit amet consectetur adipiscing elit sed do eiusmod
                        tempor didunt ut labore et dolore magna
                      </p>
                    </div>
                  </div>
                  <div className="widget widget-search st-2">
                    <h4 className="title-widget fl-ctm-1">
                      Search
                      <span className="ctm-inner" />
                    </h4>
                    <div className="form-search-widget">
                      <form action="#" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Search Here" />
                        <button>
                          <i className="fas fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="widget widget-category st-2">
                    <h4 className="title-widget fl-ctm-1">
                      category
                      <span className="ctm-inner" />
                    </h4>
                    <div className="list-category">
                      <ul>
                        <li className="fx">
                          <span className="st wd-ctm">Arts &amp; Drawing</span>
                          <span className="st">05</span>
                        </li>
                        <li className="fx">
                          <span className="st wd-ctm">Basic Language</span>
                          <span className="st">02</span>
                        </li>
                        <li className="fx">
                          <span className="st wd-ctm">Graphics Design</span>
                          <span className="st">07</span>
                        </li>
                        <li className="fx">
                          <span className="st wd-ctm">Web Development</span>
                          <span className="st">04</span>
                        </li>
                        <li className="fx">
                          <span className="st wd-ctm">Lifestyle</span>
                          <span className="st">06</span>
                        </li>
                        <li className="fx">
                          <span className="st wd-ctm">GYM &amp; Gaming</span>
                          <span className="st">05</span>
                        </li>
                        <li className="fx">
                          <span className="st wd-ctm">Events &amp; Party</span>
                          <span className="st">05</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget widget-news st-2">
                    <h4 className="title-widget fl-ctm-1">
                      recent news
                      <span className="ctm-inner" />
                    </h4>
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
                  <div className="widget widget-tag st-2">
                    <h4 className="title-widget fl-ctm-1">
                      best tags
                      <span className="ctm-inner" />
                    </h4>
                    <ul className="list-tag">
                      <li>
                        <Link href="/shop-details">
                          <a className="f-rubik active">Technology</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop-details">
                          <a className="f-rubik">service</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop-details">
                          <a className="f-rubik">team</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop-details">
                          <a className="f-rubik">solutions</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop-details">
                          <a className="f-rubik">consultancy</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop-details">
                          <a className="f-rubik">It Company</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop-details">
                          <a className="f-rubik">agency</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget-gallery st-2">
                    <h4 className="title-widget fl-ctm-1">
                      photo gallery
                      <span className="ctm-inner" />
                    </h4>
                    <div className="list-gallery fx">
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
                {/*/inner-sidebar*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Blog;
