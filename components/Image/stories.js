import React from 'react'
import { storiesOf } from '@storybook/react'
import Image from './'

storiesOf('Image', module)
  .add('displays an image', () =>
    <Image alt="cat" imageUrl="http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg" />
  )
