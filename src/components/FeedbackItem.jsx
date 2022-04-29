import React from "react";
import PropTypes from 'prop-types'
import Card from "../shared/Card";
import { useState } from "react";
const FeedbackItem = ({ item }) => {
	const [rating, setRating] = useState(7);
	const [text, setText] = useState("This is an example of a feedback item");
	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<div className="text-display">{item.text}</div>
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
