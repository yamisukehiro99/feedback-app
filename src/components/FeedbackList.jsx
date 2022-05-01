import React from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
const FeedbackList = ({ feedback, deleteHandler }) => {
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>;
	}
	const reviews = feedback.map((item) => (
		<motion.div
			key={item.id}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<FeedbackItem key={item.id} item={item} deleteHandler={deleteHandler} />
		</motion.div>
	));
	return (
		<div className="feedback-list">
			<AnimatePresence>{reviews}</AnimatePresence>
		</div>
	);
};
//   const reviews = feedback.map((item) => (
//     <FeedbackItem key={item.id} item={item} deleteHandler={deleteHandler}/>
//   ))
// 	return (
// 		<div className="feedback-list">
// 			{reviews}
// 		</div>
// 	);
// };

export default FeedbackList;

FeedbackList.propTypes = {
	feedback: PropTypes.arrayOf(PropTypes.shape),
};
