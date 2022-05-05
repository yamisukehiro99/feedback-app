import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react';
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import Card from './shared/Card';
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
    <Router>
      <Header text={true} />
      <div className='container'>
        <Routes>
          <Route path='/' element={
            <>
              <FeedbackForm addingFeedbackHandler={addingFeedbackHandler} />
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} deleteHandler={deleteHandler} />
              <AboutIconLink />
            </>
          }>
          </Route>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Card>
          <NavLink to='/' activeClassName='active'>Home</NavLink>
          <NavLink to='/about' activeClassName='active'>return</NavLink>
        </Card>
      </div>

    </Router>
  )
};

export default App;