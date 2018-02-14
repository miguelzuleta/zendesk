import Data from './data.js'
import subscription from './markup/subscription.js'
import updateElements from './helpers/update.js'

Data.fetch('./products.json').then(result => {

    for (var product in result) {
        subscription('#config-page', result[product], product)
    }
    
    updateElements(result)

})
