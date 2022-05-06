import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackContextProvider } from './context/FeedbackContext';
const App = () => {
  return (
    <FeedbackContextProvider>
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
            }/>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackContextProvider>
  )
};

export default App;