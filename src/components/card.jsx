import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Card = (props) => (
  <article>
    <img src={props.image} alt="" />
    <div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.section}</p>
      </div>
      <div>
        <p>{ReactHtmlParser(props.blurb)}</p>
      </div>
      <div>
        <a href="#">More</a>
      </div>
    </div>
  </article>
);

export default Card;
