import React from 'react';
import { graphql } from 'gatsby';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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

const APOLLO_QUERY = gql`
  {
    dog(breed: "frise") {
      breed
      src: displayImage
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

    <Query query={APOLLO_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <span>Loading...</span>;
        if (error) return <p>{error.message}</p>;

        return (
          <img src={data.dog.src} alt={data.dog.breed} style={{ width: 300 }} />
        );
      }}
    </Query>
  </div>
);
