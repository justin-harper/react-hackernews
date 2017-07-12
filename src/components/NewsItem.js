import React from 'react';
import url from 'url';
import moment from 'moment';
import greyArrow from '../img/grayarrow2x.gif';
import '../css/NewsItem.css';


class NewsItem extends React.Component {
  getDomain() {

    if (this.props.item.url) {
      return (
        url.parse(this.props.item.url).hostname
        );
    }
    return;
  };

  getSubText() {
    return (
      <span>
      <span className="newsItem-subtext">
        {this.props.item.score} points <nbsp />
        </span>
        <span className="newsItem-By">by <nbsb/>
        </span>
        <a className="newsItem-User" href={'https://news.ycombinator.com/userid?=' + this.props.item.by}>
          {this.props.item.by}
        </a>
        <span className="newsItem-time">
          {" " + moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
        </span>
      </span>
    );
  };

  getTitle() {
    return (
      <span className="newsItem-title">
        <a className="newsItem-titileLink" href={this.props.item.url}>{" " +this.props.item.title}</a>
        <span className="newsItem-domain">({this.getDomain()})</span>
      </span>
    );
  };

  getCommentLink() {
    let commentText = 'discuss';
    if (this.props.item.kids && this.props.item.kids.length) {
      commentText = this.props.item.kids.length + ' comments';
    }
    return (
      <a className="newsItem-id" href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>{commentText}</a>
    );
  };

  getRank() {
    return (
      <span className="newsItem-rank">
        {this.props.rank}.
      </span>
    )
  }

  getVote() {
    return (
      <span className="newsItem-vote">
        <a href={'https://news.ycombinator.com/vote?for=' + this.props.item.id + '&dir=up&whence=news'}>
          <img src={greyArrow} width="10" alt="arrow"/>
        </a>
      </span>
    );
  }

  render() {
    return (
      <div className="newsItem-Outer">
        <div className="newsItem">
          <div>
            {this.getRank()}
            {this.getVote()}
            <span className="newsItem-itemText">
              {this.getTitle()}
            </span>
          </div>
            {this.getSubText()}
            <p></p>
        </div>
      </div>
    );
  }
};

export default NewsItem;