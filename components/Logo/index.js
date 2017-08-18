import React from 'react'
import logoImage from './logo.jpg'

export default class Logo extends React.Component {
  render () {
    return (
      <div>
        <style jsx>{`
          .logo {
            width: 100px;
          }
        `}</style>
        <img className="logo" src={logoImage} />
      </div>
    )
  }
}
