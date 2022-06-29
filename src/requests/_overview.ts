import { gql } from '@apollo/client/core'

export const GLOBAL_DATA = (block?: string) => {
  const queryString = ` query uniswapFactories {
      factories(
       ${block !== undefined ? `block: { number: ${block}}` : ``} 
       first: 1, subgraphError: allow) {
        txCount
        totalVolumeUSD
        totalFeesUSD
        totalValueLockedUSD
      }
    }`
  return gql(queryString)
}
