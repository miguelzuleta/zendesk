const updateElements = result => {

    for (let product in result) {
        let productType = result[product]
        let productSelector = `[data-product="${product}"]`

        let itemInput = document.querySelector(`${productSelector} .item-input`)
        let planInput = document.querySelector(`${productSelector} .plan-input`)
        let planPrice = document.querySelector(`${productSelector} .price .value`)

        planInput.value = productType['product_specs']['_default']['plan']

        let setNewPrice = () => {
            let planCost = productType['product_types'][planInput.value]['cost']
            planPrice.innerHTML = planCost * itemInput.value
        }
        
        itemInput.addEventListener('keyup', setNewPrice)
        planInput.addEventListener('change', setNewPrice)
    }
    
}

export default updateElements
