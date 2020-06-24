import { XEM_CHI_TIET } from "../types/QuanLyPhimTypes";

const initialState = {
  thongTinEdit: {
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    hinhAnh: "",
    trailer: "",
    moTa: "",
    ngayKhoiChieu: "",
    maNhom: "",
    danhGia: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case XEM_CHI_TIET: {
      state.thongTinEdit = action.values;
      return { ...state };
    }
    default:
  }
  return { ...state };
};
