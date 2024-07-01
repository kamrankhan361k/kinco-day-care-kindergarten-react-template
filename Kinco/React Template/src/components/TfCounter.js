import dynamic from "next/dynamic";

const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});

const TfCounter = ({ nonst }) => {
  return (
    <section className={`tf-section tf-counter ${!nonst ? "st-2" : ""}`}>
      <img
        src="assets/images/pattern/fun-fact-1.png"
        alt="Image"
        className="fun-fact1 wow fadeInLeft animated"
        data-wow-delay="0.3ms"
        data-wow-duration="1200ms"
      />
      <img
        src="assets/images/pattern/fun-fact-2.png"
        alt="Image"
        className="fun-fact2 wow fadeInRight animated"
        data-wow-delay="0.3ms"
        data-wow-duration="1200ms"
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-12">
            <div
              className="sc-fun-fact st-1 themesflat-counter wow fadeIn animated"
              data-wow-delay="0.2ms"
              data-wow-duration="1300ms"
            >
              <div className="box-icon">
                <svg
                  data-name="Fun fact"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={66}
                  height={66}
                  viewBox="0 0 66 66"
                >
                  <g data-name={1}>
                    <g>
                      <image
                        id="Icon-2"
                        data-name="Icon"
                        width={66}
                        height={66}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="box-content box">
                <div className="number-content clr-pri-1">
                  <Counter end={5693} />+
                </div>
                <p className="clr-pri-1">Student Enroll</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-12">
            <div
              className="sc-fun-fact st-2 themesflat-counter wow fadeIn animated"
              data-wow-delay="0.2ms"
              data-wow-duration="1300ms"
            >
              <div className="box-icon style2">
                <svg
                  data-name="Fun fact"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={62}
                  height={60}
                  viewBox="0 0 62 60"
                >
                  <g data-name={2}>
                    <g>
                      <image
                        id="dictionary"
                        width={62}
                        height={60}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="box-content box">
                <div className="number-content clr-pri-1">
                  <Counter end={463} />+
                </div>
                <p className="clr-pri-1">Total Classes</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-12">
            <div
              className="sc-fun-fact st-3 themesflat-counter wow fadeIn animated"
              data-wow-delay="0.2ms"
              data-wow-duration="1300ms"
            >
              <div className="box-icon">
                <svg
                  data-name="Fun fact"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={61}
                  height={55}
                  viewBox="0 0 61 55"
                >
                  <g data-name={3}>
                    <g>
                      <image
                        id="online-class"
                        width={61}
                        height={55}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="box-content box">
                <div className="number-content clr-pri-1">
                  <Counter end={934} />+
                </div>
                <p className="clr-pri-1">Expert Teacher</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-12">
            <div
              className="sc-fun-fact st-3 themesflat-counter mgbt-0 wow fadeIn animated"
              data-wow-delay="0.2ms"
              data-wow-duration="1300ms"
            >
              <div className="box-icon">
                <svg
                  data-name="Fun fact"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={61}
                  height={59}
                  viewBox="0 0 61 59"
                >
                  <g data-name={4}>
                    <g>
                      <image
                        id="notes"
                        width={61}
                        height={59}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="box-content box">
                <div className="number-content clr-pri-1">
                  <Counter end={3000} />+
                </div>
                <p className="clr-pri-1">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TfCounter;
