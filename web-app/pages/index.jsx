'use client'
import { useEffect, useState } from 'react';
import { Metadata } from 'next';
import LoadingPage from './LoadingPage'

export const metadata = {
  title: 'Top 100 Weekly Billboard',
  description: 'The billboard top 100 weekly chart displayed beautifully with zero ads',
};

function IndexPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/chart');
        const result = await response.json();
        setData(result);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !data) {
    return <LoadingPage />;
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
      <div className='lg:max-w-[850px] w-full'>
        <h3 className='font-bold text-xl mt-4 '>billboard</h3>
        <div className='flex space-x-2 items-baseline'>
          <h1 className='uppercase font-bold text-red-600 text-4xl'>Hot 100</h1>
          <h4 className='italic'>{chartDate}</h4>
        </div>
        <div className='grid grid-cols-12 bg-black text-white divide-white divide-x *:font-bold sticky top-0 h-24'>
          <p className='text-center flex flex-col justify-center text-xs lg:text-lg'>LAST WEEK</p>
          <p className='text-center flex flex-col justify-center text-xs lg:text-lg'>THIS WEEK</p>
          <div className='col-span-7 flex flex-col justify-center'>
            <div className='lg:flex justify-between mx-2 text-xs lg:text-lg lg:px-2 block ml-2 lg:m-0'>
              <p>TITLE</p>
              <p>ARTIST</p>
            </div>
          </div>
          <p className='text-center flex flex-col justify-center text-xs lg:text-lg'>Cert.</p>
          <p className='text-center flex flex-col justify-center text-xs lg:text-lg'> Peak POS</p>
          <p className='text-center flex flex-col justify-center text-xs lg:text-lg'>Weeks on Chart</p>
        </div>
        <div className='border-x border-black mb-24'>
          {data.map((song) => (
            <div className='col-span-12 grid grid-cols-12 h-12 *:h-12 *:flex *:flex-col *:justify-center *:items-center items-center border-b border-black divide-x divide-black'>
              <p className='flex justify-center text-center'>{song.position_last_week}</p>
              <p className='flex justify-center'>{song.position % 100}</p>
              <div className='col-span-7 flex flex-col justify-center'>
                <div className='lg:flex justify-between w-full lg:px-2 block ml-2 lg:m-0'> 
                  <p className='font-bold lg:text-base text-sm'>{song.song_name}</p>
                  <p className='lg:text-base text-xs'>{song.artist}</p>
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
