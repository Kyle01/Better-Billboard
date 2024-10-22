function ErrorPage() {
  return (
    <div className="w-full h-screen flex flex-col justify-center space-y-8 items-center text-center">
        <p>Yikes. Something went wrong.</p>
        <p>Maybe you'll consider fixing it? Please consider submitting a pull request <a href="https://github.com/Kyle01/Better-Billboard" className="cursor text-blue-600 underline">Here</a>.</p>
        <p>If not, hopefully I'll get this fixed soon ¯\_(ツ)_/¯ </p>
        <p>-always with love, Kyle</p>
    </div>
  );
}

export default ErrorPage