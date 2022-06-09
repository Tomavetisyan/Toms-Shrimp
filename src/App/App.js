import React from 'react';
import './App.css';
import './Colors.css';
import Head from './Head/Head'
import Body from './Body/Body'

class App extends React.Component {
  constructor() {
    super();

    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      body: ''
    };

    this.changeBody = this.changeBody.bind(this);
  }

  changeBody(body){
    this.setState({body:body})
  }

  render(){
    return (
      <div className='app'>
        <Head changeBody={this.changeBody}/>
        <Body currentBody={this.state.body}/>
      </div>
    );
  }

}

export default App;
