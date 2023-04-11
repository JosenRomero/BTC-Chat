import { useState } from 'react'
import { postQuestion } from '../services/api'

const useChat = () => {
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState<boolean>(false)

  const addQuestion = (question: string) => {
    setError('')
    setLoading(true)
    postQuestion({ message: question })
      .then((result) => {
        if (result === null) return
        setAnswer(result.answer)
        setLoading(false)
      }).catch(() => {
        setError('Something went wrong')
        setLoading(false)
      })
  }

  return {
    answer,
    error,
    loading,
    addQuestion
  }
}

export default useChat
