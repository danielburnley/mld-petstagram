import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './'

storiesOf('Header', module)
  .add('displays the header', () =>
    <Header />
  )
