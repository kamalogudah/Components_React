import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
      <div className="ui container comments">
   
          <CommentDetail author= "Paul" timeAgo="Today at 4:45 PM"/>
          <CommentDetail author="Rita" timeAgo="Today at 3:45 PM"/>
          <CommentDetail author="Esther" timeAgo="Today at 20:45 PM"/>
      </div>

    )
};
ReactDOM.render( <App/> , document.querySelector('#root'));