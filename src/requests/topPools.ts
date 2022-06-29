import {gql} from "@apollo/client/core";

export const TOP_POOLS = gql`
    query topPools {
        pools(first: 50, orderBy: totalValueLockedUSD, orderDirection: desc, subgraphError: allow) {
            id
        }
    }
`
