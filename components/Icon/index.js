import React from 'react'
import { string, bool } from 'prop-types'

export default class Icon extends React.Component {
  static propTypes = {
    name: string.isRequired,
    active: bool
  }

  static defaultProps = {
    active: false
  }

  icon() {
    switch (this.props.name) {
      case 'heart': return this.props.active == true ? "♥" : "♡"
      case 'comment': return this.props.active == true ? "🗪" : "🗩"
    }
  }

  toggleActive() {
    this.props.active = !this.props.active;
  }

  render () {
    return (
      <div className="icon">
        <style jsx>{`
          .icon {
            margin: 5px;
            display: inline-block
          }
        `}</style>
        <span>{this.icon()}</span>
      </div>
    )
  }
}
