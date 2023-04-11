import useChat from '../hooks/useChat'
import Spinner from './Spinner'
import QuestionInput from './QuestionInput'

const ChatContainer = () => {
  const { answer, error, loading, addQuestion } = useChat()

  return (
    <>
      <div className="min-h-[70vh]">
        <p className="mb-5 text-3xl">BTC Chat</p>
        { error !== '' && <div className="flex justify-center my-5 text-red-500">{error}</div> }
        <Spinner loading={loading} />
        <p>{answer}</p>
      </div>
      <QuestionInput addQuestion={addQuestion} />
    </>
  )
}

export default ChatContainer
