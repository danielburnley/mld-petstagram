import React from 'react'
import { string } from 'prop-types'
import Avatar from '../Avatar'

export default class ProfileHeader extends React.Component {
  static propTypes = {
    avatarUrl: string,
    name: string.isRequired
  }

  render() {
    return (
      <div className="profile-header">
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Chewy');

          .profile-header {
            display: flex;
            width: 80%;
            padding-left: 100px;
            align-items: center;
          }

          h2 {
            font-family: Chewy;
            font-size: 40px;
            font-weight: normal;
            margin-left: 10px;
          }
        `}</style>
        <Avatar imageUrl={this.props.avatarUrl} />
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}
