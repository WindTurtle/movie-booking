import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardCinema from "../CardCinema/CardCinema";
import SwipeableViews from "react-swipeable-views";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import { qLyPhimService } from "../../services/QuanLyPhimServices";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CinemaSystem(props) {
  let [lstHeThongRap, setHeThongRap] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    qLyPhimService
      .layHeThongRap()
      .then((result) => {
        setHeThongRap(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  let [cumRap, setCumRap] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layCumRapTheoHeThong()
      .then((res) => {
        setCumRap(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  const renderHeThongRap = () => {
    return lstHeThongRap?.map((rap, index) => {
      return (
        <Tab
          label={rap.tenHeThongRap}
          {...a11yProps(`${index}`)}
          key={index}
          style={{ outline: "none", color: "#333", paddingBottom: "35px" }}
        ></Tab>
      );
    });
  };
  const renderCumRap = () => {
    return cumRap?.map((cumRap, index) => {
      return (
        <TabPanel value={value} index={index} key={index} dir={theme.direction}>
          <CardCinema cumRap={cumRap} />
        </TabPanel>
      );
    });
  };
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  if (loading) {
    return <SpinnerLoading />;
  } else {
    return (
      <div className={classes.root} style={{ marginTop: "60px" }}>
        <AppBar
          position="static"
          color="default"
          style={{
            backgroundColor: "#fff",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="simple tabs example"
          >
            {renderHeThongRap()}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
          style={{ backgroundColor: "#333" }}
        >
          {renderCumRap()}
        </SwipeableViews>
      </div>
    );
  }
}
