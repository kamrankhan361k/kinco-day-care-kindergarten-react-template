import PageBanner from "../src/components/PageBanner";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";

const Contact = () => {
  return (
    <Layout bodyClass={"contact"}>
      <PageBanner pageName={"Contact"} pageTitle={"Contact Us"} />

      <section className="tf-section tf-faq">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-2">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Need Any Support</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  We Are Ready To Help You For Your’s Informations
                </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="sc-faq wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="image">
                  <img src="assets/images/common/sc-faq1.png" alt="Image" />
                </div>
                <div className="content">
                  <h4>Supports and Info</h4>
                  <p className="desc">
                    Edipiscin elitsed eiusmod incididunt dolore magna
                    suspendisse
                  </p>
                  <a href="#" className="fl-btn st-5">
                    <span className="inner">Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="sc-faq active wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="image">
                  <img src="assets/images/common/sc-faq2.png" alt="Image" />
                </div>
                <div className="content">
                  <h4>News and Updates</h4>
                  <p className="desc">
                    Edipiscin elitsed eiusmod incididunt dolore magna
                    suspendisse
                  </p>
                  <a href="#" className="fl-btn st-5">
                    <span className="inner">Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="sc-faq wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="image">
                  <img src="assets/images/common/sc-faq3.png" alt="Image" />
                </div>
                <div className="content">
                  <h4>Events and Programs</h4>
                  <p className="desc">
                    Edipiscin elitsed eiusmod incididunt dolore magna
                    suspendisse
                  </p>
                  <a href="#" className="fl-btn st-5">
                    <span className="inner">Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="title-heading">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <span className="inner-sub">Contact Us</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2 m-b26">
                  Feel Free To Contact Us For More Info
                </h2>
                <p className="f-mulish">
                  Consectetur adipiscin elitsed eiusmod tempor incidide labore
                  magna aliqua suspendisse gravida commodo
                </p>
              </div>
              <div className="wrap-contact">
                <div className="fx adress">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={43}
                      height={65}
                      viewBox="0 0 43 65"
                    >
                      <image
                        id="location"
                        width={43}
                        height={65}
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAABBCAYAAABIMl38AAAMFklEQVRogb2aD2xV1R3HP+e+29f/hZaWPwKC4MIofwxDnfhv6uYUQZm66IygJksc06iZTLcsEdFky+KmTqcxZk4niSS6P2hUMvFPBlOGioIgHco/B1QopS1tX9vX9+69Zznn3Pd6++69zwLFb/rLa+8753d+53d+5/fvVkhJNHqAzwALSAIJwAOqgRIgDfQxjVIuQHI2MA2YANQCNuAAHcABzUnwAQ7rSfM5I3ye3UDW560++30uVZEScWzCqrGVlONxE1kWIzkfEZpZHA7/oYyVJFlJL71kToawJVqzyxAsw2OcHmP5GzgWCH+O4BAWj5Dld5rPEIS1Qk+iIDkPl09w+T0O4/RiilzfNI6FcnMcxpLlIWArcH7EqiHEC2vlP+8B3sVhdl7IYxUwigY2OwuHfyP1OsUk0hchGuZ4nwKWaqYnH0rLU5EsjVtJyHcLnihjr9G/PUc/twzpAuW0lDvi4OkkfBrqRSzleVxuYR/oyxfQtE2qYNGE/u23JLgl7wEKL1FuYcdnqMZVNED1FEiOBisJXgYyLZDeC72tZiPJwFnG8ezlZvo5RBu/zLu13BCZLhB2D4to52VKQ3seYOppHwvlAhoWQ93lUDULEqPVQ38F1wxyD0NqK7S/Aa0vQJ9nhsR5EuH78Bp+wFReGfSVbAoIalFNL+30Y0cauvDdi5Jj/LVw6s+hdK6v3latFqQHyh8KAUIxqQAajFr7P4b9D8OBvxqNlcYI7OlpDlXU+aHDF/adQcK8SAnX5Y+/UNA+X2mNT0L9T4Cj4O0PDIiDz8yaaALckaeh6Taz6fKYtVzte19CcH3ONw9cMEEjku2hifhHpgUVcOZqqFoE3qcgM8V9TQgeiCRYMyH1Cmy6BlzfLLzQ4JzJTUeyw4jh5Z30r2OdfJ+/0zl/MYK6H/mCisANHAoJM0/NV3zmPJc37dCaAwHkNzlPI+RGre4GshyOPUllNbOXwqSnwP049PVxI/Et+GIpbHvaJEhRkNqDjMam1WI7yDZukAmQbgGpu5ICOWoCTLoP5OcDF+iESfHZCZOXa/56HS9CBiVXOzfQBJY0nmah9plRx5AFMfl2YBQ4Hf7Wj+Xo40iZXrvmKybfZhKZKDN0tGYXKM0LuZYaKTmAR3XIDJRZVo5AfGcdWGXgdEWc0wnCrgGvD7nuIujpNIEjCBOouoTNREtmOAOX6rwmg2FTGf6oCyFxKjidMRo6QVJ8E5Og7oKBi1YoR5Ya2c9sC5spsSagPE3NTP/kh8tWC8n4LDFi1uAUMkhSR7UptsgwWkbFf893oWXj/fhHxKDhQtqsY/k2GuG6BYyxyVIZstWcsOq5XeUb78kSFMPfrhyIXFFLCSrtyKyKwCTpn0Ns/TMc8Pl7MbL4UAlLj3YbUdpVSUumy8/rinA5YdjQ32nWK4sJvZKMLeGg1mKhnUjfVFP7TMYkvZgdnSD0iSUhtd+sl4xdptMmzY58pl8IFUFatyK+mQnsYJihUkkyyLZPwpVGUHcW/7MpYSsZDuEyNrQjtcvmDZDeDcla6D8aYnLCKB1h+B/YYNaLFtYVko8t0UKGPt7MVwBBUr2Cll7Y+zpY40E6wxsQFD/Fd+9r0NKX602EyWEjab60aAeRYtWgoi8YPVQiseXP4O6H0vrhTWQUP3cfcvOzA+2pwvVVapjmJeV/Lcbr/tU/yXAktCPXr0r2tyPffxASE0EkBtzZcWvUM3wSE5AbH4QD7Wadwuhl3LtkLs+rbpoVaFw8GhqcE1jFhfdWw64/QvlMsMTxC6zmqfmKz64nYMPLhn/U2kau52imU5XmQj7lm7CgUko6Bxe/Piy/96UUcvXDMGUJ9O+EbMpoaKhQCWpJJZROgz0rkauXGd6VMRdL6J8JZGhWgidWXJHfdBZJGVK3MAcrxPM9gzqWT9dCmYM49WJI1pmsSR9raKmA35FgWVA5Gexq5Ed/gFdXmDmVwWgZ8I6m3Fkp+lmZ07SQjw5iWyoturBCWeWAhlUapxojjWchzr0dxs8zbkN2QH8PeM5AKW7ZUKpifq3J4ps3Ijc8CU0fGCErYjTqmO9EDXV4dOQUIeRjBUoQ3InksVj/n3NxR/26f9oFiNMvgXEzoHqML5xt3JISvrsFDm1H7voX7FhnQurIIk0OfGVM5gFxLiuCJybk8gLNOVrgZkZxSuSug0JnAy2IWgtGToDKOkgkwc1ATxscbYYOn1Guax4n5ADvIyJNg9bwIGHfDg2FTi6Wm3lHa2AoEVb6gmf8I5S59DLQiC5m0zkkzEUW3SygnzX5NDUvbGFZJcwRy7WsYT/zdQPi60Cu4zOZtWIUl+U3HBQtUrNKE0eokx/S5rc/vx50gTiHeqbRFnUSQt4ZemZQpttSd0jJ4yc1lcU3F+Wye7iDNE9oDUdAyAfDD4OQQvf8Z51UgVXAOZUtYhZz8h2pCNj6QkQh17mDq6VgV9SxDAv8QCDGcQ2n+xc0BrbeVTF47KacFSRZUdSVHQ+k8dUiw69Yy15eiwkSPoS8P/QsDKF9vKoopunvhkPL0r/IDp+KnczS/toqztuOs4+8UP7LC+GxyMuaPumwoRSsFhZpbdZ9dcVvczD0bEBQYdyJ3nE5n4lK7pflPFCM4ZAgjFZFE79gG3vyuV5DIJxHQMjdG8NPVQB310OqBtqbYec62NEEvd14Hluo4Ywi9VJxiHzg+dB6hrMZUwvz50HjdJg9ESo7IBH9skHI2ObFmyDHgVCp0TboroMta2DNW3gdm9pJUqsFjpseBcvvRXRzRMw9q0HMvhKmng7jTwPG+BmMKv1HRDKOEbYPMv+A7gawHfMWvupMsEoWIUq/K195YIl8YdVITil+IUJQSx0Ccf2SdnH1vavAeYfMl6s52AbV48ByoeIgJKuOVdi/Q2oclEjIHvgxXtXd+iVJRQWU1+M9tBg+2AkTh2gOSqv7QcxrRCxbaV7k9ar4yn/JOI9QPvYZdYsp3w/J6khhI/p1GHVZKqHunk6271288mfAbdRSpbr0Swzr5vuhVqgcgsjKOEjSf01WbyNuXg5eD/Qc9e1XTKfU+hMy9R5OT6NO2GMQI6zqctuX4nRuw02dl3eA0u+gtO6DMY1YS+4w3iIdUewFi760MUdryV1Q/w04csC80NMlk9TtFtyec3F6tuEkv2+adNkQCdm1abCc5q1HI9mW7eZNYdR+VPVWArWTkE/chlzzoUrtos1BTd8L4qp5iJ8+Dh1fgOsUMXbdl1dlR1M4Rex6v+CJBT1bdyFKpmpTiIPnwsgGyKTx7rkRDqXMhQ72zBLmQjG+GuuhVWCXQOcRsIpUxEqjlO2h+pyphZWzZVL8AGUPL0AkpuabGXGkzKG9BapGY916j0lAugPVsPT/dsG69V6oHAUdh828OJ655ofITqHnvStIKV8/QJY5pwBJOT/X5w81KAopYUHrHpgzH3Ht5dBcYK/NIH54OZxxmRmXsMI8QuSv62UXFtqsTefWwceQSDZgl5mGxFCgNpb6ErH4Z8hPtsDmQzBF/ysAzBmLuPFuSDWjQp9pb34VpJ+eWvV4g8dbjChhgFSdb7XhFnYdipDi190Bto1113JoSCI3oz+tO+/Tz+n23VQxPkFSy5c4rVSloao/T0J2Pjv4JjrWAjKJ1xBhp1wUSnMNY2FvE/L9JsS3Z8Bp06H1kOnGDBXKZlUZX9K9ENt7Peg1hOx8aTAXJWR3/26ENyXOC8dCCTyyDsproK8LjrYfm6AKbhrKG/ZS2zhF+99AJLMRvaHxVMor6XO3a5tRbiYyJEdA2WRnhyH8v4c81xR8uv3kll5FuiE8RObbiEF40Fb1PfrtVxHpsqFdjOOFn8CqTdmWg2svJJV9Axmut8KuS5GbhUTtW5SVz8TqewtHmLCoEXEhToj8totnryPhzaDEfUP3ykqqQhRjUMLn4ewmkbmUiuyPsKyN2iZ1i52ItvtQiEAAyPFwPkJU3ETJmIvwnM8HTFSEKD7F0V1q3+bKvRdBvEivdyGWdR3CuwSYPmhzea1HbDzHS7s6PXYnuG+D9Tck6jOyh12IIsIGtZy32fUg1+u800vMAjkXIWcgZaOf6qt/7FKZs+KrXl2kwGtBisPYThOe04So30SibCtZldzmGmk5cygC4P+74Go0nVp5gAAAAABJRU5ErkJggg=="
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <p>Address</p>
                    <h4>55 Main Street, New York</h4>
                  </div>
                </div>
                <div className="fx Email">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={60}
                      height={51}
                      viewBox="0 0 60 51"
                    >
                      <image
                        id="chat_1_"
                        data-name="chat (1)"
                        width={60}
                        height={51}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <p>Email Address</p>
                    <h4>support@gmail.com</h4>
                  </div>
                </div>
                <div className="fx phone">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={60}
                      height={60}
                      viewBox="0 0 60 60"
                    >
                      <image
                        id="phone-call"
                        width={60}
                        height={60}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <p>Hotline</p>
                    <h4>+012 (345) 678</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div
                className="image text-right p-t12 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <img src="assets/images/common/01-contact.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="tf-section map">
          <div className="flat-map">
            <iframe
              className="map-content wow fadeInUp   animated"
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
      </section>
      <section className="tf-section tf-message">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="form-message">
                <h2 className="heading">Leave a Message</h2>
                <form
                  action="contact/contact-process4.php"
                  method="post"
                  id="commentform"
                  className="comment-form"
                >
                  <div className="fx flex-wrap">
                    <fieldset className="name">
                      <input
                        type="text"
                        placeholder="Full Name Here"
                        required=""
                        name="name"
                        className="name"
                        id="name"
                      />
                    </fieldset>
                    <fieldset className="email">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required=""
                        name="mail"
                        className="mail"
                        id="mail"
                      />
                    </fieldset>
                    <fieldset className="phone">
                      <input
                        type="number"
                        placeholder="Phone Number"
                        required=""
                        name="number"
                        className="number"
                        id="number"
                      />
                    </fieldset>
                    <fieldset className="select-wrap" role="group">
                      <div className="select">
                        <select name="subject" id="subject">
                          <option value="Please Select">Subject</option>
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
                        name="messagewr2"
                        className="messagewr2"
                        id="messagewr2"
                        defaultValue={""}
                      />
                    </fieldset>
                    <div className="wrap-btn">
                      <button type="submit" className="fl-btn st-6">
                        <span className="inner">Send message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
