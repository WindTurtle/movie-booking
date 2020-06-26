import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
export default function CardCinema(props) {
  const classes = useStyles();
  let { cumRap } = props;
  const renderDanhSachCumRap = () => {
    return cumRap.lstCumRap.map((item, index) => {
      return (
        <div
          className="col-md-3 col-sm-6 mb-4"
          style={{
            padding: "20px",
          }}
          key={index}
        >
          <Card
            className={classes.root}
            style={{
              border: "none",
              boxShadow: "0 10px 40px 0 rgba(16, 36, 94, 0.2)",
              minHeight: "300px",
            }}
          >
            <CardActionArea style={{ outline: "none" }}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://www.jeanmineurmediavision.nl/wp-content/uploads/2019/08/cinema-slide.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  // style={{ color: "#fff" }}
                >
                  {item.tenCumRap}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  // style={{ color: "#fff" }}
                >
                  {item.diaChi}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      );
    });
  };
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">{renderDanhSachCumRap()}</div>
      </div>
    </Fragment>
  );
}
