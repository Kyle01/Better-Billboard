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

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(data)

  return (
    <div className='flex justify-center w-full'>
      <div className='max-w-[850px]'>
        <h3 className='font-bold text-xl '>billboard</h3>
        <h1 className='uppercase font-bold text-red-600 text-4xl'>Hot 100</h1>
        <div className='grid grid-cols-12 bg-black text-white divide-white divide-x'>
          <p>LAST WEEK</p>
          <p>THIS WEEK</p>
          <div className='col-span-7 flex justify-between'>
            <p>TITLE</p>
            <p>Artist</p>
          </div>
          <p>Cert.</p>
          <p>Peak POS</p>
          <p>Weeks on Chart</p>
        </div>
        {data.map((song) => (
          <div className='col-span-12 grid grid-cols-12'>
            <p>{song.position_last_week}</p>
            <p>{song.position - 200}</p>
            <div className='col-span-7 flex justify-between'>
              <p>{song.song_name}</p>
              <p>{song.artist}</p>
            </div>
            <p>{null}</p>
            <p>{song.position_peak}</p>
            <p>{song.weeks_on_chart}</p>
          </div>
        ))}
      </div>
    </div>
  );

}

export default IndexPage
