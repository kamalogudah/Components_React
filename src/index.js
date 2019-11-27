import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <div>
            <h4 style={{ color: "red" }}>Warning!</h4>
            Are you sure you want to do this?
          </div>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Paul"
            timeAgo="Today at 4:45 PM"
            content="Nice Blog Post"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Rita"
            timeAgo="Today at 3:45 PM"
            content="Nice Car"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Esther"
            timeAgo="Today at 20:45 PM"
            content="Nice Bikini"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );
};
ReactDOM.render( <App/> , document.querySelector('#root'));