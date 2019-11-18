import React, { Component } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import NavBar from "../components/navbar"

// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
  {
    rickAndMortyAPI {
      character(id: 1) {
        name
        image
        status
        species
      }
    }
  }
`
class IndexPage extends Component {
  render() {
    const {
      rickAndMortyAPI: { character },
    } = this.props.data

    return (
      <Layout>
        <NavBar />
        <div style={{ textAlign: "center", width: "600px", margin: "50px auto" }}>
          <h1>{character.name}, Materialized from an API</h1>
          <p>Rick & Morty API data loads at build time. Like our Contentful data, except full of whatever the cool kids are into.</p>
          <div>
            <img
              src={character.image}
              alt={character.name}
              style={{ width: 300 }}
            />
          </div>

          <div>
            <h3>Some fun facts about {character.name}:</h3>
            <p>
              <b>{character.name}'s status:  </b>{character.status}
            </p>
            <p>
              <b>{character.name}'s species:  </b>{character.species}
            </p>
            <p>
              <b>{character.name}'s favorite Static Site Builder:  </b>GatsbyJS
            </p>
          </div>

          <h2>
            <Link to="/search/">Rick yourself over to the Search Page!</Link>
          </h2>
          {/* <h2>Image of Rick's pupper</h2>
          <p>This will come from a request on the client</p> */}
        </div>
      </Layout>
    )
  }
}
export default IndexPage