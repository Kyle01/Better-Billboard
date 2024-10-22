function LoadingPage() {
  const chartDate = new Date().toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
  })

  return (
    <div className='flex justify-center w-full'>
      <div className='lg:max-w-[850px]'>
        <h3 className='font-bold text-xl mt-4 '>billboard</h3>
        <div className='flex space-x-2 items-baseline'>
          <h1 className='uppercase font-bold text-red-600 text-4xl'>Hot 100</h1>
          <h4 className='italic'>{chartDate}</h4>
        </div>
        <div className='grid grid-cols-12 bg-black text-white divide-white divide-x *:font-bold sticky top-0 h-24'>
          <p className='text-center flex flex-col justify-center text-xs lg:text-lg'>LAST WEEK</p>
          <p className='text-center flex flex-col justify-center text-xs lg:text-lg'>THIS WEEK</p>
          <div className='col-span-7 flex flex-col justify-center'>
            <div className='flex justify-between mx-2 text-xs lg:text-lg'>
              <p>TITLE</p>
              <p>ARTIST</p>
            </div>
          </div>
          <p className='text-center flex flex-col justify-center text-xs lg:text-lg'>Cert.</p>
          <p className='text-center flex flex-col justify-center text-xs lg:text-lg'> Peak POS</p>
          <p className='text-center flex flex-col justify-center text-xs lg:text-lg'>Weeks on Chart</p>
        </div>
        <div className='border-x border-black mb-24'>
          {[...Array(100)].map((_x, i) => (
            <div className='col-span-12 grid grid-cols-12 h-12 *:h-12 *:flex *:flex-col *:justify-center *:items-center items-center border-b border-black divide-x divide-black'>
              <p className='flex justify-center text-center'>-</p>
              <p className='flex justify-center'>{i}</p>
              <div className='col-span-7 flex flex-col justify-center'>
                <div className='lg:flex justify-between w-full lg:px-2 block ml-2 lg:m-0'> 
                  <p className='font-bold'>-</p>
                  <p className='lg:text-base text-sm'>-</p>
                </div>
              </div>
              <p className='flex justify-center'>-</p>
              <p className='flex justify-center'>{i}</p>
              <p className='flex justify-center'>-</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default LoadingPage
