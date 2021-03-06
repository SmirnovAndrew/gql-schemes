import { gql } from '@apollo/client/core'

const GLOBAL_TRANSACTIONS = gql`
    query transactions($address: Bytes!) {
        mintsAs0: mints(
            first: 500
            orderBy: timestamp
            orderDirection: desc
            where: { token0: $address }
            subgraphError: allow
        ) {
            timestamp
            transaction {
                id
            }
            pool {
                token0 {
                    id
                    symbol
                }
                token1 {
                    id
                    symbol
                }
            }
            owner
            sender
            origin
            amount0
            amount1
            amountUSD
        }
        mintsAs1: mints(
            first: 500
            orderBy: timestamp
            orderDirection: desc
            where: { token0: $address }
            subgraphError: allow
        ) {
            timestamp
            transaction {
                id
            }
            pool {
                token0 {
                    id
                    symbol
                }
                token1 {
                    id
                    symbol
                }
            }
            owner
            sender
            origin
            amount0
            amount1
            amountUSD
        }
        swapsAs0: swaps(
            first: 500
            orderBy: timestamp
            orderDirection: desc
            where: { token0: $address }
            subgraphError: allow
        ) {
            timestamp
            transaction {
                id
            }
            pool {
                token0 {
                    id
                    symbol
                }
                token1 {
                    id
                    symbol
                }
            }
            origin
            amount0
            amount1
            amountUSD
        }
        swapsAs1: swaps(
            first: 500
            orderBy: timestamp
            orderDirection: desc
            where: { token1: $address }
            subgraphError: allow
        ) {
            timestamp
            transaction {
                id
            }
            pool {
                token0 {
                    id
                    symbol
                }
                token1 {
                    id
                    symbol
                }
            }
            origin
            amount0
            amount1
            amountUSD
        }
        burnsAs0: burns(
            first: 500
            orderBy: timestamp
            orderDirection: desc
            where: { token0: $address }
            subgraphError: allow
        ) {
            timestamp
            transaction {
                id
            }
            pool {
                token0 {
                    id
                    symbol
                }
                token1 {
                    id
                    symbol
                }
            }
            owner
            amount0
            amount1
            amountUSD
        }
        burnsAs1: burns(
            first: 500
            orderBy: timestamp
            orderDirection: desc
            where: { token1: $address }
            subgraphError: allow
        ) {
            timestamp
            transaction {
                id
            }
            pool {
                token0 {
                    id
                    symbol
                }
                token1 {
                    id
                    symbol
                }
            }
            owner
            amount0
            amount1
            amountUSD
        }
    }
`
