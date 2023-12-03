const setItem = (key, data) => {
	try {
		localStorage.setItem(key, data)
	} catch (error) {
		console.log('Error saving data')
	}
}
 const getItem = (key) => {
	try {
		return localStorage.getItem(key)
	} catch (error) {
		console.log('Error getting data')
	}
}
const removeItem =(key) => {
	try {
		localStorage.removeItem(key)
	} catch (error) {
		console.log('error removing data');
	}
}

export  {setItem , getItem , removeItem}