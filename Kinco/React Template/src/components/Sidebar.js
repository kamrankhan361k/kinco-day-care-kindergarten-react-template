import Link from "next/link";
const Sidebar = ({ show, close }) => {
  return (
    <div id="sidebar2" className={`side-menu__block ${show ? "active" : ""}`}>
      <div
        className="side-menu__block-overlay custom-cursor__overlay"
        onClick={close}
      />
      <div className="inner-sidebar side-menu__block-inner fl-st-1">
        <div className="side-menu__top justify-content-end">
          <a
            href="#"
            className="side-menu__toggler side-menu__close-btn"
            onClick={close}
          >
            <img src="assets/images/common/close.png" alt="images" />
          </a>
        </div>
        <div className="wrap">
          <div className="widget widget-quote">
            <div className="box-feature">
              <div className="inner">
                <img src="assets/images/post/post-quotes2.jpg" alt="Image" />
                <div className="box-icon jus-ali-ct">
                  <i className="far fa-quote-right" />
                </div>
              </div>
            </div>
            <div className="box-content">
              <h5 className="author clr-pri-2">Patrick D. Smith</h5>
              <p className="wrap f-rubik">
                Sit amet consectetur adipiscing elit sed do eiusmod tempor
                didunt ut labore et dolore magna
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
                  <a className="f-rubik active">service</a>
                </Link>
              </li>
              <li>
                <Link href="/shop-details">
                  <a className="f-rubik active">team</a>
                </Link>
              </li>
              <li>
                <Link href="/shop-details">
                  <a className="f-rubik active">solutions</a>
                </Link>
              </li>
              <li>
                <Link href="/shop-details">
                  <a className="f-rubik active">consultancy</a>
                </Link>
              </li>
              <li>
                <Link href="/shop-details">
                  <a className="f-rubik active">It Company</a>
                </Link>
              </li>
              <li>
                <Link href="/shop-details">
                  <a className="f-rubik active">agency</a>
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
                <img src="assets/images/thumbnails/widget5.jpg" alt="Image" />
              </div>
              <div className="box-photo active">
                <div className="overlay fx">
                  <i className="fal fa-plus" />
                </div>
                <img src="assets/images/thumbnails/widget1.jpg" alt="Image" />
              </div>
              <div className="box-photo">
                <div className="overlay fx">
                  <i className="fal fa-plus" />
                </div>
                <img src="assets/images/thumbnails/widget6.jpg" alt="Image" />
              </div>
              <div className="box-photo">
                <div className="overlay fx">
                  <i className="fal fa-plus" />
                </div>
                <img src="assets/images/thumbnails/widget7.jpg" alt="Image" />
              </div>
              <div className="box-photo">
                <div className="overlay fx">
                  <i className="fal fa-plus" />
                </div>
                <img src="assets/images/thumbnails/widget3.jpg" alt="Image" />
              </div>
              <div className="box-photo">
                <div className="overlay fx">
                  <i className="fal fa-plus" />
                </div>
                <img src="assets/images/thumbnails/widget8.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/inner-sidebar*/}
    </div>
  );
};
export default Sidebar;
