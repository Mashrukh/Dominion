import React from 'react';
import './index.css';
import logo from './logo.svg';
import './App.css';

import Board from './components/Board';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      boardData: null
  };
  }
  async fetchData() {
    const url = "http://localhost:9000/testAPI";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({data: data});
    this.setState({loading: false});
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    {
      if(this.state.loading || !this.state.data) {
        return <div>loading...</div>
      }
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Friday</h1>
        </div>
        <div className="background">
          <Board data={this.state.data}></Board>
        </div>
      </div>
    );
  }
}

export default App;
