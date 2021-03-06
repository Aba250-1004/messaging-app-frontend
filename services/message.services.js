import axios from 'axios';
import {getCurrentUser } from './auth.services.js'
import { getItem, removeItem } from '../utilities/localStorage.utilities.js';

//note: added the / at the end of this url so it doesnt need to be included before signup in axios
const API_URL = 'https://amc-messenger-backend.herokuapp.com/api/';
// const API_URL = "http://localhost:8080/api/"




export const makeConversationAndMessage = (otherUserNames,msgBody) => {
    console.log("hit make covnersation")
    console.log(otherUserNames)
    console.log(msgBody)
    axios.post(API_URL + 'message/new', {
        userName: getCurrentUser().userName,
        otherUserNames,
        msgBody,
    }).then((response) => {
        console.log(response)
        return response
    })
}

export const viewConversations = () => {
    return axios.get(API_URL + 'conversations/' +getCurrentUser().userName, {
        
    })
}

export const viewCurrentConversation = () => {
    console.log("hit view current convo")
    console.log(getCurrentConversation())
    return axios.get(API_URL + 'message/'+getCurrentConversation(), {
        
    })
}

export const sendMessageToExistingGroup = (otherUserNames,msgBody) => {
    return axios.post(API_URL + 'message', {
        userName: getCurrentUser().userName,
        otherUserNames,
        msgBody
    })
}

export const getCurrentConversation = () => {
    //call getItem function and pass in user
    return getItem('conversationId');
}

//function to logout user
export const removeCurrentConversation = () => {
    //call removeItem function and pass in user
    removeItem('conversationId')
}