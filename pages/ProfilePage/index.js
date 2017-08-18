import React from 'react'
import { arrayOf, string } from 'prop-types'
import SmallImage from '../../components/SmallImage'
import ProfileHeader from '../../components/ProfileHeader'
import Header from '../../components/Header'
export default class ProfilePage extends React.Component {
  static propTypes = {
    avatarUrl: string,
    name: string.isRequired,
    images: arrayOf(string)
  }

  render() {
    return (
      <div>
        <style jsx>{`
          .images {
            display: flex;
            flex-wrap: wrap;
            width: 80%;
            margin: 0 auto;
          }

          .image {
            padding: 10px;
          }
        `}</style>
        <Header />
        <ProfileHeader
          avatarUrl={this.props.avatarUrl}
          name={this.props.name}
        />
        <div className="images">
          {this.props.images.map((image) =>
            <div className="image">
              <SmallImage imageUrl={image} />
            </div>
          )}
        </div>
      </div>
    )
  }
}
