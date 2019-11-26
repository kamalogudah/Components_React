import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
      <div className="ui container comments">
        <CommentDetail
          author="Paul"
          timeAgo="Today at 4:45 PM"
          content="Nice Blog Post"
          avatar={faker.image.avatar()}
        />
        <CommentDetail
          author="Rita"
          timeAgo="Today at 3:45 PM"
          content="Nice Car"
          avatar={faker.image.avatar()}
        />
        <CommentDetail
          author="Esther"
          timeAgo="Today at 20:45 PM"
          content="Nice Bikini"
          avatar={faker.image.avatar()}
        />
      </div>
    );
};
ReactDOM.render( <App/> , document.querySelector('#root'));