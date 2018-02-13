import data from './data.js'

data.fetch('./products.json').then(result => {
    console.log(result)
})

data.render({
    parent: 'body',
    child: 'dev'
})
