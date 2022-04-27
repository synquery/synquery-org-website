const DocsPage = async () => {
  /*
  const intl = useIntl()
  const isRightToLeft = isLangRightToLeft(mdx.frontmatter.lang)
  const lastUpdatedDate = mdx.parent.fields
    ? mdx.parent.fields.gitLogLatestDate
    : mdx.parent.mtime

  const tocItems = mdx.tableOfContents.items
  const { editContentUrl } = siteData.siteMetadata
  const { relativePath } = pageContext
  const absoluteEditPath = `${editContentUrl}${relativePath}`

  return (
    <Page dir={isRightToLeft ? "rtl" : "ltr"}>
      <PageMetadata
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
      />
      <ContentContainer>
        <Breadcrumbs slug={mdx.fields.slug} />
        <LastUpdated dir={isLangRightToLeft(intl.locale) ? "rtl" : "ltr"}>
          <Translation id="page-last-updated" />:{" "}
          {getLocaleTimestamp(intl.locale, lastUpdatedDate)}
        </LastUpdated>
        <MobileTableOfContents
          editPath={absoluteEditPath}
          items={tocItems}
          isMobile={true}
          maxDepth={mdx.frontmatter.sidebarDepth}
        />
        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </ContentContainer>
      {mdx.frontmatter.sidebar && tocItems && (
        <TableOfContents
          editPath={absoluteEditPath}
          items={tocItems}
          maxDepth={mdx.frontmatter.sidebarDepth}
        />
      )}
    </Page>
  )*/
  let create = async () => {
    return "<div> We are docs4! </div>";
  };
  let setup = async () => {};
  return { create, setup };
};
export default DocsPage;
