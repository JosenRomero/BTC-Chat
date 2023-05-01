import { BsGithub } from 'react-icons/bs'
import SelectLanguage from './SelectLanguage'

const Header = () => {
  return (
    <header className="py-4 w-full">
      <div className="flex container items-center justify-between mx-auto">
        <h1 className="stroke-text-blue text-xl md:text-3xl text-white">BTC Chat</h1>
        <div className="flex items-center gap-x-4">
          <SelectLanguage />
          <a className="hover:opacity-75" href="https://github.com/JosenRomero/BTC-Chat" target="_blank" rel="noreferrer">
            <BsGithub size={24} color={'#333'} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
