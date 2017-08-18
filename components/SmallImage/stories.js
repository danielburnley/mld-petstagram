import React from 'react'
import { storiesOf } from '@storybook/react'
import SmallImage from './'

storiesOf('SmallImage', module)
  .add('displays a small(er) image', () =>
    <SmallImage imageUrl="https://www.thesun.co.uk/wp-content/uploads/2016/06/nintchdbpict000212879086.jpg?w=960&strip=all" />
)
