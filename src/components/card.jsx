import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './card.scss';
import bestInShow from '../best-in-show.jpg';

const Card = (props) => (
  <article>
    <img src={props.image} alt="" />
    <div className="barry">
      <div className="roland">
        <h2>{props.title}</h2>
        <span>{props.section}</span>
      </div>
      <div className="roland">
        <p>{ReactHtmlParser(props.blurb)}</p>
      </div>
      <div className="roland">
        <a href="#">More</a>
      </div>
    </div>
  </article>
);

Card.defaultProps = {
  image: bestInShow,
};

export default Card;
