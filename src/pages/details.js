import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import NavBar from "../components/navbar"

class DetailsPage extends Component {
  render() {
    const { data } = this.props;

    console.log('\n\n\nheyo props: ', data);
    return (
      // <StaticQuery
      //   query={graphql`
      //     {
      //       rickAndMortyAPI {
      //         character(id: 2) {
      //           name
      //           image
      //           status
      //           species
      //         }
      //       }
      //     }
      //   `}
      //   render={data => (
      //     <span>Hey {data.character}</span>
      //   )}
      // />
      <Layout>
        <NavBar />
        <div>
          <p />
          <p>Uh oh...you need a totally different API paradigm to query
          based on props like Character ID!</p>
          <p>In fact, the "right" way to do this in GatsbyJS is to create every possible page ahead of time.</p>
          <p />
        </div>
      </Layout>
    )
  }
}

export default DetailsPage
