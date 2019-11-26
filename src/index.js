import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
      <div className="ui container comments">
   
          <CommentDetail author= "Paul"/>
          <CommentDetail author="Rita"/>
          <CommentDetail author="Esther"/>
      </div>

    )
};
ReactDOM.render( <App/> , document.querySelector('#root'));