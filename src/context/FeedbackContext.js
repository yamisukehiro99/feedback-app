import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
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

  return <FeedbackContext.Provider value={{
    feedback,
    deleteHandler,
    addingFeedbackHandler
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext