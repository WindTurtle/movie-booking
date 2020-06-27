import React from "react";
import "../ModalTrailer/ModalTrailer.scss";
export default function ModalTrailer(props) {
  let { xemChiTiet } = props;
  return (
    <div
      className="modal fade bd-example-modal-lg"
      id={"d" + xemChiTiet.maPhim}
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content" style={{ position: "relative" }}>
          <iframe
            title={xemChiTiet.trailer}
            type="text/html"
            width="100%"
            height="500px"
            src={xemChiTiet.trailer}
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="close__btn" data-dismiss="modal">
            <span className="text-light" style={{ fontSize: 20 }}>
              X
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
