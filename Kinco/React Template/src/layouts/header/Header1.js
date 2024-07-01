import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import {
  About,
  Blog,
  Classes,
  Contact,
  Event,
  Home,
  Pages,
  Program,
  Shop,
  Teacher,
} from "./Menus";

const Header1 = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  useEffect(() => {
    document.querySelector("body").className =
      "counter-scroll header-fixed main";
  }, []);
  return (
    <header id="site-header" className="header_main d-none d-xl-block">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6">
            <div className="top-bar-2 fx">
              <div id="site-logo" className="clearfix">
                <Link href="/">
                  <a className="logo st-2">
                    <img src="assets/images/logo/logodark-2.png" alt="Kinco" />
                  </a>
                </Link>
              </div>
              <div className="header-contact fx">
                <div className="inner-contact fx">
                  <svg
                    data-name="Hero Area"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={35}
                    height={53}
                    viewBox="0 0 35 53"
                  >
                    <g id="Address">
                      <image
                        id="map-pin"
                        width={35}
                        height={53}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </g>
                  </svg>
                  <ul>
                    <li className="clr-pri-4">School Location</li>
                    <li className="clr-pri-2">55 Main Street, New York</li>
                  </ul>
                </div>
                <div className="inner-contact fx">
                  <svg
                    data-name="Hero Area"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={49}
                    height={47}
                    viewBox="0 0 49 47"
                  >
                    <g>
                      <image
                        width={49}
                        height={47}
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAvCAYAAABKQCL3AAAG6UlEQVRogc2aebCVcxjHP67k3kTENUhjzb4l3ChjuaEUKcaWsg7G/odrGzvZBpHdJNn3pSYRZRnZs0RRtshoSrLkhpJlnubzjtfr3Hve456TvjN3zj3v9nu+v9/zfJ/n97xnmc0nXMUSQiugD9AVaAe0BlYCFgHLZEz4CVgIfA+8DIxtysTJ3RoWP7jSiDEGA72AFYD3gUnAJ8DHwHcaXSW5VYGNgU2AbYFDgbmSucX7/oFKk6gDngXGAKcCLxS5fpafr6aOhY27A3sA9wGNwGHAzOSCqsrYvhgdgNeBK4BDchBoCouciAZgH1fuPWC/JUHiDuBa4PIyPnM2cABwJPAE0DsOViqww49vB9pW4uGiHngE2KxSMXEKcE/m2GlAJ+A34DyDOcFAVet34IZM8F5ssMf1Z6WOjwdeizgp5k6dgRO9OXxyT2C5IvfUAD8AF6SOPWpghz9XA9OBrT13F3Cj50Jqx8Xsei5iqq/qtBPwkYQSxGRs2NRKnGMwfgF8BfwItJHUEOBdFaIQYpm/Bb7x3Ln6bk3q2vDpozW+G7AWMN9zxwKXAJ8BKwKbp+57B7gGOCL1/Z0siVX1s1WAK5W0PzPX1Ks4bwA9TUhpdFAGExxkgOMMB4FhwJdAP2C4BGLss4GngbWB/sCB3hdSvayBvUZmvF+z7jRbSYsZv7cAAfTF7dXv+wqcn5WZ9XEqynrOfBi4qfHxDLCL0nmzQlDtKjxshu+QWs2Okk8QWX+tNInRwEj9HmdskwJGJujiUh+cOf68htb6/UxgHvC5gbsdsKsTMMljo4C9zdB7AdcBA4BtgKnAOn5fDbg6NVbYuEFCYoBM93eQkc7K3GZIBJ5UPdIIFVne2MEaaHtdaAEwDdjSMgKNj2dM1AuC4Jv+X+9qRXxNBrbKKFeIzogkT7zoIPe6tIOdlUVFSGyjlHbOXNtFo1ZWFCqBC0O5Jndr6Fwl2z8kELK4vozz5JCvgTkam8bblgUf6//lxunaOggNPTElb+FKn/r/rzkGrlVVGguci2Vf3cq1XFjFeBmkF3yAtVME73ORNCzSGkoY8HBXIUs4JHGKLjmxDATCxpvMWbXuQyYlJ1uZgcerv3sacG8VeFDsB04wZhIMdGmziCx8kUkxwfEKSKOr9Jp7i8gzP5sH2jkpYfQWCsDyZvLZKuHo7GAJia+duYdSmTaL6pT8Bl7RkPsz152sS17o9+2sALoqGAskE/nhZ135Nw2t0eiaFNlxSvC8ppaplUG9UHeqziSTNCaahHpoTBtLhiz6ORGdzPpxzYNm4ATD/FzB0qJaOxoltaApgwuhyqxc66zUO3ghfGViijLhJZe6EE722OWucJ3FXyHMN8NHjTbDIrAkAslKLHJ2YxPzWKZEziI0//FMhZrFFH23ytmtOKoMmDoHCr+9zSUuhNGWAHmwRAggiXGWwtgaeatACyXBcOuibHL7XxEkRhhY2JX43RK7TQHDImDbW1UuVSRmGExHqhbtVY+uTdwz1A3NUoOkih1liTvfzDjQarMQRpjuj1raSNym1PZT7kYqj03hDNWs3f9n+t9Ib4oii+bt37xupn6uksblRZrEWFVpaM57Bxg/d7fQhhCQ9VpS7Wb3DD3cA9wKfJjj/jo7G+GC55c4dm8FYiNL7O8d+35bPLmRJfGFleqUZnJFGnMtWWbaR+qbc+CpFnR32zmZ4/65zibbZZLLhULNs2Sb+kbOZ3yrARvaB2quudBOAtOV8BvdT083ycb37jbJprlCRdFUB3CgmfmlnETm2fl41c3KYEvqLG6yYu5VpCzpa0Wbq5PeXBuzo64yISeRwEmW3hvbnRhh0wDdo6P79zzo4kTs2BISf/igdYEHSiAy0WbZSe6xY09xp+4Srrabx/PgGnsAzaJYR+MX3apR392hBDJj/Wtt52OOEzJcGR9S5P7oPx1nWdQiEgna2sRKDJmf77bFWGhL8uHUsZpmrifV6mxrU6BZlPKmqKf9pBnN7Ory4pci17V2K/xIngkr9XVXTzvc75eQE0rFsuaoyDs7uz0oKwmUz966xw1lNL61n3vZbH7KkuRfLZos/uuLxzEmt0Pt47YEYcMaxudQd429bFbPSr/qLTcJ7H4kLcyFqddXeZFk9jD+Vjvj7c36fbQtl8uW48VjH7erz+oChTZL3a1Sp5ojtlChDrJLONbn9LdzGO801sxrQLneY1+qC+xqhq9XGlc2hva1xhpvf/YY3WQ1X2m9YE740nZPberXBUuMBLrB+gbldSbHmTblxkhsiEb3sDRp8NcB0RKNN0xRpkQeCsK5UYn32PEjkti6Ricw6qjY8ETdFCsQJUgkzCj3Yzt8vb3gKEuiKZf+TUc+AH8BpgCbO2Mg1x8AAAAASUVORK5CYII="
                      />
                    </g>
                  </svg>
                  <ul>
                    <li className="clr-pri-4">Hotline</li>
                    <li className="clr-pri-2">+012 (345) 678</li>
                  </ul>
                </div>
                <a
                  href="#"
                  className="menu-bar-right header-menu"
                  onClick={() => setSidebarToggle(true)}
                >
                  <svg
                    data-name="Hero Area"
                    xmlns="http://www.w3.org/2000/svg"
                    width={58}
                    height={58}
                    viewBox="0 0 58 58"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                                                .cls-1 {\n                                                fill: #b250fe;\n                                                }\n                                        \n                                                .cls-1, .cls-2 {\n                                                fill-rule: evenodd;\n                                                }\n                                        \n                                                .cls-2 {\n                                                fill: #fff;\n                                                }\n                                            ",
                        }}
                      />
                    </defs>
                    <g data-name="Menu Area">
                      <g id="Menu_bar" data-name="Menu bar">
                        <path
                          id="Bg"
                          className="cls-1"
                          d="M7.853,2.283c14.9-3.89,29.969-1.4,43.467.819a7.923,7.923,0,0,1,5.735,5.422c3.111,14.141-.428,28.636-1.166,42.981a5.157,5.157,0,0,1-4.773,4.875c-13.49.568-23.463,3.285-41.787,0.9C5.948,56.807,2.348,54.2,1.9,51.7-0.683,37.877.2,23.508,2.194,8.757a8.71,8.71,0,0,1,5.66-6.473"
                        />
                        <path
                          id="Bar"
                          className="cls-2"
                          d="M16,17H42a2,2,0,0,1,0,4H16A2,2,0,0,1,16,17Zm0,10H42a2,2,0,0,1,0,4H16A2,2,0,0,1,16,27Zm0,10H42a2,2,0,0,1,0,4H16A2,2,0,0,1,16,37Z"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6">
            <div className="site-header-inner st-2 fx">
              <div className="btn-menu">
                <span />
              </div>
              <div className="nav-wrap">
                <nav id="mainnav" className="mainnav st-2">
                  <ul className="menu">
                    <li className="menu-item-has-children current-menu-item">
                      <a href="#">HOME</a>
                      <ul className="sub-menu">
                        <Home />
                      </ul>
                    </li>
                    <li className="menu-item">
                      <About />
                    </li>
                    <li className="menu-item-has-children">
                      <a>PAGES</a>
                      <ul className="sub-menu">
                        <li className="inner-menu-item">
                          <a href="#">Teachers</a>
                          <ul className="sub-menu">
                            <Teacher />
                          </ul>
                        </li>
                        <li className="inner-menu-item">
                          <a href="#">Classes</a>
                          <ul className="sub-menu">
                            <Classes />
                          </ul>
                        </li>
                        <li className="inner-menu-item">
                          <a href="#">Events</a>
                          <ul className="sub-menu">
                            <Event />
                          </ul>
                        </li>
                        <Pages />
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a>Programs</a>
                      <ul className="sub-menu">
                        <Program />
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a>BLOG</a>
                      <ul className="sub-menu">
                        <Blog />
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a>SHOP</a>
                      <ul className="sub-menu">
                        <Shop />
                      </ul>
                    </li>
                    <li className="inner">
                      <Contact />
                    </li>
                  </ul>
                  {/* /.menu */}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar show={sidebarToggle} close={() => setSidebarToggle(false)} />
    </header>
  );
};
export default Header1;
