import gql from 'graphql-tag';

export const CREATE_NEW_ISSUE = gql`
  mutation CreateNewIssue {
    createIssue(input: {
        repositoryId: "MDEwOlJlcG9zaXRvcnkyNDgzODE4MTM=",
        title: "testing issue created"
      }) {
        clientMutationId
      }
  }
`;

// "MDU6SXNzdWU1ODgyNzU4Mjg="
export const ADD_COMMENT = gql`
  mutation AddComment($body: String!, $subjectId: String!) {
    addComment(input: {
        body: $body,
        subjectId: $subjectId
      }){
        clientMutationId
      }
  }
`;
