import axios from 'axios'
import Axios from 'axios'


export function getTranslations(){
    return Axios.get('http://localhost:8080/translations').then(res => res.data)
}

export function addLike(id,decrement){
    return Axios.post('https:localhost:8080/translations/like', {
        id: id,
        dec: decrement
    }).then(res => res.data)
}

export function addDislike(id,decrement){
    return Axios.post('https:localhost:8080/translations/like', {
        id: id,
        dec: decrement
    }).then(res => res.data)
}