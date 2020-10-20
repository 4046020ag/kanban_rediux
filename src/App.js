import React from 'react';
import {connect} from 'react-redux';
import Card from "./Card";



function App(props) {


  console.log(props)

  return (
    <div>
      <Card/>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cards: state.cards,
  columns: state.columns
})

export default connect(mapStateToProps)(App);
