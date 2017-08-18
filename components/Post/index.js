import React from 'react'
import { string } from 'prop-types'
import Image from '../Image'
import Caption from '../Caption'

export default class Post extends React.Component {
  static propTypes = {
    avatarUrl: string,
    imageUrl: string.isRequired,
    captionText: string.isRequired
  }

  render () {
    return (
      <div className="post">
        <style jsx>{`
          .post {
            display: flex;
            flex-direction: column;
            margin: 30px 0;
            padding: 10px;
            border: 1px solid grey;
            border-radius: 1%;
            box-shadow: 0px 8px 25px 6px rgba(143,141,143,1);
            max-width: 600px;
          }
        `}</style>
        <Image imageUrl={this.props.imageUrl} />
        <Caption avatarUrl={this.props.avatarUrl} captionText={this.props.captionText} />
      </div>
    )
  }
}
