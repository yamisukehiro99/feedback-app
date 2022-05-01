import React from 'react';
import FeedbackData from './data/FeedbackData'
import { useState } from 'react';
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete'))
      setFeedback(feedback.filter(e => e.id !== id))
  }
  return (
    <>
      <Header text={true} />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} deleteHandler={deleteHandler} />
      </div>
    </>
  )
};

export default App;