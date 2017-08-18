import React from  'react'
import { storiesOf } from '@storybook/react'
import Caption from './'

storiesOf('Caption', module)
  .add('displays the avatar and caption text', () =>
    <Caption
      avatarUrl='https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi'
      captionText='Caption text goes here'
    />
  )
