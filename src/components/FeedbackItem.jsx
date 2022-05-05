import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "../shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
const FeedbackItem = ({ item }) => {
	const { deleteHandler } = useContext(FeedbackContext);

	const getDeletedItem = () => {
		deleteHandler(item.id);
	};
	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<div className="text-display">{item.text}</div>
			<button className="close" onClick={getDeletedItem}>
				<FaTimes />
			</button>
			<button className="edit">
				<FaEdit color="purple" />
			</button>
		</Card>
	);
};

Card.defaultProps = {
	reverse: false,
};
Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
};
export default FeedbackItem;
