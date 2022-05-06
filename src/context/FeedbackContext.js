import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setEditedFeedback] = useState({
    item: {},
    edit: false
  })

  //Fetching feedback from the mock backend function
  const fetchFeedback = async () => {
    const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc')
    const data = await response.json()
    setFeedback(data);
    setIsLoading(false)
  }

  useEffect(() => {
    fetchFeedback()
  }, [])


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

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => item.id === id ? { ...item, ...updItem } : item)
    )
  }
  //Set Item to be updated
  const editedFeedback = (item) => {
    setEditedFeedback({
      item, // item: item
      edit: true
    })
  }
  return <FeedbackContext.Provider value={{
    feedback,
    deleteHandler,
    addingFeedbackHandler,
    editedFeedback,
    setEditedFeedback,
    feedbackEdit,
    updateFeedback,
    isLoading
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext