import gql from 'graphql-tag';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookid
        authors
        description
        title
        image
        link
      }
        }

      }
`;

