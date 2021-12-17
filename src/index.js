import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './ApolloClient'
import { Weather } from './Weather'
import './index.css'

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Weather />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
