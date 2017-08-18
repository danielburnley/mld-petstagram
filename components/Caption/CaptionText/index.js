import React from 'react'
import { string } from 'prop-types'

export default class CaptionText extends React.Component {
  static propTypes = {
    text: string.isRequired
  }

  render () {
    return (
      <div>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Chewy');

          p {
            font-family: Chewy, sans-serif;
          }
        `}</style>
        <p>{this.props.text}</p>
      </div>
    )
  }
}
