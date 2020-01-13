const collObj = {
    poemList: 'poem-title',
    poemOne: 'poem-content',
}

export function getColl(key){
    return collObj[key]
}