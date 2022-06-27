const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/results', (req, res) => {
    const url = 'https://www.theguardian.com/uk'
    axios(url)
    .then(response => {
        const html = response.data 
        const $ = cheerio.load(html)
        const articles = []

        $('.fc-item__title', html).each(function(){
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title, 
                url 
            })
        })
        // console.log(articles)
        res.json(articles)
    }).catch(err => console.log(err))
})

app.listen(8000, () => console.log(`server running on port 8000`))