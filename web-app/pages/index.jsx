'use client'
import { useEffect, useState } from 'react';

function IndexPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/chart');
        const result = await response.json();
        setData(result);
      }  finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !data) {
    return <p>Loading...</p>;
  }

  const chartDate = new Date(data[0].date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
  })

  const directionSymbol = (symbol) => symbol === 'up' ? '▲' : symbol === 'down' ? '▼' : null
  const directionStyle = (symbol) => symbol === 'up' ? ' text-green-600' : symbol === 'down' ? ' text-red-600' : null

  return (
    <div className='flex justify-center w-full'>
      <div className='max-w-[850px]'>
        <h3 className='font-bold text-xl mt-4 '>billboard</h3>
        <div className='flex space-x-2 items-baseline'>
          <h1 className='uppercase font-bold text-red-600 text-4xl'>Hot 100</h1>
          <h4 className='italic'>{chartDate}</h4>
        </div>
        <div className='grid grid-cols-12 bg-black text-white divide-white divide-x *:font-bold'>
          <p className='text-center flex flex-col justify-center'>LAST WEEK</p>
          <p className='text-center flex flex-col justify-center'>THIS WEEK</p>
          <div className='col-span-7 flex flex-col justify-center'>
            <div className='flex justify-between mx-2'>
              <p>TITLE</p>
              <p>ARTIST</p>
            </div>
          </div>
          <p className='text-center flex flex-col justify-center'>Cert.</p>
          <p className='text-center flex flex-col justify-center'> Peak POS</p>
          <p className='text-center flex flex-col justify-center'>Weeks on Chart</p>
        </div>
        <div className='border-x border-black mb-24'>
          {data.map((song) => (
            <div className='col-span-12 grid grid-cols-12 h-12 *:h-12 *:flex *:flex-col *:justify-center *:items-center items-center border-b border-black divide-x divide-black'>
              <p className='flex justify-center '>{song.position_last_week}</p>
              <p className='flex justify-center'>{song.position - 300}</p>
              <div className='col-span-7 flex flex-col justify-center'>
                <div className='flex justify-between w-full mx-2'> 
                  <p className='ml-2'>{song.song_name}</p>
                  <p className='mr-2'>{song.artist}</p>
                </div>
              </div>
              <p  className={`flex justify-center ${directionStyle(song.direction)}`}>{directionSymbol(song.direction)}</p>
              <p className='flex justify-center'>{song.position_peak}</p>
              <p className='flex justify-center'>{song.weeks_on_chart}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default IndexPage
