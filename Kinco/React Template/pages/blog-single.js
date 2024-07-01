import Link from "next/link";
import PageBanner2 from "../src/components/PageBanner2";
import Layout from "../src/layouts/Layout";

const BlogDetails = () => {
  return (
    <Layout bodyClass={["shop", "style"]}>
      <PageBanner2 pageName={"Blog Details"} pageTitle={"Single Blog"} />
      <section className="tf-section tf-blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-12">
              <article className="article">
                <div
                  className="feature-article wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
                  <img src="assets/images/post/article1.jpg" alt="Image" />
                </div>
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
                <h3 className="title-article clr-pri-2">
                  Useful Code Extensions Fronts End Developer Smashing Headless
                  WordPress Site On The JAMstack{" "}
                </h3>
                <p className="wrap st-1 f-rubik">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremqu laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porr quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur
                </p>
                <div className="quotes-article st-1 fx">
                  <div className="box-icon">
                    <svg
                      id="Blog_Info"
                      data-name="Blog Info"
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
                          xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAF+ElEQVRogcWae9BVUxjGfx1N0aT4pmbSrjT4QymXyDUV1e6iEVNu0bhkXEYaGkz5x2WQy4hEYxKDGI1bmQm10QUjpQslqZAxtm9qFJIYRWbtnpX1nW+fs/c5Z++vZ+bM2mvvtda7nrXe9a53ves067hgLynQFfCB3kAPoA4oAH8AXwGrgYXAyjSNVYHjgQFAL+A4oA1gOv4rsA5YAbwf+nyd1HQS4TOAW4CLU/bxE2Aq8GpGRIdL/oCU5ecBj4c+H5QqUI7wk8BNTv4LzaKZzS3Av0BbzbgZmMFO2feA64HNKTtajPbADOAC5/2H+q0FftG7dkBP4BzgdKfsLODG0I80MJGwERYAJyr/GvAYsDShk8cYIcAE5f8EzjeqViHZk4H5ImPwNPAU8GVc4dDfl3pBVO9m4Ep9MoM9JPTZ6JYvJnwYsAborA6PAd6osMNmxF8ATlJ+IJRWsSKcAKySffgOuCJpoC1hCy9gEPCyJm6n6U/o8739Xiiqv0Rkt6jjlZJFKtdLWoJmuHOKeocCH6tPK0U+SasaIfSj5WSW2SagtWnTCzjIlnMJPyxruEfr4duKqTbEYJFHxiQJb6qDPwJnanaqQuizFTgV+M1MOvBiMWGz7dyu59HwvwrUiEHaPsxAXl6mqYH6GQwB/q5VcOhHW9Zwy8kLIq3bT/hupUtlpLKCWRr3qq0Hy7T5iNKZ2lczQehHS+QttfUQMlqtgB0Q6bkx74szJGxwsFSrBdBPW4uLbnJeDDpokFKj2GgVwwvo7gxix4LUzpDdmgNZg7+AOXoeEfP9QqWLKyWbBqEfDeZ6FR1WkNNg8G7Wwhws1GOvmG/WYXgnR/kLlJ5SkMNAqY09I1iL3zWmOSt/faYSG2KTcl0M4cOV+TlHgb8rbR3zrU7pthzl77Dyix2PvNBC7da83VQJK393wXHE2+cosJPS+phv25W2i/mWFbpY+YbwN8r0zFGgPYjE2Qm7vrrnKN8ay3UFx18dkqNAa4lXxHxbpvS8HOWfZeUXdHbdI5VOe9CuBC0dwsti6tkDytnAEVkL9wKOdQxjRHiX41xPzlqgzrctJWd1zPcNOhIaPJCDfDu7q4x/ba30PUp7Jzj51aCf6iyRJsXhNr27yjlHZ4X+amcRzuHhB8e5n+U4A1nAhn4WlmlrkeMNGY/rkAzlW9vUgLDBJKlcM621bhkIM4f6vnpekFB2lA4ZHWRI29Yq3AsibTHb3T/SsEYRj/6a7TqFei6tUaavAax3ggGlsFODs0fRjrXOYFULex5eFPr7AgrFhHdozzLbR3PgFWCujo3VYKTqzElZd43sSL3CQmZWnqthXV+kdK59EedabpPQacqP0PozYdopwCWyuklo7hwHK4mNfa6YlA1EXC0r/pF2kWEl+t0AXhAdVKwztX/Ay1UcD5wGzFbehGluVf6GFB0fCrTS7UA5gxWH7Qr+D3WCgX2AicDbjuUtB7scl4c+P9lyzRMqLQcuk6ABjnNQHLWIw1i9m52ibCnM16+bYl59pV0bUtQ1mmHwvPsy7d1SpWgji4uih5/lIYQSIR4viHx36+TUhf7+A1LyWqgSbvQ/N7JlME6f5rlkyZHweKXTEsplDi+IVH6M2p1a3H4ehPvIU9urLaWpca0O/PWh3/heKw/Cdymd5azjpsREybKx7lwJH+XcINzf1Ey9IPKsTHRlt24dGyFrwvZ4Z2LMGxPK5gErf3roR7efuRL25IUZ3NHUTL0gcn+tZ3VfqXJZEp6idPkB2oqeUDoj9EuHnLMifLTzP5BxCWUzhxdE8bAeavfOcu1nRXiG0sUHaHatgTJ/aCkb0M+CsPFvz9XzdRm0VxG8IHJyOinIPympbhaEbQDwWSfG3FQwVzePStaE0I9uKnMlbKzxkdr3xqconzVm6sS3OfSjf/okohbCHeytuv7PtauJyfZxtsHRaSvVQvh1pSZC8UwN7VSDVk5E5KXQ59O0bVRLeKwT4B6ZUDYPTJaGmcDcNZW0Xy1hc3ltAm4mgG7+QNbUMGFkE2MbFfqR/UgH4D8YCUx7kXw5lgAAAABJRU5ErkJggg=="
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="box-content">
                    <div className="inner clr-pri-5">
                      Get Started With UI Design With These Tips Ways Speed Up
                      Your Workflow Systems
                    </div>
                    <div className="author clr-pri-2">Fred G. Landreth</div>
                  </div>
                </div>
                <p className="wrap st-1 f-rubik">
                  Neque porr quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quvolu ptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem
                </p>
                <div className="tag-article">
                  <div className="box-lt">
                    <p className="title clr-pri-2">Popular Tags</p>
                    <ul className="fx">
                      <li>
                        <Link href="/blog-grid">
                          <a className="jus-ct f-rubik active">Agency</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-grid">
                          <a className="jus-ct f-rubik">Cosmetics</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-grid">
                          <a className="jus-ct f-rubik">Beauty</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="box-rt">
                    <p className="title clr-pri-2">Share :</p>
                    <ul className="fx">
                      <li>
                        <a href="#" className="active">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="quotes-article st-2 fx wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
                  <div className="box-feature">
                    <img
                      src="assets/images/post/post-quotes1.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="box-content">
                    <h4 className="author clr-pri-2">Dennis R. Grimaldi</h4>
                    <p className="wrap f-mulish">
                      On the other hand we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire
                    </p>
                    <ul className="list-social fx">
                      <li>
                        <a href="#" className="active">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-behance" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-dribbble" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box-related">
                  <h4 className="title st-1 fl-ctm-1">
                    related post <span className="ctm-inner" />
                  </h4>
                  <div className="box-blog-grid st-2">
                    <div
                      className="box-artice fl- wow fadeIn animated"
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
                              Useful VS Code Extensions Fronts End Developer
                              Smashing
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
                    <div
                      className="box-artice fl-scale wow fadeIn animated"
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
                              Create A Headless WordPress Site JAMstack Useful
                              VS Code Extensions Fronts End Developer Smashing
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
                </div>
                <div className="box-comment">
                  <h4 className="title st-1 fl-ctm-1">
                    Comments
                    <span className="ctm-inner" />
                  </h4>
                  <ol
                    className="comment-list wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1200ms"
                  >
                    <li className="comment">
                      <article className="comment-wrap border-st-2 clearfix">
                        <div className="gravatar">
                          <img
                            alt="image"
                            src="assets/images/avata/comment1.jpg"
                          />
                        </div>
                        <div className="comment-content">
                          <div className="comment-author">
                            Richard B. Zellmer
                          </div>
                          <div className="comment-day f-rubik">
                            25 November 2021
                          </div>
                          <div className="comment-text f-mulish clr-pri-4">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusan doloremque laudantium totam rem
                            aperiam eaque quae abillo inventore
                          </div>
                          <div className="comment-btn">
                            <a href="#" className="fl-btn st-5">
                              <span className="inner">REPLY</span>
                            </a>
                          </div>
                        </div>
                      </article>
                      <ul className="children">
                        <li className="comment">
                          <article className="comment-wrap clearfix">
                            <div className="gravatar">
                              <img
                                alt="image"
                                src="assets/images/avata/comment2.jpg"
                              />
                            </div>
                            <div className="comment-content">
                              <div className="comment-author">
                                Michael G. Smith
                              </div>
                              <div className="comment-day f-rubik">
                                25 November 2021
                              </div>
                              <div className="comment-text f-mulish clr-pri-4">
                                On the other hand, we denounce with righteous
                                indignation and dislike men beguiled and
                                demoralized by the charms of pleasure
                              </div>
                              <div className="comment-btn">
                                <a href="#" className="fl-btn st-5">
                                  <span className="inner">REPLY</span>
                                </a>
                              </div>
                            </div>
                          </article>
                        </li>
                        {/* #comment-## */}
                      </ul>
                      {/* .children */}
                    </li>
                    {/* #comment-## */}
                    <li className="comment ">
                      <article className="comment-wrap border-st-3 clearfix">
                        <div className="gravatar">
                          <img
                            alt="image"
                            src="assets/images/avata/comment3.jpg"
                          />
                        </div>
                        <div className="comment-content">
                          <div className="comment-author">
                            Davis L. Orenstein
                          </div>
                          <div className="comment-day f-rubik">
                            25 November 2021
                          </div>
                          <div className="comment-text f-mulish clr-pri-4">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusan doloremque laudantium totam rem
                            aperiam eaque quae abillo inventore
                          </div>
                          <div className="comment-btn">
                            <a href="#" className="fl-btn st-5">
                              <span className="inner">REPLY</span>
                            </a>
                          </div>
                        </div>
                      </article>
                    </li>
                    {/* #comment-## */}
                  </ol>
                  {/* /.comment-list */}
                  <div
                    className="form-comment wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1200ms"
                  >
                    <h4 className="title st-2 fl-ctm-1">
                      Leave A Reply
                      <span className="ctm-inner" />
                    </h4>
                    <form
                      action="contact/contact-process2.php"
                      method="post"
                      id="commentform"
                      className="comment-form"
                    >
                      <div className="row-form st-1">
                        <input
                          type="text"
                          placeholder="Full Name"
                          name="name"
                          id="name"
                          className="name"
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="mail"
                          id="mail"
                          className="mail"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="website"
                        id="website"
                        name="website"
                        className="website"
                      />
                      <textarea
                        placeholder="Leave Comments"
                        id="leacomment"
                        name="leacomment"
                        className="leacomment"
                        defaultValue={""}
                      />
                      <button type="submit" className="fl-btn st-6">
                        <span className="inner">Send Comment</span>
                      </button>
                    </form>
                  </div>
                </div>
              </article>
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
                              <Link href="/blog-grid">
                                <a>Bake Layers Accesilit Testing Supporte</a>
                              </Link>
                            </h6>
                          </li>
                          <li>
                            <Link href="/blog-grid">
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
                              <Link href="/blog-grid">
                                <a>Bake Layers Accesilit Testin Supporte</a>
                              </Link>
                            </h6>
                          </li>
                          <li>
                            <Link href="/blog-grid">
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
                              <Link href="/blog-grid">
                                <a>Bake Layers Accesilit Testin Supporte</a>
                              </Link>
                            </h6>
                          </li>
                          <li>
                            <Link href="/blog-grid">
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
                              <Link href="/blog-grid">
                                <a>Bake Layers Accesilit Testin Supporte</a>
                              </Link>
                            </h6>
                          </li>
                          <li>
                            <Link href="/blog-grid">
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
export default BlogDetails;
