import React from 'react';
import { graphql } from 'gatsby';

// when gatsby runs, it wii run this graphql query
export const GATSBY_QUERY = graphql`
  {
    rickAndMorty {
      character(id: 1) {
        name
        image
      }
    }
  }
`;

// gatsby will pass query in as a data prop
export default ({
  data: {
    rickAndMorty: { character },
  },
}) => (
  <div style={{ textAlign: 'center', width: 600, margin: '50px auto' }}>
    <h1>Hello {character.name}</h1>
    <img src={character.image} alt={character.name} style={{ width: 300 }} />
  </div>
);
