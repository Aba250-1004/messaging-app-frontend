import axios from 'axios';
import { setItem, getItem, removeItem } from '../utilities/localStorage.utilities.js';

//note: added the / at the end of this url so it doesnt need to be included before signup in axios
const API_URL = 'http://localhost:8080/api/auth/';

//function to register user
export const register = (firstName, lastName,userName, email, password, passwordReenter) => {
    console.log("registering user")
    axios.post(API_URL + 'signup', {
        firstName,
        lastName,
        userName,
        email,
        password,
        passwordReenter
    }).then((response) => {
        console.log(response)
        // return response
    })
}

//function to login the user
export const login = (userName, password) => {
    return axios
    .post(API_URL + 'signin', {
        userName,
        password
    })
    .then((response) => {
        console.log(response)
        //if user has accessToken, set it to local storage 
        if(response.data.accessToken){
            //call our setItem funciton and pass in 'user' and response.data
            setItem('user', response.data);
        }
    })
}

//get the current user 
export const getCurrentUser = () => {
    //call getItem function and pass in user
    return getItem('user');
}

//function to logout user
export const logout = () => {
    //call removeItem function and pass in user
    removeItem('user')
}

export const deleteAccount = (userName) => {
    console.log("here is the username: "+userName)
    return axios
    .delete(API_URL + 'delete/'+userName, {
        userName
    }).then((response) => {
        logout()
    }).catch( err => {
        console.log("error at delete accout")
    })
}

export const changeEmail = (email) => {
    let userName = getCurrentUser().userName
    return axios.put(API_URL + 'editEmail/' + userName , {
        userName,
        email
    })
}

// export const changeAboutMe = (about) => {
//     let username = getCurrentUser().username
//     return axios.put(API_URL + 'aboutMe/' + username , {
//         username,
//         about
//     }).then(response => {
//         console.log(response)
//     })
// }



// export const getProfile = (username) => {
//     console.log("auth.service getprofile " + username)
//     axios.get(API_URL+ 'profile/' +username , {
//         username:username
//     }).then(response => {
//         return (response) 
//     }).catch(err => {
//         console.log(err)
//     })
// }

export const changeUsername = (newUsername) => {
    let userName = getCurrentUser().userName
    return axios.put(API_URL + 'editUsername/' + userName , {
        userName,
        newUsername
    }).then((response) => {
        console.log(response)
    })
    .catch((err)=> {
        console.log(err)
    })
}

export const changePassword = (password, newPassword, newPasswordAgain) => {
    let userName = getCurrentUser().userName
    return axios.put(API_URL + 'editPassword/'+userName , {
        userName,
        password,
        newPassword,
        newPasswordAgain
    })
}

export const checkIfUserNameExists = (userName) => {
    // console.log("middle ware user name:" + userName)
    return axios.get(API_URL+'userNameExists/'+userName, {
        userName:userName
    })
}


