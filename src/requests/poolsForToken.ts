import { gql } from '@apollo/client/core'

export const POOLS_FOR_TOKEN = gql`
    query topPools($address: Bytes!) {
        asToken0: pools(
            first: 200
            orderBy: totalValueLockedUSD
            orderDirection: desc
            where: { token0: $address }
            subgraphError: allow
        ) {
            id
        }
        asToken1: pools(
            first: 200
            orderBy: totalValueLockedUSD
            orderDirection: desc
            where: { token1: $address }
            subgraphError: allow
        ) {
            id
        }
    }
`
