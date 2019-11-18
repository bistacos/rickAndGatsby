import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import NavBar from "../components/navbar"
import DataTable from "../components/table"
import { Button } from "reactstrap"
import axios from "axios"

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
  state = {
    loading: false,
    error: false,
    charactersFetched: false,
    characters: null
  }

  render() {
    const {
      rickAndMortyAPI: { characters },
    } = this.props.data

    console.log('first: characters: ', characters);
    return (
      <Layout>
        <NavBar />
        <h1>Search Rick and Morty Characters</h1>
        {
          characters ? (
            <div>
              <p>
                Looks like our GraphQL CMS API returned successfully! Otherwise, you'd be seeing different content.
                <br />
                <br />
                To prove it, here are some characters we got back:&nbsp;
                {characters.results.slice(0,20).map(char => (
                  <span>{char.name}, </span>
                ), 20)} ...and more!
              </p>
              <div hidden={this.state.charactersFetched}>
                <Button onClick={() => this.fetchCharacters()}>Bulk Fetching in GraphQL is a pain...Fetch Everybody via Axios</Button>
              </div>
              <br />
            </div>
          ) : (
            <h3>If you're seeing this, it's because the API didn't return anything.</h3>
          )
        }
        { this.state.characters ? (
            <DataTable
              data={this.state.characters}
            />
          ) : (
            <DataTable
              data={characters}
            />
          )
        }
        <br />
        <Link to="/">Rick yourself back to the homepage</Link>
        <br />
        <br />
      </Layout>
    )
  }

  // This data is fetched at run time on the client.
  fetchCharacters = () => {
    this.setState({ loading: true })
    let charIds = '1'
    for (let i = 2, l = 493; i < l; i++) {
      charIds += `,${i}`;
    }
    axios
      .get(`https://rickandmortyapi.com/api/character/${charIds}`)
      .then(characters => {
        console.log('\n\n\ncharacters: ', characters);
        const {
          data
        } = characters
        this.setState({
          loading: false,
          charactersFetched: true,
          characters: {...data, results: data} ,
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }
}

export default SearchPage
