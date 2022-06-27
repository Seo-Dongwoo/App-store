import React from "react";
import "./css/Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          STORE.좋아하는 Apple 제품 알아보기
        </p>
        <p className="footer-subscription-text">아래 링크를 이용해 주세요.</p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="apple.com 검색"
            />
            <Button buttonStyle="btn--outline">SEARCH</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Products</h2>
            <Link to="/products">iPhone 13 Pro</Link>
            <Link to="/products">Watch Series 7</Link>
            <Link to="/products">MacBook Pro</Link>
            <Link to="/products">iPad Mini</Link>
            <Link to="/products">AirPods Pro</Link>
          </div>
          <div className="footer-link-items">
            <h2>Service</h2>
            <Link to="/services">Apple Music</Link>
            <Link to="/services">Apple TV+</Link>
            <Link to="/services">Apple Arcade</Link>
            <Link to="/services">iCloud</Link>
            <Link to="/services">Apple Books</Link>
            <Link to="/services">App Store</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Apple Store</h2>
            <Link to="/">매장 찾기</Link>
            <Link to="/">Genius Bar</Link>
            <Link to="/">Today at Apple</Link>
            <Link to="/">Apple Camp</Link>
            <Link to="/">Apple Store App</Link>
            <Link to="/">금융 혜택</Link>
          </div>
          <div className="footer-link-items">
            <h2>Information</h2>
            <Link to="/">Newsroom</Link>
            <Link to="/">Apple 리더쉽</Link>
            <Link to="/">채용 안내</Link>
            <Link to="/">이벤트</Link>
            <Link to="/">Apple 연락처</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Apple
              <i className="fa-brands fa-apple" />
            </Link>
          </div>
          <small className="website-rights">AppStore © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
