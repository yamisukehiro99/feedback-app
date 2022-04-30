import React from "react";
import PropTypes from 'prop-types'
import Card from "../shared/Card";
import { useState } from "react";
const FeedbackItem = ({ item, deleteHandler }) => {
	const [rating, setRating] = useState(7);
	const [text, setText] = useState("This is an example of a feedback item");
  const getDeletedItem = () => {
    deleteHandler(item.id)
  }
	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<div className="text-display">{item.text}</div>
      <button onClick={getDeletedItem}>
        delete
      </button>
		</Card>
	);
};

Card.defaultProps = {
  reverse: false,
}
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}
export default FeedbackItem;
