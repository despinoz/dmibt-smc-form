import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  header: {
    background: '#07436F',
    color: 'white',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h6" className={classes.header}>
          DMIBT SMC Form
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(App);
