import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = ({ classes }) =>(
  <div className={classes.root}>
    <CircularProgress className={classes.progress} />
  </div>
);

const styles = theme => ({
  root: {
    width: "100vw",
    textAlign: "center"
  },
  progress: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.secondary.dark
  }
});

export default withStyles(styles)(Loading);
