
const Spinner = ({ loading }: { loading: boolean }) => {
  if (!loading) return <></>

  return (
    <div className="flex justify-center my-5">
      <span className="loader"></span>
    </div>
  )
}

export default Spinner
