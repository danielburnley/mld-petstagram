import React from 'react'
import { storiesOf } from '@storybook/react'
import Post from './'

storiesOf('Post', module)
  .add('displays the post', () =>
    <Post
      imageUrl="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Natural-Dog-Law-2-To-dogs%2C-energy-is-everything.jpg?itok=Z-ujUOUr"
      avatarUrl="http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg"
      captionText="OMG BEST DAY EVAR!!!!!!!"
    />
  )
