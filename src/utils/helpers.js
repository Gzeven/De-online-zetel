export const formatPrice = (number) => {
    return new Intl.NumberFormat('nl-NL', {style: 'currency', currency: 'EUR'}).format(number / 100)
    
}

export const getUniqueValues = (data, type) => {
let unique = data.map((item)=> item[type])
if(type === 'colors') {
    unique = unique.flat()
}
return ['Alles', ...new Set(unique)]
}
