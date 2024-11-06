import React from "react"
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
 
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
 
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo })
  }
 
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen flex flex-col justify-center space-y-8 items-center text-center m-2">
          <p>Yikes. Something went wrong.</p>
          <p>Maybe you'll consider fixing it? Please consider submitting a <a href="https://github.com/Kyle01/Better-Billboard" className="cursor text-blue-600 underline">pull request</a>.</p>
          <p>If not, hopefully I'll get this fixed soon ¯\_(ツ)_/¯ </p>
          <p>-always with love, Kyle</p>
      </div>
      )
    }
    return this.props.children
  }
}
 
export default ErrorBoundary