const feed = document.querySelector('#feed')

fetch('http://localhost:8000/results')
.then(response => response.json())
.then(data => {
    data.forEach(article => {
        const articleItem = `<a href="${article.url}">${article.title}</a>`
        feed.insertAdjacentHTML("beforeend", articleItem)
    })
})