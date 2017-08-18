import React from 'react'
import { storiesOf } from '@storybook/react'
import CaptionText from './'

storiesOf('CaptionText', module)
  .add('displays the text', () =>
    <CaptionText text="Caption text goes here" />
  )
