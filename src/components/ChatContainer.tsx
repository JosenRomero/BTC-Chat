import useChat from '../hooks/useChat'
import Spinner from './Spinner'
import QuestionInput from './QuestionInput'
import MessagesContainer from './MessagesContainer'

const ChatContainer = () => {
  const { messages, error, loading, addQuestion } = useChat()

  return (
    <>
      <h1 className="mb-5 text-3xl">BTC Chat</h1>
      { error !== '' && <div className="flex justify-center my-5 text-red-500">{error}</div> }
      <Spinner loading={loading} />
      <div className="overflow-y-auto h-[60vh] mb-5">
        <MessagesContainer messages={messages} />
      </div>
      <QuestionInput addQuestion={addQuestion} />
    </>
  )
}

export default ChatContainer