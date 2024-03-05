const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('eda78c52fd7a4440984c6671328d2307')

function getTopHeadlines() {
    newsapi.v2.topHeadlines({
        sources: 'bbc-news,the-verge',
        q: 'bitcoin',
        category: 'business',
        language: 'en',
        country: 'us'
    }).then(response => {
        console.log(response)
    })
}

function getEverything() {
    newsapi.v2.everything({
        q: 'bitcoin',
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com',
        from: '2017-12-01',
        to: '2017-12-12',
        language: 'en',
        sortBy: 'relevancy',
        page: 2
    }).then(response => {
        console.log(response)
    })
}

const getSources = new Promise((resolve, reject) => {
    newsapi.v2.sources({
        category: 'technology',
        language: 'en',
        country: 'us',
        page: 1
    }).then(response => {
        console.log('\n***************NEWS**************')
        // console.log(response.sources.description)
        let jsonArray = response.sources
        for(let i = 0; i < jsonArray.length - 1; i++) {
            console.log("\n" + i + ") " + jsonArray[i].description)
            console.log("______________________________________________________________________________________________" +
            "______________________________________________________________________________")
        }
        resolve()
    }).catch(() => {
        console.log("Error: News Data not found.")
        reject()
    })
})

module.exports = getSources