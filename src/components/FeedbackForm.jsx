import React from "react";
import { useState } from "react";
import Button from "../shared/Button";
import Card from "../shared/Card";
import RatingSelect from "./RatingSelect";
const FeedbackForm = ({ addingFeedbackHandler }) => {
	const [text, setText] = useState("");
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState("");
	const [rating, setRating] = useState("");

	const handleTextChange = (event) => {
		if (text === "") {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== "" && text.trim().length <= 10) {
			setMessage("Text must be at least 10 characters");
			setBtnDisabled(true);
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
		setText(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (text.trim().length > 10) {
			const newFeedback = {
        id: 5,
				text: text,
				rating: rating,
			};
			addingFeedbackHandler(newFeedback);
			setText("");
			setRating("");
		}
	};
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={setRating} selected={rating} />
				<div className="input-group">
					<input
						type="text"
						placeholder="Write a review"
						onChange={handleTextChange}
						value={text}
					/>
					<Button type="submit" version="secondary" isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	);
};

export default FeedbackForm;
