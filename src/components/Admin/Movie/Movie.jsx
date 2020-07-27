import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import "./Movie.scss";
import AddMovieModal from "../AddMovieModal/AddMovieModal";
import EditMovieModal from "../EditMovieModal/EditMovieModal";
import { qLyAdminService } from "../../../services/QuanLyAdminService";
import { qLyPhimService } from "../../../services/QuanLyPhimServices";
import swal from "sweetalert";
import UploadImageMovieModal from "../UploadImageMovieModal/UploadImageMovieModal";

var moment = require("moment");
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 600,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#e1f5fe",
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export default function Movie() {
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layDanhSachPhim()
      .then((result) => {
        setDanhSachPhim(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  const renderDanhSachPhim = () => {
    return danhSachPhim
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((phim, index) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={phim.maPhim}>
            <TableCell>{phim.maPhim}</TableCell>
            <TableCell>{phim.tenPhim}</TableCell>
            <TableCell>{phim.biDanh}</TableCell>
            <TableCell>
              <img
                style={{ width: 70, height: 90 }}
                src={phim.hinhAnh}
                alt={phim.hinhAnh}
              ></img>
            </TableCell>
            <TableCell>{phim.trailer}</TableCell>
            <TableCell>
              <div className="text__description--ellipse">{phim.moTa}</div>
            </TableCell>
            <TableCell>
              {moment(phim.ngayKhoiChieu).format("DD/MM/yyyy")}
            </TableCell>
            <TableCell>{phim.danhGia}</TableCell>
            <TableCell>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="edit-action mr-2">
                  <i
                    style={{
                      cursor: "pointer",
                      color: "#60c5ef",
                    }}
                    className="fa fa-edit"
                    data-toggle="modal"
                    data-target={`#d${phim.maPhim}`}
                  ></i>
                </div>
                <EditMovieModal phim={phim} />
                <div className="upload-action mr-2">
                  <i
                    style={{
                      cursor: "pointer",
                      color: "#55c934",
                    }}
                    className="fa fa-file-image"
                    data-toggle="modal"
                    data-target={`#du${phim.maPhim}`}
                  ></i>
                </div>
                <UploadImageMovieModal phim={phim} />
                <div className="delete-action">
                  <i
                    style={{ cursor: "pointer", color: "#fb4226" }}
                    className="fa fa-trash-alt"
                    onClick={() => {
                      swal({
                        title: "Bạn chắc chứ?",
                        text: `Xoá phim ${phim.tenPhim}`,
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          qLyAdminService
                            .xoaPhim(phim.maPhim)
                            .then((res) => {
                              swal({
                                title: "Xóa phim thành công",
                                icon: "success",
                                button: "OK",
                              });
                              qLyPhimService
                                .layDanhSachPhim()
                                .then((result) => {
                                  setDanhSachPhim(result.data);
                                })
                                .catch((err) => {
                                  console.log(err.response.data);
                                });
                            })
                            .catch((err) => {
                              swal({
                                title: "Xóa không thành công",
                                icon: "warning",
                                button: "OK",
                              });
                            });
                        }
                      });
                    }}
                  ></i>
                </div>
              </div>
            </TableCell>
          </TableRow>
        );
      });
  };
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper className={classes.root}>
      <button
        className="btnAdd"
        data-toggle="modal"
        data-target="#addMovieModal"
        style={{ outline: "none" }}
      >
        <i className="fa fa-plus"></i>
      </button>
      <AddMovieModal />
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Mã phim</StyledTableCell>
              <StyledTableCell>Tên phim</StyledTableCell>
              <StyledTableCell>Bí danh</StyledTableCell>
              <StyledTableCell>Hình ảnh</StyledTableCell>
              <StyledTableCell>Trailer</StyledTableCell>
              <StyledTableCell>Mô tả</StyledTableCell>
              <StyledTableCell>Ngày khởi chiếu</StyledTableCell>
              <StyledTableCell>Đánh giá</StyledTableCell>
              <StyledTableCell>Thao tác</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderDanhSachPhim()}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={danhSachPhim.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
