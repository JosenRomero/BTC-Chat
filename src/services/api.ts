
const apiURL: string = import.meta.env.VITE_API_URL

interface question {
  message: string
}

export const postQuestion = async (question: question) => {
  return await fetch(`${apiURL}/api/chat`, {
    method: 'POST',
    body: JSON.stringify(question),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(async res => await res.json())
}
