import { gql } from '@apollo/client';


export const CREATE_PLAYER = gql `
mutation CreatePlayer($input: PlayerInput!) {
    createPlayer(input: $input) {
      _id
      phone
      email
      gamerTag
      name
    }
  }`

  export const DELETE_PLAYER = gql `
  mutation DeletePlayer($deletePlayerId: ID!) {
    deletePlayer(id: $deletePlayerId)
  }`