//import axios from 'axios'
import  axios from 'axios'

// Retrieves translated phrases by language
export async function getTranslations({language}){
    const res = await axios.get(`http://localhost:8080/vote?language=${language}`, {
        language:language
    })
    return res.data
}

// export


// Modify the Like
export async function addLike({id,decrement}){
    const res = await axios.post('https:localhost:8080/translations/like', {
        id: id,
        dec: decrement
    })
    return res
}
// Modify the Dislike
export async function addDislike({id,decrement}){
    const res = await axios.post('https:localhost:8080/translations/like', {
        id: id,
        dec: decrement
    })
    return res
}

// Adds a new translation
export async function addTranslation({segment,language,translation}){
    const res = await axios
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

export async function searchTranslation({englishPhrase}){
    const res = await axios.get(`http://localhost:8080/translations/search?englishPhrase=${englishPhrase}`)
    return res.data
}