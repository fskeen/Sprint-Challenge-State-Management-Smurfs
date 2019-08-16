import React from "react";
import "./App.css";

import { connect } from 'react-redux';
import { titleFX, getData, postData } from './actions'
import Smurf from "./components/Smurf";
import AddSmurfForm from "./components/AddSmurfForm";

function App ({titleFX, getData, title, error, smurfs, isLoading, addingSmurf, postData}) {

  return (
    <div className="App">
      <h1>{title}</h1>
      <button onClick={() => titleFX()}>Change title</button>

      <AddSmurfForm postData={postData} addingSmurf={addingSmurf} smurfs={smurfs} />

      {console.log(smurfs)}
      <button onClick={() => getData()}>Get some smurfs!</button>
      {!smurfs ? <p>Loading!</p> :
        smurfs.map(smurf => <Smurf key={smurf.id} smurfs={smurfs}/>)}

    </div>
  );
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    title: state.title,
    error: state.error,
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    addingSmurf: state.addingSmurf
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  { titleFX, getData, postData }
)(App)

export default ConnectedApp;
