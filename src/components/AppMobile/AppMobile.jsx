import React, { Component } from "react";
import "./AppMobile.scss";
import OwlCarousel from "react-owl-carousel";
import ScrollAnimation from "react-animate-on-scroll";
export default class AppMobile extends Component {
  render() {
    return (
      <section id="forMobile" className="forMobile background__homeapp">
        <div className="container">
          <div className="forMobile__content">
            <div className="row">
              <div className="forMobile__left col-md-6 col-sm-12">
                <ScrollAnimation animateIn="fadeInLeft">
                  <p className="text__app">
                    Ứng dụng tiện lợi dành cho người yêu điện ảnh
                  </p>
                  <p className="text__description">
                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                    rạp và đổi quà hấp dẫn.
                  </p>
                  <button className="btn__app">
                    App miễn phí - Tải về ngay
                  </button>
                  <p className="text__appversion">
                    Đã có hai phiên bản
                    <a className="appforos__link" href="/#">
                      {" "}
                      iOS
                    </a>
                    {" & "}
                    <a className="appforos__link" href="/#">
                      Android
                    </a>
                  </p>
                </ScrollAnimation>
              </div>
              <div className="forMobile__right col-md-6 col-sm-12">
                <ScrollAnimation animateIn="fadeInRight">
                  <div className="mobile__frame">
                    <img
                      className="img-fluid"
                      src="https://i.ibb.co/smKg7xh/mobile.png"
                      alt="hinhanh"
                    />
                    {/* MOBILE CAROUSEL */}
                    <OwlCarousel
                      nav={false}
                      dots={false}
                      items={1}
                      loop
                      autoplay
                      className="mobileCarousel owl-carousel owl-theme"
                    >
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="https://tix.vn/app/assets/img/icons/slide/slide4.jpg"
                          alt="hinhanh"
                        />
                      </div>
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="https://tix.vn/app/assets/img/icons/slide/slide5.jpg"
                          alt="hinhanh"
                        />
                      </div>
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="https://tix.vn/app/assets/img/icons/slide/slide8.jpg"
                          alt="hinhanh"
                        />
                      </div>
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="https://tix.vn/app/assets/img/icons/slide/slide10.jpg"
                          alt="hinhanh"
                        />
                      </div>
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="https://tix.vn/app/assets/img/icons/slide/slide13.jpg"
                          alt="hinhanh"
                        />
                      </div>
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="https://tix.vn/app/assets/img/icons/slide/slide14.jpg"
                          alt="hinhanh"
                        />
                      </div>
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="https://tix.vn/app/assets/img/icons/slide/slide16.jpg"
                          alt="hinhanh"
                        />
                      </div>
                      <div className="item">
                        <img
                          className="img-fluid"
                          src="https://tix.vn/app/assets/img/icons/slide/slide3.jpg"
                          alt="hinhanh"
                        />
                      </div>
                    </OwlCarousel>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
