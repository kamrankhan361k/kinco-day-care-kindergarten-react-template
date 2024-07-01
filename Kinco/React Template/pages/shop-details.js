import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import PageBanner2 from "../src/components/PageBanner2";
import Layout from "../src/layouts/Layout";

const ShopDetails = () => {
  return (
    <Layout bodyClass={["shop", "style", "details"]}>
      <PageBanner2 pageName={"Shop Details"} pageTitle={"Single Product"} />
      <section className="tf-section tf-shop-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="infor-product">
                <div className="image">
                  <Tab.Container defaultActiveKey={"1st"}>
                    <div className="img">
                      <Tab.Content>
                        <Tab.Pane eventKey={"1st"}>
                          <div
                            className="img-top wow fadeIn animated"
                            data-wow-delay="0.3ms"
                            data-wow-duration="1200ms"
                          >
                            <img
                              src="assets/images/shop/product5.png"
                              alt=""
                              className="img-change"
                            />
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey={"2nd"}>
                          <div
                            className="img-top wow fadeIn animated"
                            data-wow-delay="0.3ms"
                            data-wow-duration="1200ms"
                          >
                            <img
                              src="assets/images/shop/product5.png"
                              alt=""
                              className="img-change"
                            />
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey={"3rd"}>
                          <div
                            className="img-top wow fadeIn animated"
                            data-wow-delay="0.3ms"
                            data-wow-duration="1200ms"
                          >
                            <img
                              src="assets/images/shop/product5.png"
                              alt=""
                              className="img-change"
                            />
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                      <Nav
                        as={"div"}
                        className="img-thumnail fx wow fadeIn animated"
                        data-wow-delay="0.3ms"
                        data-wow-duration="1200ms"
                      >
                        <Nav.Link as={"div"} eventKey={"1st"} className="image">
                          <img src="assets/images/shop/product6.png" alt="" />
                        </Nav.Link>
                        <Nav.Link as={"div"} eventKey={"2nd"} className="image">
                          <img src="assets/images/shop/product7.png" alt="" />
                        </Nav.Link>
                        <Nav.Link as={"div"} eventKey={"3rd"} className="image">
                          <img src="assets/images/shop/product8.png" alt="" />
                        </Nav.Link>
                      </Nav>
                    </div>
                  </Tab.Container>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="infor-product-details">
                <h2 className="name-product">Baby Wood Toys</h2>
                <div className="fx pricing align-center">
                  <ul className="fx start">
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                  </ul>
                  <h4>$59.58</h4>
                </div>
                <div className="divider" />
                <p className="f-mulish f-w500">
                  Sed ut perspiciatis unde omnis iste natus error silupt atem
                  accusantium doloremque laudantium rem riams eaque quae abillo
                  inventore quasi architecto beatae vitae dicta sunt explicabo.
                  Nemo enim psaml uptatem quia voluptas sit aspernatur aut odit
                  aut fugit sedes quia consequuntur magni dolores eos
                </p>
                <div className="divider style2" />
                <div className="category-tag">
                  <div className="category fx">
                    <h6>Category</h6>
                    <span className="space">:</span>
                    <span>Baby Kits, Toys, Wood</span>
                  </div>
                  <div className="tag fx">
                    <h6>Tags</h6>
                    <span className="space">:</span>
                    <span>Fruits, Juice , Drink</span>
                  </div>
                </div>
                <div className="divider style3" />
                <div className="product-actions fx">
                  <div className="quantity">
                    <span className="btn-quantity minus-btn">
                      <i className="fas fa-caret-down" />
                    </span>
                    <input
                      type="number"
                      name="number"
                      id="number2"
                      defaultValue={1}
                    />
                    <span className="btn-quantity plus-btn">
                      <i className="fas fa-caret-up" />
                    </span>
                  </div>
                  <a href="#" className="tf-button color-text color-style1">
                    ADD TO CART
                  </a>
                  <span className="heart">
                    <i className="far fa-heart" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <Tab.Container defaultActiveKey={"Descrptions"}>
                <div className="flat-tabs tab-shop">
                  <Nav as={"ul"} className="menu-tab">
                    <Nav.Link as={"li"} eventKey={"Descrptions"}>
                      <span>Descrptions</span>
                    </Nav.Link>
                    <Nav.Link as={"li"} eventKey={"Information"}>
                      <span>Information</span>
                    </Nav.Link>
                    <Nav.Link as={"li"} eventKey={"Shipping"}>
                      <span>Shipping &amp; Bill</span>
                    </Nav.Link>
                  </Nav>
                  <Tab.Content className="content-tab">
                    <Tab.Pane eventKey={"Descrptions"}>
                      <div className="content-inner">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore verit
                          atis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci velit
                          sed quia non numquam eius modi tempora incidunt ut
                          labore et dolore magnam aliquam quaerat voluptatem. Ut
                          enim ad minima veniam, quis nostrum exercitationem
                          ullam corporis suscipit laboriosam, nisi ut aliquid ex
                          ea commodi consequatur? Quis autem vel eum iure
                          reprehenderit qui in ea voluptate velit esse quam
                          nihil molestiae consequatur, vel illum qui dolorem eum
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={"Information"}>
                      <div className="content-inner">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore verit
                          atis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci velit
                          sed quia non numquam eius modi tempora incidunt ut
                          labore et dolore magnam aliquam quaerat voluptatem. Ut
                          enim ad minima veniam, quis nostrum exercitationem
                          ullam corporis suscipit laboriosam, nisi ut aliquid ex
                          ea commodi consequatur? Quis autem vel eum iure
                          reprehenderit qui in ea voluptate velit esse quam
                          nihil molestiae consequatur, vel illum qui dolorem eum
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={"Shipping"}>
                      <div className="content-inner">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore verit
                          atis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci velit
                          sed quia non numquam eius modi tempora incidunt ut
                          labore et dolore magnam aliquam quaerat voluptatem. Ut
                          enim ad minima veniam, quis nostrum exercitationem
                          ullam corporis suscipit laboriosam, nisi ut aliquid ex
                          ea commodi consequatur? Quis autem vel eum iure
                          reprehenderit qui in ea voluptate velit esse quam
                          nihil molestiae consequatur, vel illum qui dolorem eum
                        </p>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
            <div className="col-md-12">
              <div
                className="form-review wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <h3>Leave Your Reviews</h3>
                <div className="wrap rating fx">
                  <h6>Your Rating</h6>
                  <ul className="fx start">
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                  </ul>
                </div>
                <form
                  action="contact/contact-process3.php"
                  method="post"
                  id="commentform"
                  className="comment-form"
                >
                  <div className="fx flex-wrap">
                    <fieldset className="name">
                      <input
                        type="text"
                        placeholder="Full Name"
                        required=""
                        id="text"
                        name="text"
                      />
                    </fieldset>
                    <fieldset className="number">
                      <input
                        type="number"
                        placeholder="Phone Number"
                        required=""
                        id="number"
                        name="number"
                      />
                    </fieldset>
                    <fieldset className="phone">
                      <input
                        type="email"
                        placeholder="Email Address "
                        required=""
                        id="email"
                        name="email"
                      />
                    </fieldset>
                    <fieldset className="select-wrap" role="group">
                      <div className="select">
                        <select name="subject" id="subject">
                          <option value="Please Select">Subject:</option>
                          <option value="services1">Subject 01</option>
                          <option value="services2">Subject 02</option>
                        </select>
                      </div>
                    </fieldset>
                    <fieldset className="message">
                      <textarea
                        placeholder="Write Message"
                        rows={5}
                        tabIndex={4}
                        id="messagewr"
                        name="messagewr"
                        defaultValue={""}
                      />
                    </fieldset>
                    <button type="submit" className="fl-btn st-6">
                      <span className="inner">Send Reviews</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-section tf-product">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">Related Product</h2>
            </div>
            <div className="col-md-12">
              <div className="fx m-l-30">
                <div className="sc-product active">
                  <div className="new">
                    <span>new</span>
                  </div>
                  <div className="image">
                    <img src="assets/images/shop/01-shop.jpg" alt="" />
                  </div>
                  <ul className="fx start">
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                  </ul>
                  <h4 className="name">
                    <Link href="/shop">
                      <a>Baby Kids Toys</a>
                    </Link>
                  </h4>
                  <div className="action">
                    <div className="pricing">
                      <span className="un-pricing">$53.97</span>
                      <span>$23.97</span>
                    </div>
                    <ul className="fx">
                      <li>
                        <a href="#" className="active">
                          <i className="far fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-expand-wide" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sc-product">
                  <div className="new sale">
                    <span>30% off</span>
                  </div>
                  <div className="image">
                    <img src="assets/images/shop/02-shop.jpg" alt="" />
                  </div>
                  <ul className="fx start">
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                  </ul>
                  <h4 className="name">
                    <Link href="/shop">
                      <a>Baby Kids Toys</a>
                    </Link>
                  </h4>
                  <div className="action">
                    <div className="pricing style">
                      <span className="un-pricing">$53.97</span>
                      <span>$35.88</span>
                    </div>
                    <ul className="fx">
                      <li>
                        <a href="#">
                          <i className="far fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-expand-wide" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sc-product">
                  <div className="image">
                    <img src="assets/images/shop/03-shop.jpg" alt="" />
                  </div>
                  <ul className="fx start">
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                  </ul>
                  <h4 className="name">
                    <Link href="/shop">
                      <a>Baby Kids Toys</a>
                    </Link>
                  </h4>
                  <div className="action">
                    <div className="pricing">
                      <span>$23.97</span>
                    </div>
                    <ul className="fx">
                      <li>
                        <a href="#">
                          <i className="far fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-expand-wide" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sc-product">
                  <div className="new">
                    <span>new</span>
                  </div>
                  <div className="image">
                    <img src="assets/images/shop/06-shop.jpg" alt="" />
                  </div>
                  <ul className="fx start">
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                  </ul>
                  <h4 className="name">
                    <Link href="/shop">
                      <a>Baby Kids Toys</a>
                    </Link>
                  </h4>
                  <div className="action">
                    <div className="pricing">
                      <span>$23.97</span>
                    </div>
                    <ul className="fx">
                      <li>
                        <a href="#">
                          <i className="far fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-expand-wide" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ShopDetails;
