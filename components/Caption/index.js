import React from 'react'
import { string } from 'prop-types'
import CaptionText from './CaptionText'
import Avatar from './Avatar'
import Icon from '../Icon'

export default class Caption extends React.Component {
  static propTypes = {
    avatarUrl: string,
    captionText: string
  }

  render() {
    return (
      <div>
        <style jsx>{`
          div {
            display: inline-block;
          }
          .caption {
            display: flex;
            align-items: center;
            width: 600px;
            justify-content: space-between;
          }

          .left {
            display: flex;
            align-items: center;
          }
        `}</style>
        <div className="caption">
          <div className="left">
            <Avatar imageUrl={this.props.avatarUrl} />
            <CaptionText className="captionText" text={this.props.captionText} />
          </div>
          <div className="icons">
            <Icon name="heart"/>
            <Icon name="comment"/>
          </div>
        </div>
      </div>
    )
  }
}
