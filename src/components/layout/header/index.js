import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import logo from "../../../assets/images/logo.png";
import ToggleMenu from "../../../assets/images/toggle-menu.png";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../../util";
import cx from "classnames";
import { oldWebsiteUrl } from "../../../common/oldWebsiteUrl";
export default (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setSidebarOpen((prevState) => !prevState);
  const [sticky, setSticky] = useState(false);

  const dropdownToggle = () => setDropdownOpen((prevState) => !prevState);
  const onScroll = (e) => {
    let scrollPosition = window.scrollY;
    if (scrollPosition >= 70) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header id="header" className={cx("d-flex align-items-center", { sticky })}>
      <Container>
        <div className="header-wrap">
          <Link to="/" className="logo" onClick={scrollToTop}>
            <img src={logo} alt="wishhealth" />
          </Link>
          <div className="account-wrapper">
            <Dropdown isOpen={dropdownOpen} toggle={dropdownToggle}>
              <DropdownToggle>Login / Sign Up</DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => {
                    window.location.href = `${oldWebsiteUrl}index/patient_signin`;
                  }}
                >
                  Patient
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    window.location.href = `${oldWebsiteUrl}index/index/signin`;
                  }}
                >
                  Doctor
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <div className="menu-wrap">
              <p className="mb-0 pr-2 pr-sm-3 d-none d-sm-block">Menu</p>
              <button onClick={toggle}>
                <img src={ToggleMenu} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className={`sidebar-wrapper ${sidebarOpen ? "active" : ""}`}>
          <div className="backdrop" onClick={toggle}></div>
          <div className="sidebar-content">
            <div className="menu-wrapper">
              <div className="text-center pt-4">
                <img src={logo} alt="" />
              </div>
              <ul className="mt-5 list-unstyled pl-3">
                {/* <li>
                  <Link to="/" onClick={scrollToTop}>
                    Home
                  </Link>
                </li> */}
                <li>
                  <a href="https://uat.wishhealth.in/index/receptionistLogin">
                    Office Assistant Sign In
                  </a>
                </li>
                <li>
                  <a href="https://uat.wishhealth.in/#our-features">Features</a>
                </li>
                <li>
                  <a href="https://uat.wishhealth.in/#whoweare">Who We Are</a>
                </li>
                <li>
                  <a href="https://uat.wishhealth.in/#clientsay">
                    What Our Clients Say
                  </a>
                </li>
                <li>
                  <a href="https://uat.wishhealth.in/#getintouch">
                    Get in Touch
                  </a>
                </li>

                <li>
                  <a href="https://uat.wishhealth.in/index/doctor">
                    For Doctors
                  </a>
                </li>
                <li>
                  <a href="https://uat.wishhealth.in/">Search Doctors</a>
                </li>
                <li>
                  <a href="https://uat.wishhealth.in/index/patient_signin">
                    Patient Sign In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
