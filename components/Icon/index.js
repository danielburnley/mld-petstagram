import React from 'react'
import { string, bool, func } from 'prop-types'

export default class Icon extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = { active: this.props.active }
    this.toggleActive = this.toggleActive.bind(this)
  }

  static propTypes = {
    name: string.isRequired,
    active: bool,
    onClick: func
  }

  static defaultProps = {
    active: false,
    onClick: () => {}
  }

  icon() {
    switch (this.props.name) {
      case 'heart': return this.state.active == true ? "♥" : "♡"
      case 'comment': return this.state.active == true ? "🗪" : "🗩"
    }
  }

  toggleActive() {
    this.setState({ active: !this.state.active })
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
        <span onClick={this.toggleActive}>{this.icon()}</span>
      </div>
    )
  }
}
