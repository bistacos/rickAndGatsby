import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import NavBar from "../components/navbar"
import DataTable from "../components/table";

export const GatsbyQuery = graphql`
  {
    rickAndMortyAPI {
      characters {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          status
          gender
          species
          type
        }
      }
    }
  }
`

class SearchPage extends Component {
  render() {
    const {
      rickAndMortyAPI: { characters },
    } = this.props.data

    return (
      <Layout>
        <NavBar />
        <h1>Search Rick and Morty Characters</h1>
        {
          characters ? (
            <p>
              Looks like our CMS API returned successfully! Here are some characters we got back from it:&nbsp;
              {characters.results.slice(0,20).map(char => (
                <span>{char.name}, </span>
              ), 20)} ...and more!
            </p>
          ) : (
            <h3>If you're seeing this, it's becauxse the API didn't return anything.</h3>
          )
        }
        <DataTable
          data={characters}
        />
        <p></p>
        <Link to="/">Rick yourself back to the homepage</Link>
      </Layout>
    )
  }
}

export default SearchPage
