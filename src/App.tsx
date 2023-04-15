import ChatContainer from './components/ChatContainer'

const App = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 bg-gray-50">
      <main className="w-3/4 mx-auto my-5">
        <ChatContainer />
      </main>
    </div>
  )
}

export default App
