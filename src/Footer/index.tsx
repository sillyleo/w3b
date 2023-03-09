import { GraphQLClient, gql } from "graphql-request";
import React, { useEffect } from "react";
import { stitchesDarkTheme, styled } from "src/stitches.config";
import Text from "src/Text";

// Get content from Hygraph CMS

const hygraph = new GraphQLClient(
  "https://ap-northeast-1.cdn.hygraph.com/content/clf0ox8k023ql01t56zef5n6w/master"
);

const QUERY = gql`
  query Footers {
    footers {
      id
      sectionTitle
      sectionContent {
        icon {
          url
        }
        linkTitle
        url
      }
    }
  }
`;

export default function Footer({ isDark }: { isDark?: boolean }) {
  // use async function to get footer data from Hygraph CMS
  // and make it available to the footer component
  async function getFooterData() {
    const data = await hygraph.request(QUERY);
    return data;
  }

  // use React hook to get footer data
  const [footerData, setFooterData] = React.useState(null as any);

  useEffect(() => {
    getFooterData().then((data) => {
      setFooterData(data);
    });
  }, []);

  return (
    <FooterContainer className={isDark ? stitchesDarkTheme : "defaultColor"}>
      {footerData &&
        footerData.footers.map(
          (
            section: {
              sectionTitle: string | undefined;
              sectionContent: any[];
            },
            i: React.Key
          ) => (
            <FooterSection key={i}>
              <Text size="subtitle1">{section.sectionTitle}</Text>
              <FooterContent>
                {section.sectionContent.map((sectionContent, j) => {
                  return (
                    <FooterLink key={j}>
                      <a href={sectionContent.url}>
                        {sectionContent.icon && (
                          <img alt="icon" src={sectionContent.icon.url} />
                        )}

                        {sectionContent.linkTitle}
                      </a>
                    </FooterLink>
                  );
                })}
              </FooterContent>
            </FooterSection>
          )
        )}
    </FooterContainer>
  );
}

const FooterContainer = styled("div", {
  boxSizing: "border-box",
  maxWidth: "1000px",
  m: "0 auto",
  p: 48,
  pb: 128,
  pt: 0,
  gap: 48,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  width: "100%",
  color: "$baseText",
  right: "0%",
  position: "relative",

  "@sm": {
    display: "grid",
    right: "-5%",
    position: "relative",

    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@md": {
    right: "-12%",
    position: "relative",

    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@lg": {
    right: "-2.5%",
    position: "relative",

    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  "& a": {
    color: "$baseText",
    opacity: 0.6,
    fontFamily: "$body",
    textDecoration: "none",
  },
  "& a:hover": {
    opacity: 1,
  },
});

const FooterSection = styled("div", {
  flexGrow: 1,
  m: 0,
  p: 0,
  display: "inline-flex",
  flexDirection: "column",
  gap: 16,
});
const FooterContent = styled("ul", {
  m: 0,
  flex: 1,
  p: 0,
  display: "inline-flex",
  flexDirection: "column",
  gap: 16,
});
const FooterLink = styled("li", {
  m: 0,
  p: 0,
  listStyle: "none",
  "& a": {
    display: "inline-flex",
    gap: 4,
    alignItems: "center",
  },
  "& img": {
    filter: "invert(1)",
  },
  [`.${stitchesDarkTheme} & img`]: {
    filter: "invert(0)",
  },
});
