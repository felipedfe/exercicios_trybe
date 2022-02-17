import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, image } = this.props.objeto;
    const { value, measurementUnit } = this.props.objeto.averageWeight;
    const lista = [<h1 key='1'>oi</h1>, <h1 key='2'>oi</h1> ]

    return (
      <div className='pokemon'>
        <div className='info'>
          <h2>{name}</h2>
          <p>{type}</p>
          <p>Average weight: {value + measurementUnit}</p>
        </div>
        <img src={image} alt={name}></img>
        {lista}
      </div>
    )
  }
}

export default Pokemon;
