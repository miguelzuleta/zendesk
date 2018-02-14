import Data from '../data.js'

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

const subscription = (parentElement, data, product) => {
    let { name, label, item, _default } = data.product_specs
    let defaultCost = data.product_types[_default.plan].cost

    let productMarkup = `<div class="product" data-product="${product}">
                            <h3>${name}</h3>
                            <div class="edit-plan">
                                <div>
                                    <select id="${product}-label" class="plan-input">
                                        ${planOptions(data)}
                                    </select>
                                </div>
                                <div class="label">
                                    <label for="${product}-label">${label}</label>
                                </div>
                            </div>

                            <div class="edit-item">
                                <div>
                                    <input id="${product}-input" class="item-input" type="text" value=${_default.amount} />
                                </div>
                                <div class="label">
                                    <label for="${product}-input">${item}</label>
                                </div>
                            </div>

                            <div class="price">
                                <div id="cost-value">
                                    <span class="currency">$</span>
                                    <span class="value">${_default.amount * defaultCost}</span>
                                </div>
                                <div class="label">Price</div>
                            </div>
                         </div>`

    Data.render({
        parent: parentElement,
        child: productMarkup
    })
}

export default subscription

