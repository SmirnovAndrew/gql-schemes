import {gql} from "@apollo/client/core";

export const TOKEN_SEARCH = gql`
    query tokens($value: String, $id: String) {
        asSymbol: tokens(
            where: { symbol_contains: $value }
            orderBy: totalValueLockedUSD
            orderDirection: desc
            subgraphError: allow
        ) {
            id
            symbol
            name
            totalValueLockedUSD
        }
        asName: tokens(
            where: { name_contains: $value }
            orderBy: totalValueLockedUSD
            orderDirection: desc
            subgraphError: allow
        ) {
            id
            symbol
            name
            totalValueLockedUSD
        }
        asAddress: tokens(where: { id: $id }, orderBy: totalValueLockedUSD, orderDirection: desc, subgraphError: allow) {
            id
            symbol
            name
            totalValueLockedUSD
        }
    }
`
