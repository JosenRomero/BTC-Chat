import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  addQuestion: (question: string) => void
}

const QuestionInput = ({ addQuestion }: Props) => {
  const [question, setQuestion] = useState('')
  const { t } = useTranslation()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addQuestion(question)
    setQuestion('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          onChange={(e) => { setQuestion(e.target.value) }}
          value={question}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{ t('addAQuestion') }</label>
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">{ t('send') }</button>
    </form>
  )
}

export default QuestionInput
