import { gql } from "@apollo/client";

export const GET_BET_EVENTS = gql`
  query {
    newBetEntities(orderBy: timestamp, orderDirection: desc) {
      id
      betCreator
      total
      betAmount
      timestamp
    }
    newBetResponseEntities(orderBy: timestamp, orderDirection: desc) {
      id
      betResponder
      total
      responseAmount
      timestamp
    }
    payoutEntities(orderBy: timestamp, orderDirection: desc) {
      id
      bitcoinPrice
      winner
      winAmount
      timestamp
    }
    payoutPushEntities(orderBy: timestamp, orderDirection: desc) {
      id
      bitcoinPrice
      totalWasPushed
      timestamp
    }
  }
`;
