import Data from './data.js'

const planOptions = data => {
    let selectOptions = ''
    let products = data.product_types

    for(let option in products) {
        selectOptions += `<option value="${option}">
                            ${products[option].name}
                          </option>
                         `
    }

    return selectOptions
}

const subscription = (parentElement, data) => {
    let { name, label, item, _default } = data.product_specs
    let defaultCost = data.product_types[_default.plan].cost

    let productMarkup = `<div class="product">
                            <h3>${name}</h3>
                            <div class="edit-plan">
                                <div>
                                    <select id="planInput">
                                        ${planOptions(data)}
                                    </select>
                                </div>
                                <div class="label">
                                    <label for="planInput">${label}</label>
                                </div>
                            </div>

                            <div class="edit-seats">
                                <div>
                                    <input id="seats-input" type="text" value=${_default.amount} />
                                </div>
                                <div class="label">
                                    <label for="seats-input">${item}</label>
                                </div>
                            </div>

                            <div class="price">
                                <div id="cost-value">$${_default.amount * defaultCost}</div>
                                <div class="label">Price</div>
                            </div>
                         </div>`

    Data.render({
        parent: parentElement,
        child: productMarkup
    })
}

Data.fetch('./products.json').then(result => {

    for (let sub in result) {
        subscription('#config-page', result[sub])
    }

})

