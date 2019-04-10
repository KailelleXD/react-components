import React from "react";


const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <span className="date"> Today at {props.timeAgo}</span>
            <div className="text">{props.content}</div>
            </div>
        </div>
    );
};

export default CommentDetail;
