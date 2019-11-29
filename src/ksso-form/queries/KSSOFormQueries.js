import gql from "graphql-tag";

export const GET_STRUCTURES_BY_SITE_KEY = gql`
  query GetStructures($siteKey:String!) {
    contentStructures(siteKey: $siteKey){
      items {
        name
        description
        siteId
        id
        contentStructureFields {
          inputControl
          name
          label
          showLabel
          dataType
          required
          options {
            label
            value
          }
          nestedContentStructureFields {
            inputControl
            name
            label
            showLabel
            dataType
            required
            options {
              label
              value
            }
            nestedContentStructureFields {
              inputControl
              name
              label
              showLabel
              dataType
              required
              options {
                label
                value
              }
              nestedContentStructureFields {
                inputControl
                name
                label
                showLabel
                dataType
                required
                options {
                  label
                  value
                }
              }
            }
          }
        }
      }
    }
  }
`;