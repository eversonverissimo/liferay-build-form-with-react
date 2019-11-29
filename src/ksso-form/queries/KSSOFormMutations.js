import gql from "graphql-tag";

export const SAVE_WEB_CONTENT = gql`
  mutation SaveWebContent($siteKey:String! $structuredContent:InputStructuredContent!) {
    createSiteStructuredContent(siteKey: $siteKey, structuredContent: $structuredContent){
      title
    }
  }
`;