export const checkIndex = (array, answer) => {
    let deleteIndex = 0;
    array.forEach((element, index) => {
        if (element.toLowerCase() === answer) {
            deleteIndex = index + 1
        }
    })
    return deleteIndex
}