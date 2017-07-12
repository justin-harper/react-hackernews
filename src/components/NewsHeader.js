import React from 'react';
import _ from 'lodash';
import y18 from '../img/y18.gif'
import '../css/NewsHeader.css';


class NewsHeader extends React.Component {
  getLogin() {
    return (
      // <div className="newsHeader-login">
      //   {'|'} {' '}
      //   <a className="newsheader-textLink" href="https://news.ycombinator.com/login?whence=news">login</a>
      // </div>
      <div></div>
    );
  };

  getLogo() {
    return (
      <div className="newsHeader-logo">
        <a href="https://www.ycombinator.com"><img src={y18} alt="Y Combinator"/></a>
      </div>
    );
  };

  getNav() {
    let navLinks = [
      {
        name: 'new',
        url: 'newest'
      },
      {
        name: 'comments',
        url: 'newcomments'
      },
      {
        name: 'show',
        url: 'show'
      },
      {
        name: 'ask',
        url: 'ask'
      },
      {
        name: 'jobs',
        url: 'jobs'
      },
      {
        name: 'submit',
        url: 'submit'
      },
    ];

    return (
      <div className="newsHeader-nav">
        {" |"}
        {_(navLinks).map(function (navLink) {
          return (
            <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={'https://news.ycombinator.com/' + navLink.url}>
              {navLink.name}
            </a>
          );
        }).value()}
      </div>
    );
  }

  getTitle() {
    return (
      <div className="newsHeader-title">
        <a className="newsHeader-textLink" href="https://news.ycombinator.com">Hacker News</a>
      </div>
    );
  }

  render() {
    return (
      <div className="newsHeader">
        {this.getLogo()}
        {this.getTitle()}
        {this.getNav()}
        {this.getLogin()}
      </div>
    );
  }
}

export default NewsHeader;