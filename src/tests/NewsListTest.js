import $ from 'jquery';
import NewsList from '../components/NewsList';
import React from 'react';

$.ajax({
  url: '/json/items.json'
}).then(function (items) {
  React.render(<NewsList items={items} />, $('#content')[0]);
});