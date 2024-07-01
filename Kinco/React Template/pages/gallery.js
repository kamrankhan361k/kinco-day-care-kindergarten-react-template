import PageBanner from "../src/components/PageBanner";
import PhotoGallerySlider from "../src/components/PhotoGallerySlider";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";

const Gallery = () => {
  return (
    <Layout bodyClass={"gallery"}>
      <PageBanner pageName={"Gallery"} />

      <section className="tf-section tf-galley">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-4">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Photo Gallery</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Explore Our Case Studies &amp; Recent Photo Gallery
                </h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div
                className="sc-gallery wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature active">
                  <img
                    src="assets/images/common/sc-gallery-1.jpg"
                    alt="Image"
                  />
                  <div className="overlay" />
                  <div className="box-content">
                    <h5 className="title">
                      <a href="#" className=" clr-pri-2">
                        Outdoor &amp; Gaming
                      </a>
                    </h5>
                    <p className="f-rubik">kindergarten</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div
                className="sc-gallery wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-gallery-2.jpg"
                    alt="Image"
                  />
                  <div className="overlay" />
                  <div className="box-content">
                    <h5 className="title">
                      <a href="#" className=" clr-pri-2">
                        Outdoor &amp; Gaming
                      </a>
                    </h5>
                    <p className="f-rubik">kindergarten</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div
                className="sc-gallery wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-gallery-3.jpg"
                    alt="Image"
                  />
                  <div className="overlay" />
                  <div className="box-content">
                    <h5 className="title">
                      <a href="#" className=" clr-pri-2">
                        Outdoor &amp; Gaming
                      </a>
                    </h5>
                    <p className="f-rubik">kindergarten</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div
                className="sc-gallery mg-bt wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-gallery-4.jpg"
                    alt="Image"
                  />
                  <div className="overlay" />
                  <div className="box-content">
                    <h5 className="title">
                      <a href="#" className=" clr-pri-2">
                        Outdoor &amp; Gaming
                      </a>
                    </h5>
                    <p className="f-rubik">kindergarten</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div
                className="sc-gallery mgbt-0 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-gallery-5.jpg"
                    alt="Image"
                  />
                  <div className="overlay" />
                  <div className="box-content">
                    <h5 className="title">
                      <a href="#" className=" clr-pri-2">
                        Outdoor &amp; Gaming
                      </a>
                    </h5>
                    <p className="f-rubik">kindergarten</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-gallery">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Photo Gallery</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Explore Our Case Studies &amp; Recent Photo Gallery
                </h2>
              </div>
            </div>
            <div className="col-12">
              <div className="slider-gallery">
                <div className="themesflat-carousel clearfix">
                  <PhotoGallerySlider />
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
export default Gallery;
