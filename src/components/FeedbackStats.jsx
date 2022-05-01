import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const FeedbackStats = ({ feedback }) => {
	const average =
		feedback.reduce((acc, ele) => {
			return acc + ele.rating;
		}, 0) / feedback.length;
	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>
				Average Rating:{" "}
				{isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, "")}
			</h4>
		</div>
	);
};
FeedbackStats.propTypes = {
	feedback: PropTypes.array.isRequired,
};
export default FeedbackStats;
