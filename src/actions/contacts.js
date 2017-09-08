import store from '../store';
import axios from 'axios';

export function fetchContacts(){
    return axios.get('/contacts').then(function(response){
        store.dispatch({
            type:'FETCH_CONTACTS',
            contacts: response.data
        })
    })
}
export function fetchContactDetails(id){
    return axios.get(`/contacts/${id}`).then(function(response){
        store.dispatch({
            type:'FETCH_DETAILS',
            details: response.data
        })
    })
}