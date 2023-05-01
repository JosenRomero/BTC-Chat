import { useTranslation } from 'react-i18next'

const InitialMessage = () => {
  const { t } = useTranslation()

  return (
    <div className="grid place-content-center mb-5 overflow-y-auto h-[60vh]">
      <div className="w-full md:w-1/2 mx-auto text-gray-800 rounded-md bg-white p-6">
        <p>{ t('initialMessage') }</p>
      </div>
    </div>
  )
}

export default InitialMessage
