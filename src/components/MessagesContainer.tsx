import MessageContainer from './MessageContainer'

interface Props {
  messages: string[][]
}
const MessagesContainer = ({ messages }: Props) => {
  if (messages.length === 0) return <></>

  return (
    <div className="flex flex-col gap-3">
      { messages.map((currentValue, index) => {
        return (
          <div key={index} className="flex flex-col gap-3">
            <MessageContainer text={currentValue[0]} isQuestion={true} />
            <MessageContainer text={currentValue[1]} isQuestion={false} />
          </div>
        )
      })}
    </div>
  )
}

export default MessagesContainer
