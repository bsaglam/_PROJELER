import React from 'react'
import faker from 'faker'

export default function Comments(props) {
    ///const name= props.name;
    const {name,date,content} = props;
    return (
        <div className="comment">
                <a className="avatar">
                    <img src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a className="author">{name}</a>
                    <div className="metadata">
                        <span className ="date">Today at {date}</span>
                    </div>
                    <div className ="text">
                        {content}
                </div>
                    <div className="actions">
                        <a className="reply">Reply</a>
                    </div>
                </div>
            </div>

    )
}
