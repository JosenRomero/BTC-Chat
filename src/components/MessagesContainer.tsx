
interface Props {
  messages: string[][]
}
const MessagesContainer = ({ messages }: Props) => {
  if (messages.length === 0) return <></>

  return (
    <div>
      { messages.map((currentValue, index) => {
        return (
          <div key={index}>
            <div className="w-full text-gray-800 border-b border-black/10 bg-white">
              <div className="p-4 flex m-auto">
                <p>{currentValue[0]}</p>
              </div>
            </div>
            <div className="w-full text-gray-800 border-b border-black/10 bg-gray-50">
              <div className="p-4 flex m-auto">
                  <p>{currentValue[1]}</p>
                </div>
              </div>
          </div>
        )
      })}
    </div>
  )
}

export default MessagesContainer
