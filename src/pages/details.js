import React, { Component } from "react"
import { Button } from "reactstrap"
import { Link } from "gatsby"
import axios from "axios"
import Layout from "../components/layout"
import NavBar from "../components/navbar"

class DetailsPage extends Component {
  state = {
    loading: false,
    error: false,
    character: null
  }

  // componentDidMount() {
  //   this.fetchCharacter(this.props.location.state.id)
  // }

  render() {
    return (
      <Layout>
        <NavBar />
      {
        this.state.character ? (
          <div>
            {this.state.loading ? (
              <p>Please hold, character incoming!</p>
            ) : this.state.character ? (
              <>
                <br />
                <h2>{`${this.state.character.name}!`}</h2>
                <img src={this.state.character.image} alt={`cute random `} style={{ maxWidth: 300 }} />
                <h3>Episode: {this.state.character.episode[0].slice(this.state.character.episode[0].lastIndexOf('/') + 1)}</h3>
                <h3>Gender: {this.state.character.gender}</h3>
                <h3>Location: {this.state.character.location.name}</h3>
                <h3>Origin: {this.state.character.origin.name}</h3>
                <h3>Species: {this.state.character.species}</h3>
                <h3>Status: {this.state.character.status}</h3>
                { this.state.character.type ? <h3>Type: {this.state.character.type}</h3> : null }
              </>
            ) : (
              <p>
                God dammit Morty, you broke the Character-fetching API!!
                Now we have to throw an error in every possible dimension
                before our non-existence to developers of virtual applications nullifies our very existence!!
              </p>
            )}
          </div>
        ) : (
          <div>
            <p />
            <p>Uh oh...you need a totally different API paradigm to query
            based on props like Character ID!</p>
            <p>In fact, the "right" way to do this in GatsbyJS is to create every possible page permutation ahead of time.</p>
            <p>Or...fetch the data from a Client-side API call, which will not take advantage of pre-building or SSR.</p>
            <p />
            <div hidden={this.state.character}>
              <Button onClick={() => this.fetchCharacter(this.props.location.state.id)}>Rick Up Your Character...Client-Side</Button>
            </div>
          </div>
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
  fetchCharacter = (id) => {
    this.setState({ loading: true })
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(character => {
        console.log('\n\ngot a character! ', character)
        const {
          data
        } = character
        this.setState({
          loading: false,
          character: data,
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }
}

export default DetailsPage