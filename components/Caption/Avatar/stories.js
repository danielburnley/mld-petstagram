import React from 'react'
import { storiesOf } from '@storybook/react'
import Avatar from './'

storiesOf('Avatar', module)
  .add('with an image', () =>
    <Avatar imageUrl='https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi' />
  )
  .add('without an image', () =>
    <Avatar />
  )
