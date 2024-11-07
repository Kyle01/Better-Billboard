import Link from 'next/link';

function about() {
  return (
    <div className="w-full h-screen flex flex-col justify-center space-y-8 items-center text-center m-2">
        <p>My name is Kyle, I'm a software engineer living in NYC. I built this for fun.</p>
        <a href="https://github.com/Kyle01/Better-Billboard" className="cursor text-blue-600 underline">Checkout the code that makes this possible</a>
        <Link className='italic text-blue-600 text-sm text-center' href='/'>Go back to billboard</Link>
      </div>
  );
}

export default about
