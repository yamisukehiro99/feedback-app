import React from 'react';
import FeedbackData from './data/FeedbackData'
import { useState } from 'react';
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList';
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header text={true} />
      <div className='container'>
        <FeedbackList feedback={feedback}/>
      </div>
    </>
  )
};

export default App;