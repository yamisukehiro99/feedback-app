import { createContext, useState, useEffect } from "react";

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
    const response = await fetch('/feedback?_sort=id&_order=desc')
    const data = await response.json()
    setFeedback(data);
    setIsLoading(false)
  }

  useEffect(() => {
    fetchFeedback()
  }, [])

  //Deleting a feedback
  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete'))
      await fetch(`/feedback/${id}`, { method: 'DELETE' })

    setFeedback(feedback.filter(e => e.id !== id))
  }
  //Adding a new feedback
  const addingFeedbackHandler = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    })
    const data = await response.json()
    setFeedback(prevStat => {
      return [data, ...prevStat]
    })
  }
  //updating an existing feedback
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updItem)
    })
    const data = await response.json()
    setFeedback(
      feedback.map((item) => item.id === id ? { ...item, ...data } : item)
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