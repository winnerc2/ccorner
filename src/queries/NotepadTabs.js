import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
const NotepadTabs = () => (
  <Query
    query={gql`
      {
        User
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) {
        //console.log(Object.getPrototypeOf(error))
        //console.log(error.message);
        return <p>Error :(</p>;
      }
      return data.allNotepadTabs.map(({ owner, text, lastsave}) => (
        <div>
          <p>{owner}:   last saved: {lastsave}</p>
          <textarea>{text}</textarea>
        </div>
      ));
    }}
  </Query>
);
export default NotepadTabs;