import gql from "graphql-tag";


export const typeDefs = gql`
    type Query {
    users: [Users]!
    step:Int
  }

  type Users{
    _id: String,
    name: String,
    email: String,
    time:String,
  }
`;

export const resolvers = {};