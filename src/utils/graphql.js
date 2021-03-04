import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      company
      position
      createdAt
      username
    }
  }
`;

export const LOGIN_STARTUP = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      company
      createdAt
      token
      imageUrl
      industry
      location
      growthStage
      fundingStage
    }
  }
`;

export const REGISTER_STARTUP = gql`
  mutation register(
    $email: String!
    $company: String!
    $password: String!
    $confirmPassword: String!
    $imageUrl: String!
    $industry: String!
    $location: String!
    $growthStage: String!
    $fundingStage: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        company: $company
        password: $password
        confirmPassword: $confirmPassword
        imageUrl: $imageUrl
        industry: $industry
        location: $location
        growthStage: $growthStage
        fundingStage: $fundingStage
      }
    ) {
      id
      email
      company
      createdAt
      token
      imageUrl
      industry
      location
      growthStage
      fundingStage
    }
  }
`;
