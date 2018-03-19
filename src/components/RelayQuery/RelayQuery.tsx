import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql,
} from 'react-relay'

import environment from '../../Environment'
import RelayQueryComponent from './RelayQueryComponent'

const RelayQueryQuery = graphql`
  query RelayQueryQuery {
    viewer {
      allLinks {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`

class RelayQuery extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={RelayQueryQuery}
        variables={{}}
        render={({ error, props }: any) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            const links = props.viewer.allLinks.edges
            return <RelayQueryComponent links={links} />
          }
          return <div>Loading</div>
        }}
      />
    )
  }
}

export default RelayQuery
