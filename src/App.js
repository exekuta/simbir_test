import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  AppBar,
  Container,
  Toolbar,
  Typography,
  } from "@material-ui/core";
import { WeatherDisplay } from "./WeatherDisplay.js";
import "./App.css";

import kazan from './images/kazan.jpg';
import samara from './images/samara.jpg';
import saransk from './images/saransk.jpg';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '3px',
    width: '150px'
  },
  container: {
    marginTop: '40px',
    alignItems: 'flex-start'
  },
  header: {
    color: 'rgb(63,81,181)',
    textTransform: 'uppercase',
    marginBottom: '10px'
  }
}));

const PLACES = [
  { name: "Kazan'", id: "551487", img: kazan },
  { name: "Ulyanovsk", id: "479123", img: kazan },
  { name: "Samara", id: "499099", img: samara },
  { name: "Saransk", id: "498698", img: saransk },
  { name: "Dimitrovgrad", id: "566199", img: kazan },
  { name: "Krasnodar", id: "542420", img: kazan },
];

const App = () => {
  const [activePlace, setActivePlace] = useState(0);

  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className="App-header">
        <Toolbar>
          <Grid container >
            <Grid item xs={2} />
            <Grid item xs={8}>
              <Typography variant="h4" color="inherit">
                Weather Forecast
              </Typography>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container xs={12}>
        <Grid item xs={2} />
        <Grid item container xs={8} className={ classes.container }>
          <Grid item xs={4}>
            <h2 className={ classes.header }>Select a city</h2>
            {
              PLACES.map((place, index) => (
                <div>
                  <Button
                    className={classes.button}
                    variant="contained"
                    key={index}
                    color='primary'
                    onClick={() => {
                      setActivePlace(index);
                    }}
                  >
                    {place.name}
                  </Button>
                </div>
              ))
            }
          </Grid>
          <Grid item xs={8}>
            <WeatherDisplay
              key={activePlace}
              id={PLACES[activePlace].id}
              img={PLACES[activePlace].img}
            />
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}

export default App;
