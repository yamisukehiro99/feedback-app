import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react';
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete'))
      setFeedback(feedback.filter(e => e.id !== id))
  }
  const addingFeedbackHandler = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback(prevStat => {
      return [newFeedback, ...prevStat]
    })
  }
  return (
    <>
      <Header text={true} />
      <div className='container'>
        <FeedbackForm addingFeedbackHandler={addingFeedbackHandler} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} deleteHandler={deleteHandler} />
      </div>
    </>
  )
};

export default App;