import { useEffect } from "react";
import $ from "jquery";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  useEffect(() => {
    // navbar animation
    $(document).ready(function () {
      var opcionesnav = $(".navoption").length;
      var clickhamb = 0;

      $("#hamburger").click(function () {
        clickhamb = 1;
        var header = $("#myTopnav");
        if (header[0].classList.length == 1) {
          header.addClass("responsive");
          $("header").height((opcionesnav + 1) * 55);
          $(".navlist a:not(.icon)").css(
            "display",
            "block",
            "z-index",
            "200000000000000",
            "color",
            "green"
          );
          setTimeout(function () {
            $(".navlist a:not(.icon)").css("transform", "translateX(0px)");
          }, 50);
        } else {
          $(".navlist a:not(.icon)").css("transform", "translateX(600px)");
          header.height(48);
          setTimeout(function () {
            header.removeClass("responsive");
            header.height(48);
            $(".navlist a:not(.icon)").css("display", "none");
          }, 1600);
        }
      });

      $(window).on("resize", function () {
        if ($(window).width() > 600 && clickhamb == 1) {
          $("#myTopnav").height(48);
          $(".navlist a:not(.icon)").css("display", "block");
          setTimeout(function () {
            $(".navlist a:not(.icon)").css("transform", "translateX(0px)");
          }, 500);
        }
      });
    });
  }, []);
  return (
    <div style={{ height: 50, position: "relative" }}>
      <header className="topnav" id="myTopnav">
        <Link to="/">
          <img
            className="logo"
            src="./assets/logo 1.png"
            alt="Logo Portfilio"
          />
        </Link>
        <div className="navlist" id="navlist">
          <Link to="/" className="cursor0">
            {" "}
          </Link>
          <NavLink
            exact
            activeStyle={{ color: "orange" }}
            className="navoption active"
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            activeStyle={{ color: "orange" }}
            className="navoption"
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            activeStyle={{ color: "orange" }}
            className="navoption"
            to="/resume"
          >
            Resume
          </NavLink>

          <NavLink
            activeStyle={{ color: "orange" }}
            className="navoption"
            to="/blogs"
          >
            Blogs
          </NavLink>
          <a className="icon hamberger" id="hamburger">
            <i className="fa fa-bars">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10H7"
                  stroke="#292929"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 6H3"
                  stroke="#292929"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 14H3"
                  stroke="#292929"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 18H7"
                  stroke="#292929"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
          </a>
        </div>
      </header>
    </div>
  );
};
