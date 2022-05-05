import React from "react";
import { Link } from "react-router-dom";
import Card from "../shared/Card";
const AboutPage = () => {
	return (
		<Card>
			<div className="about">
				<h1>About This Project</h1>
        <p>This is a React app to leave a feedback for a product or a serice</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to={'/'}>
            Back To Home
          </Link>
        </p>
			</div>
		</Card>
	);
};

export default AboutPage;
