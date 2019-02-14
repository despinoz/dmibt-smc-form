import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

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
  constructor() {
    super();
    this.state = {
      sst: '',
      suministro: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFixedChange = this.handleFixedChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleFixedChange(e) {
    if (e.target.value.length <= 7)
      this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    const { classes } = this.props;
    const { sst, suministro } = this.state;
    return (
      <div>
        <Typography variant="h6" className={classes.header}>
          DMIBT SMC Form
        </Typography>
        <TextField
          id="sst"
          label="SST"
          type="number"
          value={sst}
          onChange={this.handleFixedChange}
        />
        <TextField
          id="suministro"
          label="Suministro"
          type="number"
          value={suministro}
          onChange={this.handleFixedChange}
        />
        <br />
        <button onClick={() => console.log(this.state)}>REGISTRAR</button>
      </div>
    );
  }
}

export default withStyles(styles)(App);
