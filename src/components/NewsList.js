import React from 'react';
import NewsHeader from './NewsHeader';
import NewsItem from './NewsItem';
import _ from 'lodash';

class NewsList extends React.Component {
  getMore() {
    return (
      <div className="newsList-more">
        <a className="newsList-moreLink" href="https://news.ycombinator.com/news?p=2">More</a>
      </div>
    );
  };

  render() {
    return (
      <div className="newsList">
        <NewsHeader />
        <div className="newsList-items">
          {_(this.props.items).map(function (item, index) {
            return <NewsItem key={item.id} item={item} rank={index + 1} />;
          }.bind(this)).value()}
        </div>
        {this.getMore()}
      </div>
    );
  }
}

export default NewsList;