import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import headerBackground from '../../media/header/001-background.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    background: '#8ea293',
    color: 'black',
  },
  title: {
    flexGrow: 1,
  },
  navBar:{
    textAlign: 'center',
  },
  toolBar:{
    width: '60%',
    margin: 'auto',
  }
}));

const headerImage = {
  img: headerBackground,
  title: 'Header Image',
  author: 'anonymous',
};

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
            <Grid container spacing={3} justify="center" alignItems="center">
              <Grid item xs={4}>
                <img src={headerImage.img} alt={headerImage.title} width={'100%'} height={120}/>
              </Grid>
              <Grid item xs={8}>
                <Button color="inherit">Iniciar sesion</Button>
                <Button color="inherit">Regístrate</Button>
              </Grid>
            
              <Grid item xs={6} sm = {3} className={classes.navBar} >
                <Button color="inherit">Inicio</Button>
              </Grid>

              <Grid item xs={6} sm = {3} className={classes.navBar} >
                <Button color="inherit">Productos</Button>
              </Grid>

              <Grid item xs={6} sm = {3} className={classes.navBar} >
                <Button color="inherit">Sorteos</Button>
              </Grid>

              <Grid item xs={6} sm = {3} className={classes.navBar} >
                <Button color="inherit">About us</Button>
              </Grid>

            </Grid>
            
          
            </Toolbar>
        </AppBar>
        </div>
    );
};

export default Header;