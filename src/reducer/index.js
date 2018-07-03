import { SET_USER } from '../action';

const defaultUser = {
    id : 0,
    ldapId : ''
}

const userApp = (user = defaultUser, action) => {
    switch(action.type){
        case SET_USER :
            return Object.assign({}, user, action.user);
        default :
            return user;

    }
}

export default userApp;