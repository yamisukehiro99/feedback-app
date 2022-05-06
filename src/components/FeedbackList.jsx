import React from "react";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "../shared/Spinner";
const FeedbackList = () => {
	const { feedback, isLoading } = useContext(FeedbackContext);
	if (!isLoading && (!feedback || feedback.length === 0)) {
		return (
			<>
				<p>No Feedback Yet</p>
			</>
		);
	}
	const reviews = feedback.map((item) => (
		<motion.div
			key={item.id}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<FeedbackItem key={item.id} item={item} />
		</motion.div>
	));
	return isLoading ? (
		<Spinner />
	) : (
		<div className="feedback-list">
			<AnimatePresence>{reviews}</AnimatePresence>
		</div>
	);
};

export default FeedbackList;
