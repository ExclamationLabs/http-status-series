var _series = {
	"INFORMATIONAL": 1,
	"SUCCESSFUL": 2,
	"REDIRECTION": 3,
	"CLIENT_ERROR": 4,
	"SERVER_ERROR": 5
}

function _getSeries(statusCode) {
	return Math.floor(statusCode / 100)
}

module.exports = {
	"INFORMATIONAL": _series.INFORMATIONAL,
	"SUCCESSFUL": _series.SUCCESSFUL,
	"REDIRECTION": _series.REDIRECTION,
	"CLIENT_ERROR": _series.CLIENT_ERROR,
	"SERVER_ERROR": _series.SERVER_ERROR,
	"getSeries": function(statusCode) {
		return _getSeries(statusCode)
	},
	"isInformational": function(statusCode) {
		return _getSeries(statusCode) === _series.INFORMATIONAL
	},
	"isSuccessful": function(statusCode) {
		return _getSeries(statusCode) === _series.SUCCESSFUL
	},
	"isRedirection": function(statusCode) {
		return _getSeries(statusCode) === _series.REDIRECTION
	},
	"isClientError": function(statusCode) {
		return _getSeries(statusCode) === _series.CLIENT_ERROR
	},
	"isServerError": function(statusCode) {
		return _getSeries(statusCode) === _series.SERVER_ERROR
	}
}
