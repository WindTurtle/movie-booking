import React, { Component } from "react";
import "./News.scss";
export default class News extends Component {
  render() {
    return (
      <section id="news" className="news">
        <div className="container">
          <div id="newsTab">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-24h-tab"
                  data-toggle="pill"
                  href="#pills-24h"
                  role="tab"
                  aria-controls="pills-24h"
                  aria-selected="true"
                >
                  Điện Ảnh 24h
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-review-tab"
                  data-toggle="pill"
                  href="#pills-review"
                  role="tab"
                  aria-controls="pills-review"
                  aria-selected="false"
                >
                  Review
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-promotion-tab"
                  data-toggle="pill"
                  href="#pills-promotion"
                  role="tab"
                  aria-controls="pills-promotion"
                  aria-selected="false"
                >
                  Khuyến Mãi
                </a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-24h"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="tab__content">
                  <div className="row__above row">
                    <div className="row__item col-md-6 col-sm-12">
                      <div className="item__img">
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="https://s3img.vcdn.vn/123phim/2020/05/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
                            alt="hinhanh"
                          />
                        </a>
                      </div>
                      <div className="item__text">
                        <a className="item__title" href="#">
                          American Sniper - Chính nghĩa hay phi nghĩa?
                        </a>
                        <p className="item__description">
                          Trở lại với phiên bản làm lại, liệu Classic Again có
                          thành công như người tiền nhiệm?
                        </p>
                      </div>
                      <div className="item__icon">
                        <div className="icon__social d-inline">
                          <i className="fa fa-thumbs-up" />
                          <span className="count__number">2</span>
                        </div>
                        <div className="icon__social d-inline">
                          <i className="fa fa-comment-alt" />
                          <span className="count__number">0</span>
                        </div>
                      </div>
                    </div>
                    <div className="row__item col-md-6 col-sm-12">
                      <div className="item__img">
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="https://s3img.vcdn.vn/123phim/2020/05/phim-cho-ca-gia-dinh-vui-ve-nhan-dip-le-quoc-te-thieu-nhi-1-6-15905643444860.png"
                            alt="hinhanh"
                          />
                        </a>
                      </div>
                      <div className="item__text">
                        <a className="item__title" href="#">
                          Phim cho cả gia đình vui vẻ nhân dịp lễ Quốc Tế Thiếu
                          Nhi 1/6
                        </a>
                        <p className="item__description">
                          Kịch bản hoàn hảo, diễn xuất tuyệt vời đã khiến bộ
                          phim bội thu gấp 7 lần kinh phí sản xuất.
                        </p>
                      </div>
                      <div className="item__icon">
                        <div className="icon__social d-inline">
                          <i className="fa fa-thumbs-up" />
                          <span className="count__number">0</span>
                        </div>
                        <div className="icon__social d-inline">
                          <i className="fa fa-comment-alt" />
                          <span className="count__number">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row__below row">
                    <div className="row__left col-md-8 col-sm-12">
                      <div className="left__below row">
                        <div className="left__item col-6">
                          <div className="item__img">
                            <img className="img-fluid" src="https://s3img.vcdn.vn/123phim/2020/05/david-fincher-bac-thay-su-dung-visual-effects-15900519940266.png" alt="hinhanh" />
                          </div>
                          <div className="item__text">
                            <a className="item__title" href="#">
                              Vũ trụ Điện ảnh Valiant được Sony đưa lên màn bạc
                              như thế nào?
                            </a>
                            <p className="item__description">
                              Nước cờ đầu tiên mang tên Bloodshot có đủ sức để
                              Sony và Valiant thu hút khán giả?
                            </p>
                          </div>
                          <div className="item__icon">
                            <div className="icon__social d-inline">
                              <i className="fa fa-thumbs-up" />
                              <span className="count__number">5</span>
                            </div>
                            <div className="icon__social d-inline">
                              <i className="fa fa-comment-alt" />
                              <span className="count__number">1</span>
                            </div>
                          </div>
                        </div>
                        <div className="left__item col-6">
                          <div className="item__img">
                            <img className="img-fluid" src="https://s3img.vcdn.vn/123phim/2020/05/mau-sac-anh-huong-den-qua-trinh-xem-phim-cua-ban-nhu-the-nao-15887590668973.png" alt="hinhanh" />
                          </div>
                          <div className="item__text">
                            <a className="item__title" href="#">
                              Công thức nào đã giúp Pixar lấy được cả nụ cười
                              lẫn nước mắt của khán giả?
                            </a>
                            <p className="item__description">
                              Onward sẽ thực sự tiếp nối thành công của những
                              tác phẩm tiền nhiệm?
                            </p>
                          </div>
                          <div className="item__icon">
                            <div className="icon__social d-inline">
                              <i className="fa fa-thumbs-up" />
                              <span className="count__number">1</span>
                            </div>
                            <div className="icon__social d-inline">
                              <i className="fa fa-comment-alt" />
                              <span className="count__number">1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row__right col-md-4 col-sm-12">
                      <ul>
                        <li className="right__item">
                          <a className="item__link" href="#">
                            <div className="item__img">
                              <img src="https://s3img.vcdn.vn/123phim/2020/05/len-nham-xe-cua-ke-bien-thai-phuong-anh-dao-vo-tinh-tro-thanh-nhan-chung-bi-truy-sat-15887406665769.png" alt="hinhanh" />
                            </div>
                            <div className="item__title">
                              Trước khi 'nín thở' với Vùng Đất Câm Lặng II, bạn
                              cần phải biết trước điều gì?
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="#">
                            <div className="item__img">
                              <img src="https://s3img.vcdn.vn/123phim/2020/05/trailer-truyen-thuyet-ve-quan-tien-ngap-tran-bi-an-tu-cau-chuyen-khi-vuon-hiep-nguoi-den-can-benh-co-dan-ong-la-khoi-ngay-15891896054703.png" alt="hinhanh" />
                            </div>
                            <div className="item__title">
                              Khi đế chế 'số một' làng phim kinh dị Blumhouse
                              bắt tay thiên tài tái sáng tạo Kẻ Vô Hình
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="#">
                            <div className="item__img">
                              <img src="https://s3img.vcdn.vn/123phim/2020/05/diem-mat-nhung-phim-viet-cong-pha-phong-chieu-trong-nam-2020-15885662853299.jpg" alt="hinhanh" />
                            </div>
                            <div className="item__title">
                              Đạo diễn siêu phẩm Searching tái xuất trong tác
                              phẩm kinh dị - giật gân Run
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="#">
                            <div className="item__img">
                              <img src="https://s3img.vcdn.vn/123phim/2020/05/nhung-yeu-to-dang-mong-doi-cua-bang-chung-vo-hinh-15891853448581.png" alt="hinhanh" />
                            </div>
                            <div className="item__title">
                              'Đế chế' mafia nào từng khuynh đảo màn ảnh bạc?
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="readMore">
                    <button className="btn btn__readmore">XEM THÊM</button>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-review"
                role="tabpanel"
                aria-labelledby="pills-review-tab"
              >
                <div className="tab__content">
                  <div className="row__above row">
                    <div className="row__item col-md-6 col-sm-12">
                      <div className="item__img">
                        <a href="#">
                          <img className="img-fluid" src="https://s3img.vcdn.vn/123phim/2020/04/stormbreaker-va-mjolnir-loai-vu-khi-nao-cua-thor-manh-hon-15876330404511.png" alt="hinhanh" />
                        </a>
                      </div>
                      <div className="item__text">
                        <a className="item__title" href="#">
                          [Review] Stormbreaker và Mjolnir: Loại vũ khí nào của Thor mạnh hơn?
                        </a>
                        <p className="item__description">
                          Tác phẩm mới nhất của Marvel tiếp tục là câu chuyện hài
                          hước và cảm xúc về tình cảm gia đình.
                        </p>
                      </div>
                      <div className="item__icon">
                        <div className="icon__social d-inline">
                          <i className="fa fa-thumbs-up" />
                          <span className="count__number">2</span>
                        </div>
                        <div className="icon__social d-inline">
                          <i className="fa fa-comment-alt" />
                          <span className="count__number">0</span>
                        </div>
                      </div>
                    </div>
                    <div className="row__item col-md-6 col-sm-12">
                      <div className="item__img">
                        <a href="#">
                          <img className="img-fluid" src="https://s3img.vcdn.vn/123phim/2020/03/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925415754.jpg" alt="hinhanh" />
                        </a>
                      </div>
                      <div className="item__text">
                        <a className="item__title" href="#">
                          [Review] Kẻ Vô Hình - Còn gì đáng sợ hơn kẻ giết người
                          bệnh hoạn vô hình?
                        </a>
                        <p className="item__description">
                          Phiên bản hiện đại của The Invisible Man là một trong
                          những phim kinh dị xuất sắc nhất năm nay.
                        </p>
                      </div>
                      <div className="item__icon">
                        <div className="icon__social d-inline">
                          <i className="fa fa-thumbs-up" />
                          <span className="count__number">0</span>
                        </div>
                        <div className="icon__social d-inline">
                          <i className="fa fa-comment-alt" />
                          <span className="count__number">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row__below row">
                    <div className="row__left col-md-8">
                      <div className="left__below row">
                        <div className="left__item col-6">
                          <div className="item__img">
                            <img
                              className="img-fluid"
                              src="https://s3img.vcdn.vn/123phim/2020/03/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843500427339.jpg"
                              alt="hinhanh"
                            />
                          </div>
                          <div className="item__text">
                            <a className="item__title" href="#">
                              [Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là
                              đây chứ đâu xa
                            </a>
                            <p className="item__description">
                              Brahms: The Boy II có những màn hù dọa ấn tượng
                              nhưng cái kết lại không tương xứng với phần mở đầu
                              hứa hẹn.
                            </p>
                          </div>
                          <div className="item__icon">
                            <div className="icon__social d-inline">
                              <i className="fa fa-thumbs-up" />
                              <span className="count__number">5</span>
                            </div>
                            <div className="icon__social d-inline">
                              <i className="fa fa-comment-alt" />
                              <span className="count__number">1</span>
                            </div>
                          </div>
                        </div>
                        <div className="left__item col-6">
                          <div className="item__img">
                            <img
                              className="img-fluid"
                              src="https://s3img.vcdn.vn/123phim/2020/02/review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi-15821907845631.jpg"
                              alt="hinhanh"
                            />
                          </div>
                          <div className="item__text">
                            <a className="item__title" href="#">
                              [Review] Nhím Sonic - Cười thả ga cùng chàng nhím
                              siêu thanh lầy lội
                            </a>
                            <p className="item__description">
                              Nhờ tiếp thu ý kiến của fan mà Nhím Sonic đã trở
                              thành một trong những bộ phim chuyển thể từ trò
                              chơi điện tử xuất sắc nhất.
                            </p>
                          </div>
                          <div className="item__icon">
                            <div className="icon__social d-inline">
                              <i className="fa fa-thumbs-up" />
                              <span className="count__number">1</span>
                            </div>
                            <div className="icon__social d-inline">
                              <i className="fa fa-comment-alt" />
                              <span className="count__number">1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row__right col-md-4 col-sm-12">
                      <ul>
                        <li className="right__item">
                          <a className="item__link" href="#">
                            <div className="item__img">
                              <img src="https://s3img.vcdn.vn/123phim/2020/02/review-birds-of-prey-15809871977193.jpg" alt="hinhanh" />
                            </div>
                            <div className="item__title">
                              [Review] Tháng Năm Hạnh Phúc Ta Từng Có - Buông bỏ
                              chưa bao giờ là việc dễ dàng
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="#">
                            <div className="item__img">
                              <img src="https://s3img.vcdn.vn/123phim/2020/02/review-bi-mat-cua-gio-cau-chuyen-tinh-nguoi-duyen-ma-day-nuoc-mat-15806427358700.jpg" alt="hinhanh" />
                            </div>
                            <div className="item__title">
                              [Review] Sắc Đẹp Dối Trá - Hương Giang kể chuyện
                              đời mình qua phim ảnh
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="#">
                            <div className="item__img">
                              <img src="https://s3img.vcdn.vn/123phim/2020/01/gai-gia-lam-chieu-3-cuoc-chien-me-chong-nang-dau-cua-gioi-sieu-giau-xu-hue-15798623446424.jpg" alt="hinhanh" />
                            </div>
                            <div className="item__title">
                              [Review] Birds of Prey - Màn lột xác hoành tráng
                              của Harley Quinn và DC
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="#">
                            <div className="item__img">
                              <img src="https://s3img.vcdn.vn/123phim/2020/01/30-chua-phai-tet-phim-vong-lap-thoi-gian-thuong-hieu-viet-15797534706701.jpg" alt="hinhanh" />
                            </div>
                            <div className="item__title">
                              [Review] Bí Mật Của Gió - Câu chuyện “tình người
                              duyên ma” đầy nước mắt
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="readMore">
                    <button className="btn btn__readmore">XEM THÊM</button>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-promotion"
                role="tabpanel"
                aria-labelledby="pills-promotion-tab"
              >
                <div className="tab__content">
                  <div className="row__above row">
                    <div className="row__item col-md-6 col-sm-12">
                      <div className="item__img">
                        <a href="#">
                          <img className="img-fluid" src="http://s3img.vcdn.vn/123phim/2017/06/bhd-star-gia-ve-45k-tai-bhd-star-quang-trung-14974982146099.jpg" alt="hinhanh" />
                        </a>
                      </div>
                      <div className="item__text">
                        <a className="item__title" href="#">
                          CGV &amp; BHD Star – Mua 2 vé tính tiền 1 khi thanh
                          toán qua ZaloPay
                        </a>
                        <p className="item__description">
                          Áp dụng cho khách hàng mới của ZaloPay khi mua tại CGV
                          HOẶC BHD Star các suất chiếu Thứ 6, Thứ 7, Chủ Nhật.
                        </p>
                      </div>
                      <div className="item__icon">
                        <div className="icon__social d-inline">
                          <i className="fa fa-thumbs-up" />
                          <span className="count__number">2</span>
                        </div>
                        <div className="icon__social d-inline">
                          <i className="fa fa-comment-alt" />
                          <span className="count__number">0</span>
                        </div>
                      </div>
                    </div>
                    <div className="row__item col-md-6 col-sm-12">
                      <div className="item__img">
                        <a href="#">
                          <img className="img-fluid" src="https://s3img.vcdn.vn/123phim/2017/09/bhd-star-goi-phim-trang-yeu-thuong-15065869628551.jpg" alt="hinhanh" />
                        </a>
                      </div>
                      <div className="item__text">
                        <a className="item__title" href="#">
                          Mua vé phim BHD Star - Nhận ngay Hoàn Tiền 20%
                        </a>
                        <p className="item__description">
                          Mua vé BHD Star thả ga, nhận ngay hoàn tiền xả láng
                          20% khi thanh toán qua ZaloPay.
                        </p>
                      </div>
                      <div className="item__icon">
                        <div className="icon__social d-inline">
                          <i className="fa fa-thumbs-up" />
                          <span className="count__number">0</span>
                        </div>
                        <div className="icon__social d-inline">
                          <i className="fa fa-comment-alt" />
                          <span className="count__number">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row__below row">
                    <div className="row__left col-md-8">
                      <div className="left__below row">
                        <div className="left__item col-6">
                          <div className="item__img">
                            <img
                              className="img-fluid"
                              src="http://s3img.vcdn.vn/123phim/2017/05/bhd-uu-dai-grab-14943206847693.jpg"
                              alt="hinhanh"
                            />
                          </div>
                          <div className="item__text">
                            <a className="item__title" href="#">
                              Chào bạn mới - BHD Star Mua 2 Tính Tiền 1
                            </a>
                            <p className="item__description">
                              Ưu đãi cực chất: Mua 2 vé BHD Star chỉ cần trả
                              tiền 1 vé khi thanh toán qua ZaloPay.
                            </p>
                          </div>
                          <div className="item__icon">
                            <div className="icon__social d-inline">
                              <i className="fa fa-thumbs-up" />
                              <span className="count__number">5</span>
                            </div>
                            <div className="icon__social d-inline">
                              <i className="fa fa-comment-alt" />
                              <span className="count__number">1</span>
                            </div>
                          </div>
                        </div>
                        <div className="left__item col-6">
                          <div className="item__img">
                            <img
                              className="img-fluid"
                              src="http://s3img.vcdn.vn/123phim/2017/06/zalo-pay-phim-hot-gia-hoi-14975106730615.jpg"
                              alt="hinhanh"
                            />
                          </div>
                          <div className="item__text">
                            <a className="item__title" href="#">
                              Vui Tết cùng ZaloPay - CGV Mua 1 Tặng 1
                            </a>
                            <p className="item__description">
                              Ưu đãi mua 1 tặng 1 vé xem phim tại CGV cho khách
                              hàng mới khi thanh toán bằng ZaloPay.
                            </p>
                          </div>
                          <div className="item__icon">
                            <div className="icon__social d-inline">
                              <i className="fa fa-thumbs-up" />
                              <span className="count__number">1</span>
                            </div>
                            <div className="icon__social d-inline">
                              <i className="fa fa-comment-alt" />
                              <span className="count__number">1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row__right col-md-4 col-sm-12">
                      <ul>
                        <li className="right__item">
                          <a className="item__link" href="#">
                            <div className="item__img">
                              <img src="http://s3img.vcdn.vn/123phim/2017/03/galaxy-hoa-than-sieu-nhan-nhan-nhieu-uu-dai-14906148212096.jpg" alt="hinhanh" />
                            </div>
                            <div className="item__title">
                              CGV – 79.000Đ/vé cuối tuần khi thanh toán bằng
                              ZaloPay!
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="#">
                            <div className="item__img">
                              <img src="http://s3img.vcdn.vn/123phim/2017/06/123phim-ddc-mua-ve-online-nhan-qua-lien-tay-14969118909584.jpg" alt="hinhanh" />
                            </div>
                            <div className="item__title">
                              [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt
                              11k/vé Anh Trai Yêu Quái
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="#">
                            <div className="item__img">
                              <img src="http://s3img.vcdn.vn/123phim/2017/06/ddc-xem-phim-gia-re-truoc-10h-va-sau-22h-14968911599222.jpg" alt="hinhanh" />
                            </div>
                            <div className="item__title">
                              [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt
                              vé Pháp Sư Mù: Ai Chết Giơ Tay
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="#">
                            <div className="item__img">
                              <img src="http://s3img.vcdn.vn/123phim/2017/06/ff4a2d1afce265cae66b8872197f1e5e.png" alt="hinhanh" />
                            </div>
                            <div className="item__title">
                              [Mega GS] Một đoá hoa thay ngàn lời yêu
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="readMore">
                    <button className="btn btn__readmore">XEM THÊM</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
