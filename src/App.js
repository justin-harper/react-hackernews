import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsItem from './components/NewsItem'
import $ from 'jquery';
import _ from 'lodash';
import NewsList from './components/NewsList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      loading: true
    }    
  }

  getStuff() {
    let ix = this;
    $.ajax({
        url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
        dataType: 'json'
      }).then(function (stories) {
        let detailDeferreds = _(stories.slice(0, 50)).map(function (itemId) {
          return $.ajax({
            url: 'https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json',
            dataType: 'json'
          });
        }).value();
        return $.when.apply($, detailDeferreds);
    
      }).then(function () {
        let items = _(arguments).map(function (argument) {
          return argument[0];
        }).value();
        console.log(items);
        ix.setState({
          items: items,
          loading: false
        });
        //console.log(this.state);
      })
    
  }

  componentDidMount() {
    console.log("GetStuff");
    this.getStuff();
  }  

  render() {
    if(this.state.loading) {
      return (
        <div><h1>LOADING...</h1></div>
      );
    }
    else {
      console.log("LOL");
      return (
        <div className="App">
          <NewsList items={this.state.items} />
        </div>
      );
    }  
  }
}

export default App;





