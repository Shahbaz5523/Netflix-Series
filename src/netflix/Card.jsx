import React from 'react';
import '../index.css';

function Cards(props){
    return (
        <div className="card">
            <img src={props.imgSrc} alt="img"/>
            <div className="card-info">
                <span className="title">{props.title}</span>
                <p className="name">{props.name}</p>
                <a target='_blank' href={props.link}>
                    <button> WATCH NOW </button>
                </a>
            </div>
        </div>
    );
}

export default Cards;