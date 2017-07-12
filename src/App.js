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
      loading: true,     
    }    
    this.getStuff = _.debounce(this.getStuff, 10000);    
  }  

  getStuff() {
    this.setState({ loading: true, items: null});
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
        ix.setState({
          items: items,
          loading: false,          
        });
      });
  }
  tick() {               
      this.getStuff();
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));    
    this.setTimer();
  }

  componentDidMount() {
    this.getStuff();
  }

  handleScroll(event) {
      clearInterval(this.timer);
      this.setTimer();
  }

  setTimer() {        
    this.timer = setInterval(this.tick.bind(this), 300000);//10000);//300000);
    console.log(this.timer);
  }

  render() {
    if(this.state.loading) {
      return (
        <div className="app-Loading"><h1>LOADING...</h1></div>
      );
    }
    else {     
      return (
        <div className="App">
          <NewsList items={this.state.items} />
        </div>
      );
    }
  }
}

export default App;
