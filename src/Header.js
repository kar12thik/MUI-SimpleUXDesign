import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginBottom: 10
  },
  typographyStyle: {
    flex: 1
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography className={classes.typographyStyle}>
          Karthikeyan Subramanian
        </Typography>
        <AppleIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
