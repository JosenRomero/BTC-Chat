import { useState } from 'react'
import { postQuestion } from '../services/api'
import { useTranslation } from 'react-i18next'
import { type Language } from '../types'

const useChat = () => {
  const [messages, setMessages] = useState<string[][]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState<boolean>(false)
  const { i18n } = useTranslation()

  const addQuestion = (question: string) => {
    setError('')
    setLoading(true)
    postQuestion({ message: question, language: i18n.language as Language })
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
