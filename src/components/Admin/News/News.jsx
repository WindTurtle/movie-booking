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
import AddNewsModal from "../AddNewsModal/AddNewsModal";
import "./News.scss";
import EditNewsModal from "../EditNewsModal/EditNewsModal";
import { qLyAdminService } from "../../../services/QuanLyAdminService";
import { qLyPhimService } from "../../../services/QuanLyPhimServices";
import swal from "sweetalert";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "100%",
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

export default function News() {
  let [listTinTuc, setTinTuc] = useState([]);

  useEffect(() => {
    qLyPhimService
      .layTinTuc()
      .then((result) => {
        setTinTuc(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const xoaTinTuc = (id) => {
    qLyAdminService
      .xoaTinTuc(id)
      .then((res) => {
        swal({
          title: "Xóa tin thành công",
          icon: "success",
          button: "OK",
        });
        qLyPhimService
          .layTinTuc()
          .then((result) => {
            setTinTuc(result.data);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      })
      .catch((err) => {
        swal({
          title: err.response.data,
          text: "Xóa không thành công",
          icon: "warning",
          button: "OK",
        });
      });
  };
  const renderDSTinTuc = () => {
    return listTinTuc
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((tinTuc, index) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={tinTuc.id}>
            <TableCell>{tinTuc.id}</TableCell>
            <TableCell>
              <div className="news__description">{tinTuc.title}</div>
            </TableCell>
            <TableCell>
              <div className="news__description">{tinTuc.description1}</div>
            </TableCell>
            <TableCell>
              <div className="news__description">{tinTuc.description2}</div>
            </TableCell>
            <TableCell>
              <div className="news__description">{tinTuc.description3}</div>
            </TableCell>
            <TableCell>
              <img
                src={tinTuc.image1}
                style={{ width: "70px", height: "50px" }}
                alt={tinTuc.image1}
              />
            </TableCell>
            <TableCell>
              <img
                src={tinTuc.image2}
                style={{ width: "70px", height: "50px" }}
                alt={tinTuc.image2}
              />
            </TableCell>
            <TableCell>
              <img
                src={tinTuc.image3}
                style={{ width: "70px", height: "50px" }}
                alt={tinTuc.image3}
              />
            </TableCell>
            <TableCell>{tinTuc.author}</TableCell>
            <TableCell>{tinTuc.dayupload}</TableCell>
            <TableCell>{tinTuc.likes}</TableCell>
            <TableCell>{tinTuc.shares}</TableCell>
            <TableCell>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="edit-action">
                  <i
                    style={{
                      cursor: "pointer",
                      color: "#60c5ef",
                    }}
                    className="fa fa-edit"
                    data-toggle="modal"
                    data-target={`#d${tinTuc.id}`}
                  ></i>
                </div>
                <EditNewsModal tinTuc={tinTuc} />
                <div className="delete-action">
                  <i
                    style={{ cursor: "pointer", color: "#fb4226" }}
                    className="fa fa-trash-alt"
                    onClick={() => {
                      swal({
                        title: "Bạn chắc chứ?",
                        text: `Xoá tin này`,
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          xoaTinTuc(tinTuc.id);
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
        data-target="#addNewsModal"
        style={{ outline: "none" }}
      >
        <i className="fa fa-plus"></i>
      </button>
      <AddNewsModal />
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Tựa đề</StyledTableCell>
              <StyledTableCell>Mô tả 1</StyledTableCell>
              <StyledTableCell>Mô tả 2</StyledTableCell>
              <StyledTableCell>Mô tả 3</StyledTableCell>
              <StyledTableCell>Hình ảnh 1</StyledTableCell>
              <StyledTableCell>Hình ảnh 2</StyledTableCell>
              <StyledTableCell>Hình ảnh 3</StyledTableCell>
              <StyledTableCell>Người đăng</StyledTableCell>
              <StyledTableCell>Ngày đăng</StyledTableCell>
              <StyledTableCell>Like</StyledTableCell>
              <StyledTableCell>Share</StyledTableCell>
              <StyledTableCell>Thao tác</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderDSTinTuc()}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={listTinTuc.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
