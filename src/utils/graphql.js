import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      company
      position
      createdAt
      imageUrl
    }
  }
`;

export const LOGIN_STARTUP = gql`
  mutation startupLogin($email: String!, $password: String!) {
    startupLogin(email: $email, password: $password) {
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
  mutation startupRegister(
    $email: String!
    $company: String!
    $password: String!
    $confirmPassword: String!
    $industry: String!
    $imageUrl: String!
    $location: String!
    $growthStage: String!
    $fundingStage: String!
  ) {
    startupRegister(
      registerInput: {
        username: $username
        email: $email
        company: $company
        password: $password
        confirmPassword: $confirmPassword
        industry: $industry
        imageUrl: $imageUrl
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
