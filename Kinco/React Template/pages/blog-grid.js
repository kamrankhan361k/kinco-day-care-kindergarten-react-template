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
    <Layout bodyClass={["shop", "style"]}>
      <PageBanner2 pageName={"Blog Grid"} pageTitle={"Blog Grid View"} />
      <section className="tf-section tf-blog-grid">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 single_box_">
              <div
                className="box-artice fl-scale st-2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature inner-scale">
                  <a href="#">
                    <img src="assets/images/post/box-aricle1.jpg" alt="Image" />
                  </a>
                </div>
                <div className="box-content">
                  <div className="meta-post st-1">
                    <ul className="fx">
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-calendar-alt clr-pri-3" />
                            25 Dec 2021
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-comment-alt-dots clr-pri-3" />
                            Comments (05)
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="title-article-post">
                    <Link href="/blog-single">
                      <a>
                        Useful VS Code Extensions Fronts End Developer Smashing
                      </a>
                    </Link>
                  </h4>
                  <div className="btn-rm">
                    <Link href="/blog-single">
                      <a className="fl-btn st-4">
                        <span className="inner">read more</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 single_box_">
              <div
                className="box-artice fl-scale st-2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature inner-scale">
                  <Link href="/blog-single">
                    <a>
                      <img
                        src="assets/images/post/box-aricle2.jpg"
                        alt="Image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="box-content">
                  <div className="meta-post st-1">
                    <ul className="fx">
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-calendar-alt clr-pri-3" />
                            25 Dec 2021
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-comment-alt-dots clr-pri-3" />
                            Comments (05)
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="title-article-post">
                    <Link href="/blog-single">
                      <a>
                        Everything Developers Need Know About Figma World Engine
                      </a>
                    </Link>
                  </h4>
                  <div className="btn-rm">
                    <Link href="/blog-single">
                      <a className="fl-btn st-4">
                        <span className="inner">read more</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 single_box_">
              <div
                className="box-artice fl-scale st-2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature inner-scale">
                  <Link href="/blog-single">
                    <a>
                      <img
                        src="assets/images/post/box-aricle3.jpg"
                        alt="Image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="box-content">
                  <div className="meta-post st-1">
                    <ul className="fx">
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-calendar-alt clr-pri-3" />
                            25 Dec 2021
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-comment-alt-dots clr-pri-3" />
                            Comments (05)
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="title-article-post">
                    <Link href="/blog-single">
                      <a>
                        Create A Headless WordPress Site JAMstack Useful VS Code
                        Extensions Fronts End Developer Smashing
                      </a>
                    </Link>
                  </h4>
                  <div className="btn-rm">
                    <Link href="/blog-single">
                      <a className="fl-btn st-4">
                        <span className="inner">read more</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 single_box_">
              <div
                className="box-artice fl-scale st-2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature inner-scale">
                  <Link href="/blog-single">
                    <a>
                      <img
                        src="assets/images/post/box-aricle4.jpg"
                        alt="Image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="box-content">
                  <div className="meta-post st-1">
                    <ul className="fx">
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-calendar-alt clr-pri-3" />
                            25 Dec 2021
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-comment-alt-dots clr-pri-3" />
                            Comments (05)
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="title-article-post">
                    <Link href="/blog-single">
                      <a>
                        Useful VS Code Extensions Fronts End Developer Smashing
                      </a>
                    </Link>
                  </h4>
                  <div className="btn-rm">
                    <Link href="/blog-single">
                      <a className="fl-btn st-4">
                        <span className="inner">read more</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 single_box_">
              <div
                className="box-artice fl-scale st-2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature inner-scale">
                  <Link href="/blog-single">
                    <a>
                      <img
                        src="assets/images/post/box-aricle5.jpg"
                        alt="Image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="box-content">
                  <div className="meta-post st-1">
                    <ul className="fx">
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-calendar-alt clr-pri-3" />
                            25 Dec 2021
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-comment-alt-dots clr-pri-3" />
                            Comments (05)
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="title-article-post">
                    <Link href="/blog-single">
                      <a>
                        Everything Developers Need Know About Figma World Engine
                      </a>
                    </Link>
                  </h4>
                  <div className="btn-rm">
                    <Link href="/blog-single">
                      <a className="fl-btn st-4">
                        <span className="inner">read more</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 single_box_">
              <div
                className="box-artice fl-scale st-2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature inner-scale">
                  <Link href="/blog-single">
                    <a>
                      <img
                        src="assets/images/post/box-aricle6.jpg"
                        alt="Image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="box-content">
                  <div className="meta-post st-1">
                    <ul className="fx">
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-calendar-alt clr-pri-3" />
                            25 Dec 2021
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-comment-alt-dots clr-pri-3" />
                            Comments (05)
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="title-article-post">
                    <Link href="/blog-single">
                      <a>
                        Create A Headless WordPress Site JAMstack Useful VS Code
                        Extensions Fronts End Developer Smashing
                      </a>
                    </Link>
                  </h4>
                  <div className="btn-rm">
                    <Link href="/blog-single">
                      <a className="fl-btn st-4">
                        <span className="inner">read more</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 single_box_">
              <div
                className="box-artice fl-scale st-2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature inner-scale">
                  <Link href="/blog-single">
                    <a>
                      <img
                        src="assets/images/post/box-aricle7.jpg"
                        alt="Image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="box-content">
                  <div className="meta-post st-1">
                    <ul className="fx">
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-calendar-alt clr-pri-3" />
                            25 Dec 2021
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-comment-alt-dots clr-pri-3" />
                            Comments (05)
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="title-article-post">
                    <Link href="/blog-single">
                      <a>
                        Useful VS Code Extensions Fronts End Developer Smashing
                      </a>
                    </Link>
                  </h4>
                  <div className="btn-rm">
                    <Link href="/blog-single">
                      <a className="fl-btn st-4">
                        <span className="inner">read more</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 single_box_">
              <div
                className="box-artice fl-scale st-2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature inner-scale">
                  <Link href="/blog-single">
                    <a>
                      <img
                        src="assets/images/post/box-aricle8.jpg"
                        alt="Image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="box-content">
                  <div className="meta-post st-1">
                    <ul className="fx">
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-calendar-alt clr-pri-3" />
                            25 Dec 2021
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-comment-alt-dots clr-pri-3" />
                            Comments (05)
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="title-article-post">
                    <Link href="/blog-single">
                      <a>
                        Everything Developers Need Know About Figma World Engine
                      </a>
                    </Link>
                  </h4>
                  <div className="btn-rm">
                    <Link href="/blog-single">
                      <a className="fl-btn st-4">
                        <span className="inner">read more</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 single_box_">
              <div
                className="box-artice fl-scale st-2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature inner-scale">
                  <Link href="/blog-single">
                    <a>
                      <img
                        src="assets/images/post/box-article9.jpg"
                        alt="Image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="box-content">
                  <div className="meta-post st-1">
                    <ul className="fx">
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-calendar-alt clr-pri-3" />
                            25 Dec 2021
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single">
                          <a className="fx">
                            <i className="far fa-comment-alt-dots clr-pri-3" />
                            Comments (05)
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="title-article-post">
                    <Link href="/blog-single">
                      <a>
                        Create A Headless WordPress Site JAMstack Useful VS Code
                        Extensions Fronts End Developer Smashing
                      </a>
                    </Link>
                  </h4>
                  <div className="btn-rm">
                    <Link href="/blog-single">
                      <a className="fl-btn st-4">
                        <span className="inner">read more</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="themesflat-pagination st-1"
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
export default Blog;
