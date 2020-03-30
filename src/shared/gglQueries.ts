import gql from 'graphql-tag';

//         repository(owner: "jrainlau", name: "jrainlau.github.io") {

export const GET_ARTICLES = gql`
    query GetArticles {

        repository(owner: "gentleen", name: "blogs.io") {
        id
        issues(filterBy: { createdBy: "gentleen"}, first: 100, states: OPEN, orderBy: {field: CREATED_AT, direction: DESC}) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            id
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
            comments (first: 100){
                totalCount
                nodes {
                  author{
                    avatarUrl                   
                    login 
                    resourcePath
                    url
                  }
                  body
                  bodyHTML
                  bodyText
                  createdAt
                }
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
