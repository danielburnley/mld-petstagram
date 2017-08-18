import React from 'react'
import { string } from 'prop-types'

export default class Image extends React.Component {
  static propTypes = {
    alt: string,
    imageUrl: string.isRequired
  }

  render () {
    return (
      <div>
        <style jsx>{`
          .image {
            width: 600px;
            max-height: 500px;
            margin-bottom: 10px;
            border-radius: 1%;
          }
        `}</style>
        <img
          className="image"
          alt={this.props.alt}
          src={this.props.imageUrl}
        />
      </div>
    )
  }
}
