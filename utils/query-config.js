const markdownQueryConfig = [

    {
        section: `site`,
        indexName: `site`,
        niceName: `Site`,
    },
]

module.exports = {
    defaultMarkdownSection: `site`,
    markdownQueryConfig,
    searchConfig: markdownQueryConfig
        .reduce((acc, { indexName, niceName }) => {
            acc[indexName] = niceName
            return acc
        }, {}),
}
