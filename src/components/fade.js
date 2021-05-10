import React from 'react'

class Fade extends React.Component {
  state = {
    opacity: '0'
  }

  listenScrollEvent = e => {
    if (window.scrollY > window.innerHeight / 2) {
      this.setState({opacity: '1'})
    } else {
      this.setState({opacity: '0'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return(
      <div>
          <div className="hmcon" style={{opacity: this.state.opacity}}>
          <div className="container">
            This is the header
          </div>
      </div>

     </div>
     )
   }
}
export default Fade
