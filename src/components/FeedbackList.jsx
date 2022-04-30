import React from "react";
import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem";
const FeedbackList = ({ feedback, deleteHandler }) => {
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>;
	}
  const reviews = feedback.map((item) => (
    <FeedbackItem key={item.id} item={item} deleteHandler={deleteHandler}/>
  ))
	return (
		<div className="feedback-list">
			{reviews}
		</div>
	);
};

export default FeedbackList;

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape
  )
}