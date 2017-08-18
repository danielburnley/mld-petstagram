import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from './'

storiesOf('Icon', module)
  .add('heart - inactive', () => <Icon name="heart" active={false} />)
  .add('heart - active', () => <Icon name="heart" active={true} />)
  .add('comment - inactive', () => <Icon name="comment" active={false} />)
  .add('comment - active', () => <Icon name="comment" active={true} />)

