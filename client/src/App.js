import React from 'react';
import axios from 'axios';
import { PlayerList } from './components/PlayerList'
import './App.css';
import { SearchForm } from './components/SearchForm';

class App extends React.Component {
  constructor (){
    super()
    this.state = {
      players: [],
      searchTerm: ''
    }
  };

  handleSearch = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  componentDidMount(){
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => this.setState({
        players: res.data
      }))
    console.log(this.state.players)
  }

  render(){
    return (
      <div style={{padding: '1% 2%'}}>
        <SearchForm onChange={this.handleSearch} />
        <PlayerList searchTerm={this.state.searchTerm}players={this.state.players} />
      </div>
    );
  }
}

export default App;
