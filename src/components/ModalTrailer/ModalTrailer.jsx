import React from "react";
import "../ModalTrailer/ModalTrailer.scss";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";

export default function ModalTrailer({ trailer, maPhim, open, handleToggle }) {
  const getId = (url) => {
    if (!url) return null;
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };
  const video_id = getId(trailer);
  const style = {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleToggle}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={style}>
          <div className="position-relative w-100 h-100">
            <div className="d-flex justify-content-center align-items-center">
              <iframe
                title={maPhim}
                width="100%"
                height={`${window.innerHeight}px`}
                src={`https://www.youtube.com/embed/${video_id}`}
                frameBorder={0}
                allowFullScreen
              />
            </div>
            <div
              style={{
                fontSize: 50,
                fontWeight: "bold",
                top: 2,
                right: 10,
                cursor: "pointer",
                border: "5px solid #fff",
                borderRadius: "50%",
                width: 50,
                height: 50,
                zIndex: "9000",
              }}
              className="position-absolute d-flex justify-content-center align-items-center text-white p-6"
              onClick={() => handleToggle(false)}
            >
              X
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
