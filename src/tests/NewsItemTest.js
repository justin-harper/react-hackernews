import $ from 'jquery';
import NewsItem from '../components/NewsItem';
import React from 'react';

$.ajax({
  url: '/json/items.json'
}).then(function (items) {
  console.lgo('items', items);
  React.render(<NewsItem item={items[0]} rank={1} />, $(#'content')[0]);
});