import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardCinema from "../CardCinema/CardCinema";
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
  let { lstHeThongRap, cumRap } = props;
  const renderHeThongRap = () => {
    return lstHeThongRap?.map((rap, index) => {
      return (
        <Tab
          label={rap.tenHeThongRap}
          {...a11yProps(`${index}`)}
          key={index}
          style={{ outline: "none", color: "#333"}}
        ></Tab>
      );
    });
  };
  const renderCumRap = () => {
    return cumRap?.map((cumRap, index) => {
      return (
        <TabPanel value={value} index={index} key={index}>
          <CardCinema cumRap={cumRap} />
        </TabPanel>
      );
    });
  };
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        style={{ backgroundColor: "transparent" }}
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
      {renderCumRap()}
    </div>
  );
}
