import React from 'react';
import url from 'url';
import moment from 'moment';
import greyArrow from '../img/grayarrow2x.gif';

class NewsItem extends React.Component {
  getDomain() {
    
    if (this.props.item.url) {
      return url.parse(this.props.item.url).hostname;
    }
    return;
  };

  getSubText() {
    return (
      <div className="newsItem-subtext">
        {this.props.item.score} points by <a href={'https://news.ycombinator.com/userid?=' + this.props.item.by}>{this.props.item.by}</a>{moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
      </div>
    );
  };

  getTitle() {
    return (
      <div className="newsItem-title">
        <a className="newsItem-titileLink" href={this.props.item.url}>{this.props.item.title}</a>
        <span className="newsItem-domain">({this.getDomain()})</span>
      </div>
    );
  };

  getCommentLink() {
    let commentText = 'discuss';
    if (this.props.item.kids && this.props.item.kids.length) {
      commentText = this.props.item.kids.length + ' comments';
    }
    return (
      <a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>{commentText}</a>
    );
  };

  getRank() {
    return (
      <div className="newsItem-rank">
        {this.props.rank}.
      </div>
    )
  }

  getVote() {
    return (
      <div className="newsItem-vote">
        <a href={'https://news.ycombinator.com/vote?for=' + this.props.item.id + '&dir=up&whence=news'}>
          <img src={greyArrow} width="10" />
        </a>
      </div>
    );
  }

  render() {    
    return (
      <div className="newsItem">
        {this.getRank()}
        {this.getVote()}
        <div className="newsItem-itemText">
          {this.getTitle()}
          {this.getSubText()}        
        </div>  
      </div>
    );  
  }
};

export default NewsItem;