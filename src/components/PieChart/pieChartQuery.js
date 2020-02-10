import { gql } from "apollo-boost";

export const chartQuery = gql`
  query($nid: String) {
    nodeQuery(
      filter: {
        conditions: [
          { operator: EQUAL, field: "type", value: ["page"] }
          { operator: EQUAL, field: "nid", value: [$nid] }
        ]
      }
    ) {
      count
      entities {
        ... on NodePage {
          nid
          title
          fieldPieChart {
            entity {
              ... on ParagraphPieChart {
                fieldColors
                fieldLabels
                fieldDescription {
                  processed
                }
                fieldValues
              }
            }
          }
        }
      }
    }
  }
`;
