import { gql } from '@apollo/client/core'

// NOT USED !!
// export const PRICES_BY_BLOCK = (tokenAddress: string, blocks: any) => {
//   let queryString = 'query blocks {'
//   queryString += blocks.map(
//     (block: any) => `
//       t${block.timestamp}:token(id:"${tokenAddress}", block: { number: ${block.number} }, subgraphError: allow) {
//         derivedETH
//       }
//     `
//   )
//   queryString += ','
//   queryString += blocks.map(
//     (block: any) => `
//       b${block.timestamp}: bundle(id:"1", block: { number: ${block.number} }, subgraphError: allow) {
//         ethPriceUSD
//       }
//     `
//   )
//
//   queryString += '}'
//   return gql(queryString)
// }

const PRICE_CHART = gql`
    query tokenHourDatas($startTime: Int!, $skip: Int!, $address: Bytes!) {
        tokenHourDatas(
            first: 100
            skip: $skip
            where: { token: $address, periodStartUnix_gt: $startTime }
            orderBy: periodStartUnix
            orderDirection: asc
        ) {
            periodStartUnix
            high
            low
            open
            close
        }
    }
`
