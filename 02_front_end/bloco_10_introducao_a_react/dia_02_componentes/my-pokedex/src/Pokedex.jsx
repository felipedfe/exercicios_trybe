import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types'

class Pokedex extends React.Component{
  render() {
    const { pokeData } = this.props;

    return (
      pokeData.map((elemento) => <Pokemon key={elemento.id} objeto={elemento} />)
    )
  }
}

Pokemon.propTypes = {
  objeto: PropTypes.object.isRequired
}

export default Pokedex;
