import { useRef, useEffect } from 'react'
import MessageContainer from './MessageContainer'

interface Props {
  messages: string[][]
}
const MessagesContainer = ({ messages }: Props) => {
  const bottomRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  if (messages.length === 0) return <></>

  return (
    <div className="flex flex-col gap-3 mb-5 overflow-y-auto h-[60vh]">
      { messages.map((currentValue, index) => {
        return (
          <div key={index} className="flex flex-col gap-3">
            <MessageContainer text={currentValue[0]} isQuestion={true} />
            <MessageContainer text={currentValue[1]} isQuestion={false} />
          </div>
        )
      })}
      <div ref={bottomRef} />
    </div>
  )
}

export default MessagesContainer
