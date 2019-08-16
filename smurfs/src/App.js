import React from "react";
import "./App.css";

import { connect } from 'react-redux';
import { titleFX, getData } from './actions'
import Smurf from "./components/Smurf";

function App ({titleFX, getData, title, error, smurfs, isLoading}) {

  return (
    <div className="App">
      <h1>{title}</h1>
      <button onClick={() => titleFX()}>Change title</button>
      {console.log(smurfs)}
      <button onClick={() => getData()}>Get some smurfs!</button>
      {smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)}

    </div>
  );
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    title: state.title,
    error: state.error,
    smurfs: state.smurfs,
    isLoading: state.isLoading
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  { titleFX, getData }
)(App)

export default ConnectedApp;
