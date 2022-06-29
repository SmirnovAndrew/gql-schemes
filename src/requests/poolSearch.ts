import {gql} from "@apollo/client/core";

export const POOL_SEARCH = gql`
    query pools($tokens: [Bytes]!, $id: String) {
        as0: pools(where: { token0_in: $tokens }, subgraphError: allow) {
            id
            feeTier
            token0 {
                id
                symbol
                name
            }
            token1 {
                id
                symbol
                name
            }
        }
        as1: pools(where: { token1_in: $tokens }, subgraphError: allow) {
            id
            feeTier
            token0 {
                id
                symbol
                name
            }
            token1 {
                id
                symbol
                name
            }
        }
        asAddress: pools(where: { id: $id }, subgraphError: allow) {
            id
            feeTier
            token0 {
                id
                symbol
                name
            }
            token1 {
                id
                symbol
                name
            }
        }
    }
`
