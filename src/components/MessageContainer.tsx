
interface Props {
  isQuestion: boolean
  text: string
}

const MessageContainer = ({ isQuestion, text }: Props) => {
  return (
    <div className={`w-full text-gray-800 rounded-md ${isQuestion ? 'bg-sky-100' : 'bg-green-100'} `}>
      <div className="p-4 flex m-auto gap-3">
        <div>
          <span className={`text-white p-2 rounded-md ${isQuestion ? 'bg-sky-400' : 'bg-green-400'} `}>
            {isQuestion ? 'Q' : 'A'}
          </span>
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default MessageContainer
