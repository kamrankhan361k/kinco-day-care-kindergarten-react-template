import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import PageBanner2 from "../src/components/PageBanner2";
import PagginationFuntion from "../src/components/PagginationFuntion";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";
const RangeSlider = dynamic(() => import("../src/components/RangeSlider"), {
  ssr: false,
});

const Shop = () => {
  let sort = 6;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".sc-product", sort, active);
    let list = document.querySelectorAll(".sc-product");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout bodyClass={["shop", "style"]}>
      <PageBanner2 pageName={"Shop"} />
      <section className="tf-section tf-shop">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
              <div
                id="sidebar"
                className="side-bar-shop wow fadeInLeft animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="widget widget-search">
                  <div className="form-search-widget">
                    <form action="#" onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Search" />
                      <button>
                        <i className="fas fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="widget widget-category st-2">
                  <h4 className="title-widget fl-ctm-1">category</h4>
                  <div className="list-category">
                    <ul>
                      <li className="fx">
                        <Link href="/shop-details">
                          <a className="st wd-ctm">Canvas Basket</a>
                        </Link>
                        <span className="st">05</span>
                      </li>
                      <li className="fx">
                        <Link href="/shop-details">
                          <a className="st wd-ctm">Home Decoration </a>
                        </Link>
                        <span className="st">03</span>
                      </li>
                      <li className="fx">
                        <Link href="/shop-details">
                          <a className="st wd-ctm">Wood Essentials </a>
                        </Link>
                        <span className="st">07</span>
                      </li>
                      <li className="fx">
                        <Link href="/shop-details">
                          <a className="st wd-ctm">Home/Furniture </a>
                        </Link>
                        <span className="st">04</span>
                      </li>
                      <li className="fx">
                        <Link href="/shop-details">
                          <a className="st wd-ctm">Interior Office </a>
                        </Link>
                        <span className="st">09</span>
                      </li>
                      <li className="fx">
                        <Link href="/shop-details">
                          <a className="st wd-ctm">House Lights </a>
                        </Link>
                        <span className="st">15</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-product st-2">
                  <h4 className="title-widget fl-ctm-1">Sale Products</h4>
                  <div className="sc-pds fx">
                    <div className="image">
                      <img src="assets/images/shop/product1.png" alt="" />
                    </div>
                    <div className="desc">
                      <h6>
                        <Link href="/shop-details">
                          <a>Soft Taddey</a>
                        </Link>
                      </h6>
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
                  </div>
                  <div className="sc-pds fx">
                    <div className="image">
                      <img src="assets/images/shop/product2.png" alt="" />
                    </div>
                    <div className="desc">
                      <h6>
                        <Link href="/shop-details">
                          <a>Arabian Horse</a>
                        </Link>
                      </h6>
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
                  </div>
                  <div className="sc-pds fx">
                    <div className="image">
                      <img src="assets/images/shop/product3.png" alt="" />
                    </div>
                    <div className="desc">
                      <h6>
                        <Link href="/shop-details">
                          <a>Multicolor Toys</a>
                        </Link>
                      </h6>
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
                  </div>
                  <div className="sc-pds style fx">
                    <div className="image">
                      <img src="assets/images/shop/product4.png" alt="" />
                    </div>
                    <div className="desc">
                      <h6>
                        <Link href="/shop-details">
                          <a>Wood Building</a>
                        </Link>
                      </h6>
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
                  </div>
                </div>
                <div className="widget widget-range st-2">
                  <h4 className="title-widget fl-ctm-1">Filter By Price</h4>
                  <RangeSlider />
                </div>
                <div className="widget widget-tag st-2">
                  <h4 className="title-widget fl-ctm-1">Popular Tags</h4>
                  <ul className="list-tag">
                    <li>
                      <Link href="/shop-details">
                        <a className="f-rubik active">Pasta</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-details">
                        <a className="f-rubik">Burger</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-details">
                        <a className="f-rubik">Coffee</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-details">
                        <a className="f-rubik">Pizza Pasta</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-details">
                        <a className="f-rubik">Organic</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-details">
                        <a className="f-rubik">Sea Fish</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
              <article className="article">
                <div className="jus-bet mg-bt-35 align-center p-t5">
                  <div className="show-result">
                    <span>Showing 1 - 12 of 30 Results</span>
                  </div>
                  <div className="sort-by seclect-box fx align-center">
                    <div id="artworks" className="dropdown">
                      <a href="#" className="btn-selector nolink">
                        Sort by Newness
                      </a>
                      <ul>
                        <li>
                          <span>ascending</span>
                        </li>
                        <li className="active">
                          <span>decrease</span>
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="list">
                      <span>
                        <i className="fas fa-list" />
                      </span>
                    </a>
                    <a href="#" className="grid">
                      <i className="far fa-border-all" />
                    </a>
                  </div>
                </div>
                <div
                  className="wap m-l-30 flex-wrap fx wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
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
                      <Link href="/shop-details">
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
                          <Link href="/shop-details">
                            <a className="active">
                              <i className="far fa-shopping-cart" />
                            </a>
                          </Link>
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
                      <Link href="/shop-details">
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
                          <Link href="/shop-details">
                            <a>
                              <i className="far fa-shopping-cart" />
                            </a>
                          </Link>
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
                      <Link href="/shop-details">
                        <a>Baby Kids Toys</a>
                      </Link>
                    </h4>
                    <div className="action">
                      <div className="pricing">
                        <span>$23.97</span>
                      </div>
                      <ul className="fx">
                        <li>
                          <Link href="/shop-details">
                            <a>
                              <i className="far fa-shopping-cart" />
                            </a>
                          </Link>
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
                      <img src="assets/images/shop/04-shop.jpg" alt="" />
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
                      <Link href="/shop-details">
                        <a>Baby Kids Toys</a>
                      </Link>
                    </h4>
                    <div className="action">
                      <div className="pricing">
                        <span className="un-pricing">$53.97</span>
                        <span>$35.88</span>
                      </div>
                      <ul className="fx">
                        <li>
                          <Link href="/shop-details">
                            <a>
                              <i className="far fa-shopping-cart" />
                            </a>
                          </Link>
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
                      <img src="assets/images/shop/05-shop.jpg" alt="" />
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
                      <Link href="/shop-details">
                        <a>Baby Kids Toys</a>
                      </Link>
                    </h4>
                    <div className="action">
                      <div className="pricing">
                        <span>$23.97</span>
                      </div>
                      <ul className="fx">
                        <li>
                          <Link href="/shop-details">
                            <a>
                              <i className="far fa-shopping-cart" />
                            </a>
                          </Link>
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
                      <Link href="/shop-details">
                        <a>Baby Kids Toys</a>
                      </Link>
                    </h4>
                    <div className="action">
                      <div className="pricing">
                        <span>$23.97</span>
                      </div>
                      <ul className="fx">
                        <li>
                          <Link href="/shop-details">
                            <a>
                              <i className="far fa-shopping-cart" />
                            </a>
                          </Link>
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
                      <img src="assets/images/shop/07-shop.jpg" alt="" />
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
                      <Link href="/shop-details">
                        <a>Baby Kids Toys</a>
                      </Link>
                    </h4>
                    <div className="action">
                      <div className="pricing">
                        <span className="un-pricing">$53.97</span>
                        <span>$35.88</span>
                      </div>
                      <ul className="fx">
                        <li>
                          <Link href="/shop-details">
                            <a>
                              <i className="far fa-shopping-cart" />
                            </a>
                          </Link>
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
                      <img src="assets/images/shop/08-shop.jpg" alt="" />
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
                      <Link href="/shop-details">
                        <a>Baby Kids Toys</a>
                      </Link>
                    </h4>
                    <div className="action">
                      <div className="pricing">
                        <span>$23.97</span>
                      </div>
                      <ul className="fx">
                        <li>
                          <Link href="/shop-details">
                            <a>
                              <i className="far fa-shopping-cart" />
                            </a>
                          </Link>
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
                      <img src="assets/images/shop/09-shop.jpg" alt="" />
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
                      <Link href="/shop-details">
                        <a>Baby Kids Toys</a>
                      </Link>
                    </h4>
                    <div className="action">
                      <div className="pricing">
                        <span>$23.97</span>
                      </div>
                      <ul className="fx">
                        <li>
                          <Link href="/shop-details">
                            <a>
                              <i className="far fa-shopping-cart" />
                            </a>
                          </Link>
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
                      <img src="assets/images/shop/10-shop.jpg" alt="" />
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
                      <Link href="/shop-details">
                        <a>Baby Kids Toys</a>
                      </Link>
                    </h4>
                    <div className="action">
                      <div className="pricing">
                        <span className="un-pricing">$53.97</span>
                        <span>$35.88</span>
                      </div>
                      <ul className="fx">
                        <li>
                          <Link href="/shop-details">
                            <a>
                              <i className="far fa-shopping-cart" />
                            </a>
                          </Link>
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
                      <img src="assets/images/shop/11-shop.jpg" alt="" />
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
                      <Link href="/shop-details">
                        <a>Baby Kids Toys</a>
                      </Link>
                    </h4>
                    <div className="action">
                      <div className="pricing">
                        <span>$23.97</span>
                      </div>
                      <ul className="fx">
                        <li>
                          <Link href="/shop-details">
                            <a>
                              <i className="far fa-shopping-cart" />
                            </a>
                          </Link>
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
                      <img src="assets/images/shop/12-shop.jpg" alt="" />
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
                      <Link href="/shop-details">
                        <a>Baby Kids Toys</a>
                      </Link>
                    </h4>
                    <div className="action">
                      <div className="pricing">
                        <span>$23.97</span>
                      </div>
                      <ul className="fx">
                        <li>
                          <Link href="/shop-details">
                            <a>
                              <i className="far fa-shopping-cart" />
                            </a>
                          </Link>
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
              </article>
              <div
                className="themesflat-pagination style fx fx-style2 m-t30"
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
export default Shop;
