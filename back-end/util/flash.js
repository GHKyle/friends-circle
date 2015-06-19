
module.exports = function(code, message, data) {
	
	return {
		'status': {
			'code': code,
			'message': message
		},
		'data': arguments[2] || {}
	}
}
