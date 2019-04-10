import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    avatar={faker.image.avatar()}
                    timeAgo="6:00PM"
                    content="Yo!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    avatar={faker.image.avatar()}
                    timeAgo="6:20PM"
                    content="Howdy!"
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Taylor"
                    avatar={faker.image.avatar()}
                    timeAgo="6:27PM"
                    content="Heyyy!"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
