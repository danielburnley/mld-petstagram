import React from 'react'
import { string } from 'prop-types'

export default class Avatar extends React.Component {
  static propTypes = {
    imageUrl: string
  }

  static defaultProps = {
    imageUrl: 'https://success.salesforce.com/resource/1499817600000/sharedlayout/img/new-user-image-default.png'
  }

  render () {
    return (
      <div>
        <style jsx>{`
          .avatar {
            border-radius: 50%;
            width: 40px;
            height: 40px;
            margin: 5px;
          }
        `}</style>
        <img className="avatar" src={this.props.imageUrl} />
      </div>
    )
  }
}
