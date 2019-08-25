import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
const numberPage = 12;
class App extends Component{
  constructor(){
    super();
    this.state={
      dataGiphy:[],
      paginate: 0,
      disable:true
    }
  }
  componentDidMount(){
    this.loadData();
  }
  loadData =()=>{
    fetch(`http://api.giphy.com/v1/stickers/search?q=pet&limit=${numberPage}&offset=${this.state.paginate}&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB`)
    .then(response=>response.json())
    .then(resp=>this.setState({dataGiphy:resp.data}))
  }  
  changePage =(event)=>{
    const id = event.target.id;
    let page = id ==='prev' ? this.state.paginate - numberPage : this.state.paginate + numberPage;
    this.setState({
      paginate: page,
      disable: page === 0 ? true :false
    }, () => this.loadData());
  }
  render(){
    const { dataGiphy } = this.state;
    return (
      <div className="App">
        <h1>My Giphy</h1>
        <button id="prev" disabled={this.state.disable} onClick={this.changePage}>Prev Page</button>
        <button id="next" onClick={this.changePage}>Next Page</button>
        <CardList giphy={dataGiphy} />
      </div>
    );
  }
}
export default App;
