import React from 'react'
import { storiesOf } from '@storybook/react'
import HomePage from './'

storiesOf('HomePage', module)
  .add('default', () =>
    <HomePage posts={[{
      imageUrl: "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Natural-Dog-Law-2-To-dogs%2C-energy-is-everything.jpg?itok=Z-ujUOUr",
      avatarUrl: "http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg",
      captionText: "OMG BEST DAY EVAR!!!!!!!"
    },
    {
      imageUrl: "https://i.ytimg.com/vi/oqNKD9YVe4U/maxresdefault.jpg",
      avatarUrl: "http://www.telegraph.co.uk/content/dam/pets/2017/05/08/pitbull-xlarge.jpg",
      captionText: "You wot mate?"
    }

    ]} />
  )
