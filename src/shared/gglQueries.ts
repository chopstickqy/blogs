import gql from 'graphql-tag';


export const GET_ARTICLES = gql`
    query GetArticles {
      repository(owner: "jrainlau", name: "jrainlau.github.io") {
        issues(filterBy: { createdBy: "jrainlau"}, first: 100, states: OPEN, orderBy: {field: CREATED_AT, direction: DESC}) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            title
            number
            body
            createdAt
            labels(first: 5) {
                nodes {
                    color
                    name
                }
            }
            comments {
                totalCount
            }
            reactions(content: THUMBS_UP) {
                totalCount
            }
          }
        }
      }  
    }
`;

export const GET_USER_INFO = gql`
  query GetUserInfo {
    viewer {
      name
      avatarUrl
      login
    }
    rateLimit {
      limit
      cost
      remaining
      resetAt
    }
  }
`;
