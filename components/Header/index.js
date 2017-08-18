import React from 'react'
import Logo from '../Logo'

export default class Header extends React.Component {

  render () {
    return (
      <div className="header">
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Chewy');

          .header {
            width: 100%;
            background-color: #F7F8FA;
            text-align: center;
          }

          h1 {
            font-family: Chewy;
            font-weight: normal;
            font-size: 40px;
            display: inline-block;
            margin-left: -100px;
          }

          .logo {
            align-self: start;
            float: left;
          }
        `}
        </style>
        <span className="logo"><Logo /></span>
        <h1>Petstagram</h1>
      </div>
    )
  }
}
