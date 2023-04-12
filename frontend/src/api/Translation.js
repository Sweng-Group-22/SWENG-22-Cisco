//import axios from 'axios'
import Axios from 'axios'


export async function getTranslations(){
    const res = await Axios.get('http://localhost:8080/translations')
    return res
}

export async function addLike(id,decrement){
    const res = await Axios.post('https:localhost:8080/translations/like', {
        id: id,
        dec: decrement
    })
    return res
}

export async function addDislike(id,decrement){
    const res = await Axios.post('https:localhost:8080/translations/like', {
        id: id,
        dec: decrement
    })
    return res
}

export async function addTranslation(segment,language,translation){
    const res = await Axios
	.post('http://localhost:8080/translates', {
		// Data to be sent to the server
		segment: segment,
		language: language,
		translation: translation
	})
	.then(response => {
		console.log(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});
    return res
}