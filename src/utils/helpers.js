export function validateEmail(email) {
	var exReEmail =
		/^(([^<>()[\]\\.,:\s@\"]+(\.[^<>()[\]\\.,:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return exReEmail.test(email.trim())
}

export function validatePassword(password) {
	var exRePass = /^([\s\S\d]{8,15})$/
	return exRePass.test(password.trim())
}

export function validateText(text) {
	var exText = /^[ñÑáéíóúÁÉÍÓÚa-zA-Z'\s]{1,40}$/
	return exText.test(text.trim())
}

export function amountWithCommas(amount) {
	return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function formatDate(date, time) {
	const months = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre'
	]
	const _date = time ? date : date.substring(0, 10)
	const _setDate = new Date(_date)
	const day = time ? _setDate.getDate() : _setDate.getDate()
	const month = _setDate.getMonth()
	const year = _setDate.getFullYear()
	const _formatedDate = `${day} de ${months[month]}, ${year}`
	return _formatedDate
}
