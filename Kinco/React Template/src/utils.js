export const activeNavMenu = (path) => {
  const navItem = document.querySelectorAll("#mainnav li a");

  navItem.forEach((nav) => {
    if (nav.pathname === window.location.pathname) {
      if (!nav.href.includes("#")) {
        if (nav.pathname === "/contact" || nav.pathname === "/about") {
          nav.parentElement.className = "current-menu-item";
        } else {
          nav.parentElement.className = "inner-current-item";
          !document.querySelector("body").className.includes("style") &&
            nav.parentElement.parentElement.parentElement.classList.add(
              "current-item"
            );
          nav.parentElement.parentElement.parentElement.classList.add(
            "current-menu-item"
          );
          nav.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(
            "current-menu-item"
          );
        }
      }
    }
  });
};

export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};
const stickyNav_ = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll("#site-header");
  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];
    if (sticky) {
      if (offset > 10) {
        sticky.classList.add("is-fixed");
      } else {
        sticky.classList.remove("is-fixed");
      }
      if (offset > 100) {
        sticky.classList.add("is-small");
      } else {
        sticky.classList.remove("is-small");
      }
    }
  }
};

export const stickyNav = (stickyClass) =>
  window.addEventListener("scroll", stickyNav_);

export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

export const scrollTopFun = () => {
  let scrollUp = document.getElementById("scroll-top"),
    lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    let st = window.scrollY;
    if (st > 110) {
      scrollUp.classList.add("show");
    } else {
      scrollUp.classList.remove("show");
    }
  });
};
