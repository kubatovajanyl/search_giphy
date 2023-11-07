const API = 'https://api.giphy.com/v1/gifs/search?'
const key = 'api_key=epBDyvqZ1Uc5RIvOIyk82vvVzxfRFaRq'
const limit = '&limit='
const params = '&q='
const form = document.querySelector('form')
const count = document.querySelector('#count')
const output = document.querySelector('#output')
const input = document.querySelector('#inp')

const searchGiphy = async () => {
    let url = API + key + limit + count.value + params + input.value
    const req = await fetch(url)
    const res = await req.json()
    renderGiphys(res.data);
    input.value = ''
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchGiphy()
})

const renderGiphys = (data) => {
    output.innerHTML = ''
    data.length > 0 ?
        data.map(el => {
            // console.log(el);
            const card = document.createElement ('div')
            card.classList.add ('card')
            const title = document.createElement ('h3')
            const giff = document.createElement ('iframe')

            title.textContent = el.title.length > 15 ? el.title.slice(0, 15) + '...' : el.title
            title.title = el.title
            giff.src = el.embed_url

            card.append(giff, title)
            output.append(card)
        })
        :
        output.innerHTML = `<h2>По вашему запросу ничего не найдено... .</h2>`
}




