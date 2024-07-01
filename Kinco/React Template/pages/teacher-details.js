import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const TeacherDetails = () => {
  return (
    <Layout bodyClass={"teacher"}>
      <PageBanner pageName={"Teacher Details"} />
      <section className="tf-section tf-teacher-details">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fx teacher-details">
                <div className="teacher-infor">
                  <div className="content">
                    <h3 className="name">Frank T. Norman</h3>
                    <p className="job">English Teacher</p>
                    <p className="sub f-mulish">
                      Quis autem vel eum iure reprehenderit quiin ea voluptate
                      velit esse quam nihile molestiae consequatur velillum
                    </p>
                  </div>
                  <div className="teacher-social">
                    <h4>Follow Me</h4>
                    <div className="social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-google-plus-g" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="teacher-image wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
                  <img
                    src="assets/images/common/sc-service-10.jpg"
                    alt="Image"
                  />
                </div>
                <div className="teacher-desc">
                  <ul className="fx m-b17">
                    <li className="style">
                      <span>M</span>
                    </li>
                    <li>
                      <span className="f-mulish">
                        Sedut perspiciatis unde omnis iste natus error sit
                        volupta accusantium doloremque laudantium totam
                      </span>
                    </li>
                  </ul>
                  <p className="f-mulish">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual
                  </p>
                  <ul className="box">
                    <li className="list fx">
                      <span>
                        <i className="far fa-envelope-open" />
                      </span>
                      <span>Email Address</span>
                    </li>
                    <li>support@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="infor-teacher-detail">
                <div className="experience m-b38">
                  <h3>Personal Experience</h3>
                  <p>
                    Waste ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi sed sagittis nisl. In vitae orci ante. Phasellus id
                    libero mi. Praesent ipsum velit, aliquam et sodales eget,
                    tincidunt lobortis massa. Duis luctus dapibus sem, nec
                    scelerisque ante tempus lacinia. Suspendisse malesuada non
                    nibh ac finibus. Vivamus sem tortor, molestie sit amet nibh
                    eget, commodo mattis arcu.
                  </p>
                  <p>
                    Integer dignissim dolor quis lorem semper, sit amet
                    convallis ipsum dignissim. Sed diam quam, aliquam a
                    fringilla at, lobortis sed velit. Cum natoque penatibus et
                    magnis dis parturient montes nascetur ridiculus mus. Nulla
                    iaculis enim id mauris pharetra laoreet.
                  </p>
                </div>
                <div className="professional">
                  <h3>Professional Skills</h3>
                  <p>
                    Consectetur adipiscing elit. Morbi sed sagittis nisl. In
                    vitae orci ante. Phasellus id libero mi. Praesent ipsum
                    velit, aliquam et sodales eget, tincidunt lobortis massa.
                    Duis luctus dapibus sem, nec scelerisque ante tempus
                    lacinia. Suspendisse malesuada non nibh ac finibus. Vivamus
                    sem tortor, molestie sit amet nibh eget, commodo mattis
                    arcu.
                  </p>
                </div>
                <div className="wrap-couter fx">
                  <div
                    className="progress-couter firt wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="couter">
                      <div
                        className="chart"
                        data-percent={79}
                        data-color="#FC477E"
                      >
                        <span
                          className="percent"
                          style={{ width: 120, height: 120, lineHeight: 120 }}
                        >
                          79
                        </span>
                        <canvas height={120} width={120} />
                      </div>
                      <h4 className="heading-progress">Service Orientation</h4>
                    </div>
                  </div>
                  <div
                    className="progress-couter two wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="couter">
                      <div
                        className="chart"
                        data-percent={83}
                        data-color="#FAB319"
                        data-trackcolor="#fef7e8"
                      >
                        <span
                          className="percent"
                          style={{ width: 120, height: 120, lineHeight: 120 }}
                        >
                          83
                        </span>
                        <canvas height={120} width={120} />
                      </div>
                      <h4 className="heading-progress">Time Management</h4>
                    </div>
                  </div>
                  <div
                    className="progress-couter three wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="couter">
                      <div
                        className="chart"
                        data-percent={68}
                        data-color="#B250FE"
                        data-trackcolor="#f7edff"
                      >
                        <span
                          className="percent"
                          style={{ width: 120, height: 120, lineHeight: 120 }}
                        >
                          68
                        </span>
                        <canvas height={120} width={120} />
                      </div>
                      <h4 className="heading-progress">Critical Thinking</h4>
                    </div>
                  </div>
                  <div
                    className="progress-couter three wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="couter">
                      <div
                        className="chart"
                        data-percent={94}
                        data-color="#B250FE"
                        data-trackcolor="#f7edff"
                      >
                        <span
                          className="percent"
                          style={{ width: 120, height: 120, lineHeight: 120 }}
                        >
                          94
                        </span>
                        <canvas height={120} width={120} />
                      </div>
                      <h4 className="heading-progress">Critical Thinking</h4>
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
export default TeacherDetails;
