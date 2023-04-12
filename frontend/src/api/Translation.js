import Axios from 'axios'


export async function getTranslations(){
    return await Axios.get('http://localhost:8080/translations').then(res => res.data)
}