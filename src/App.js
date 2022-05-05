import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import Card from './shared/Card';
import { FeedbackProvider } from './context/FeedbackContext';
const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header text={true} />
        <div className='container'>
          <Routes>
            <Route path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                <AboutIconLink />
              </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
};

export default App;