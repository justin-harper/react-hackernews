import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import './css/NewsHeader.css';
import './css/NewsItem.css';
import './css/NewsList.css';
import App from './App';
import './img/grayarrow2x.gif';
import './img/y18.gif';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// import React from 'react';
// import $ from 'jquery';
// import NewsList from './components/NewsList';
// import _ from 'lodash';

// $.ajax({
//   url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
//   dataType: 'json'
// }).then(function (stories) {
//   let detailDeferreds = _(stories.slice(0, 50)).map(function (itemId) {
//     return $.ajax({
//       url: 'https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json',
//       dataType: 'json'
//     });
//   }).value();
//   return $.when.apply($, detailDeferreds);
  
//   }).then(function () {
//     let items = _(arguments).map(function (argument) {
//       return argument[0];
//     }).value();
//     React.render(<NewsList items={items} />, $('#content')[0]);
//   })