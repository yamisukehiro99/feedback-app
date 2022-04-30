import React from 'react';
import FeedbackData from './data/FeedbackData'
import { useState } from 'react';
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList';
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteHandler = (id) => {
    console.log(id);
  }
  return (
    <>
      <Header text={true} />
      <div className='container'>
        <FeedbackList feedback={feedback} deleteHandler={deleteHandler} />
      </div>
    </>
  )
};

export default App;