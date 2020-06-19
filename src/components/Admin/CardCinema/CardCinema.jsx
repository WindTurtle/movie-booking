import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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
        <Card className={`col-4 mb-4 mr-3 ${classes.root}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://www.jeanmineurmediavision.nl/wp-content/uploads/2019/08/cinema-slide.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.tenCumRap}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.diaChi}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
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
