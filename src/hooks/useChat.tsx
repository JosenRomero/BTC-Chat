import { useState } from 'react'
import { postQuestion } from '../services/api'

const useChat = () => {
  const [messages, setMessages] = useState<string[][]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState<boolean>(false)

  const addQuestion = (question: string) => {
    setError('')
    setLoading(true)
    postQuestion({ message: question })
      .then((result) => {
        if (result === null) return
        setMessages([
          ...messages, [question, result.answer]
        ])
        setLoading(false)
      }).catch(() => {
        setError('Something went wrong')
        setLoading(false)
      })
  }

  return {
    messages,
    error,
    loading,
    addQuestion
  }
}

export default useChat
