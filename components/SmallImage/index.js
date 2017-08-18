import React from 'react'
import { string } from 'prop-types'

export default class SmallImage extends React.Component {
  static propTypes = {
    imageUrl: string.isRequired
  }

  render() {
    return (
      <div className="image-container">
        <style jsx>{`
          .image-container {
            width: 250px;
            height: 250px;
            overflow: hidden;
            position: relative;
          }
          .small-image {
            height: 100%;
            position: absolute;
            transform: translateX(-50%);
            top: 0;
            left: 50%;
          }
        `}</style>
        <img src={this.props.imageUrl} className="small-image" />
      </div>
    )
  }
}
