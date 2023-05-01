import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="flex container justify-end mx-auto pt-5 pb-2">
      <p className="text-zinc-800">{ t('footerText') } <a className="text-zinc-800 hover:text-zinc-800 hover:underline" href="https://github.com/JosenRomero" target="_blank" rel="noreferrer">José Romero</a></p>
    </footer>
  )
}

export default Footer
