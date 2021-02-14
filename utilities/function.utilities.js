// Takes res error and return it into a readable format 
export const resMessage = (error) => {
    return  (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString();
}

export const resConversatiionMessage = (error) => {
    return  (error.currentUser &&
        error.listOfUsers &&
        error.message) ||
        error.message || (error.conversation && error.message) ||
        error.conversation ||
        error.toString();
}