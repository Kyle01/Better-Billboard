'use client'

function IndexPage() {
  const onClick = () => {
    fetch('/api/chart').then((resp) => resp.json()).then((data) => {
      console.log(data)
    })
  }

  return (
    <div className='my-6 ml-6 space-y-6'>
      <p className='underline text-lg text-teal-600'>Styled header</p>
      <button className="bg-blue-600 rounded px-2 py-1 text-white" onClick={onClick}>Query Render Backend</button>
    </div>
  )
}

export default IndexPage
