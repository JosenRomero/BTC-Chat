import { useTranslation } from 'react-i18next'

const SelectLanguage = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    void i18n.changeLanguage(e.target.value)
  }

  return (
    <div className="flex">
      <select value={i18n.language} onChange={changeLanguage} className="bg-white border rounded border-gray-400 focus:ring-blue-500 focus:border-blue-500 p-2.5">
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}

export default SelectLanguage
