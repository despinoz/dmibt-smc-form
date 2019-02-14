import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {
  areaSolicitanteOpc,
  tipoOrdenOpc,
  actividadesOpc,
  solicitudAtencionOpc
} from './validatedFields';

const styles = {
  header: {
    background: '#07436F',
    color: 'white',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  twoFields: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  actividad1: {
    width: '90%'
  },
  icon: {
    width: '10%',
    margin: 'auto'
  },
  fifty: {
    width: '49%'
  },
  register: {
    margin: '20px'
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      sst: '',
      suministro: '',
      areaSolicitante: '',
      tipoOrden: '',
      actividad1: '',
      actividad2: '',
      actividad3: '',
      actividad4: '',
      observacion: '',
      contacto: '',
      telefonoRef: '',
      tipoAtencion: '',
      codigoAtencion: '',
      fechaProg: '',
      horaProg: '',
      horaFinProg: '',
      cantidadActividades: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFixedChange = this.handleFixedChange.bind(this);
    this.addActividad = this.addActividad.bind(this);
    this.saveToFirebase = this.saveToFirebase.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleFixedChange(e) {
    if (e.target.value.length <= 7)
      this.setState({ [e.target.id]: e.target.value });
  }

  addActividad() {
    if (this.state.cantidadActividades < 4)
      this.setState(prevState => {
        return { cantidadActividades: (prevState.cantidadActividades += 1) };
      });
  }

  saveToFirebase() {
    const { db } = this.props;
    const {
      sst,
      suministro,
      areaSolicitante,
      tipoOrden,
      actividad1,
      actividad2,
      actividad3,
      actividad4,
      observacion,
      contacto,
      telefonoRef,
      tipoAtencion,
      codigoAtencion,
      fechaProg,
      horaProg,
      horaFinProg
    } = this.state;
    db.collection('registros')
      .add({
        sst,
        suministro,
        areaSolicitante,
        tipoOrden,
        actividad1,
        actividad2,
        actividad3,
        actividad4,
        observacion,
        contacto,
        telefonoRef,
        tipoAtencion,
        codigoAtencion,
        fechaProg,
        horaProg,
        horaFinProg
      })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  }

  render() {
    const { classes } = this.props;
    const { sst, suministro, cantidadActividades } = this.state;
    return (
      <div>
        <Typography variant="h6" className={classes.header}>
          DMIBT SMC Form
        </Typography>
        <div className={classes.twoFields}>
          <TextField
            id="sst"
            label="SST"
            type="number"
            value={sst}
            className={classes.fifty}
            onChange={this.handleFixedChange}
          />
          <TextField
            id="suministro"
            label="Suministro"
            type="number"
            value={suministro}
            className={classes.fifty}
            onChange={this.handleFixedChange}
          />
        </div>
        <form className={classes.container}>
          <FormControl>
            <InputLabel>Area Solicitante</InputLabel>
            <Select native id="areaSolicitante" onChange={this.handleChange}>
              {areaSolicitanteOpc.map(opc => (
                <option key={opc.value} value={opc.value}>
                  {opc.label}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Tipo Orden</InputLabel>
            <Select native id="tipoOrden" onChange={this.handleChange}>
              {tipoOrdenOpc.map(opc => (
                <option key={opc.value} value={opc.value}>
                  {opc.label}
                </option>
              ))}
            </Select>
          </FormControl>
          <div className={classes.twoFields}>
            <FormControl>
              <InputLabel>Actividad 1</InputLabel>
              <Select
                native
                id="actividad1"
                className={classes.actividad1}
                onChange={this.handleChange}
              >
                {actividadesOpc.map(opc => (
                  <option key={opc.value} value={opc.value}>
                    {opc.label}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Icon
              className={classes.icon}
              onClick={this.addActividad}
              color="primary"
            >
              add_circle
            </Icon>
          </div>
          {cantidadActividades >= 2 && (
            <FormControl>
              <InputLabel>Actividad 2</InputLabel>
              <Select native id="actividad2" onChange={this.handleChange}>
                {actividadesOpc.map(opc => (
                  <option key={opc.value} value={opc.value}>
                    {opc.label}
                  </option>
                ))}
              </Select>
            </FormControl>
          )}
          {cantidadActividades >= 3 && (
            <FormControl>
              <InputLabel>Actividad 3</InputLabel>
              <Select native id="actividad3" onChange={this.handleChange}>
                {actividadesOpc.map(opc => (
                  <option key={opc.value} value={opc.value}>
                    {opc.label}
                  </option>
                ))}
              </Select>
            </FormControl>
          )}
          {cantidadActividades >= 4 && (
            <FormControl>
              <InputLabel>Actividad 4</InputLabel>
              <Select native id="actividad4" onChange={this.handleChange}>
                {actividadesOpc.map(opc => (
                  <option key={opc.value} value={opc.value}>
                    {opc.label}
                  </option>
                ))}
              </Select>
            </FormControl>
          )}
          <TextField
            id="observacion"
            label="Observación"
            onChange={this.handleChange}
          />
          <TextField
            id="contacto"
            label="Contacto"
            onChange={this.handleChange}
          />
          <TextField
            id="telefonoRef"
            label="Teléfono Ref"
            type="number"
            onChange={this.handleChange}
          />
          <div className={classes.twoFields}>
            <FormControl className={classes.fifty}>
              <InputLabel>Tipo Atención</InputLabel>
              <Select native id="tipoAtencion" onChange={this.handleChange}>
                {solicitudAtencionOpc.map(opc => (
                  <option key={opc.value} value={opc.value}>
                    {opc.label}
                  </option>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="codigoAtencion"
              label="Código Atención"
              className={classes.fifty}
              onChange={this.handleChange}
            />
          </div>
          <TextField
            id="fechaProg"
            label="Fecha Prog"
            type="date"
            onChange={this.handleChange}
          />
          <div className={classes.twoFields}>
            <TextField
              id="horaProg"
              type="time"
              label="Hora Prog"
              className={classes.fifty}
              onChange={this.handleChange}
            />
            <TextField
              id="horaFinProg"
              type="time"
              label="Hora Fin Prog"
              className={classes.fifty}
              onChange={this.handleChange}
            />
          </div>
          <Button
            variant="contained"
            size="medium"
            className={classes.register}
            onClick={this.saveToFirebase}
          >
            <SaveIcon />
            Registrar
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(App);
