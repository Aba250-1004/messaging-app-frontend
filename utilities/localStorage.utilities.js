//Get items from local storage
export const getItem = (key) => {
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key))
    }
    return null;
}

//Set(save) items from local storage
export const setItem = (key,data) =>{
    return localStorage.setItem(key, JSON.stringify(data))
}

//Remove item from local storage, also removes data even though we are just passing "key"
export const removeItem = (key) => {
    return localStorage.removeItem(key)
}