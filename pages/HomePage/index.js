import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import Header from '../../components/Header'
import Post from '../../components/Post'

export default class HomePage extends React.Component {
  static propTypes = {
    posts: arrayOf(shape({
      avatarUrl: string,
      imageUrl: string.isRequired,
      captionText: string.isRequired
    }))
  }

  render() {
    return (
      <div className="page-container">
        <style jsx>{`
          body {
            margin: 0;
          }

          .page-container {
            width: 99vw;
            margin: 0;
          }

          .posts {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}</style>

        <Header />
        <div className="posts">
          {this.props.posts.map((post) =>
            <Post
              avatarUrl={post.avatarUrl}
              imageUrl={post.imageUrl}
              captionText={post.captionText}
            />
          )}
        </div>
      </div>
    )
  }
}
