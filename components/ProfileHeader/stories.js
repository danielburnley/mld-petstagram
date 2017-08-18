import React from 'react'
import { storiesOf } from '@storybook/react'
import ProfileHeader from './'

storiesOf('ProfileHeader', module)
  .add('displays profile info', () =>
  <ProfileHeader
    avatarUrl="http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg"
    name="Waffles"
  />
)
