import React from 'react'
import {Container} from '@material-ui/core'
import {MessageList} from './MessageList'
import {Navigation} from './Navigation'

export default function App() {
  return (
    <Container>
      <MessageList />
      <Navigation />
    </Container>
  )
}
