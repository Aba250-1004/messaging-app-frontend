import axios from 'axios';
import {getCurrentUser } from './auth.services.js'

//note: added the / at the end of this url so it doesnt need to be included before signup in axios
const API_URL = 'http://localhost:8080/api/';


export const makeConversationAndMessage = (otherUserNames,msgBody) => {
    axios.post(API_URL + 'message/new', {
        userName: getCurrentUser().userName,
        otherUserNames,
        msgBody,
    }).then((response) => {
        console.log(response)
        // return response
    })
}

export const viewConversations = () => {

    axios.get(API_URL + 'conversations/' +getCurrentUser().userName, {
        
    }).then((response) => {
        console.log(response)
        return response
    })
}