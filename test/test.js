/*eslint no-unused-vars: [2, { "varsIgnorePattern": "assert|should" }]*/
var assert = require("assert")
var should = require("should")
var httpStatus = require("../")

describe("SERIES", function() {
	describe("INFORMATIONAL", function() {
		it("should be 1", function() {
			httpStatus.INFORMATIONAL.should.be.exactly(1).and.be.a.Number()
		})
	})
	describe("SUCCESSFUL", function() {
		it("should be 2", function() {
			httpStatus.SUCCESSFUL.should.be.exactly(2).and.be.a.Number()
		})
	})
	describe("REDIRECTION", function() {
		it("should be 3", function() {
			httpStatus.REDIRECTION.should.be.exactly(3).and.be.a.Number()
		})
	})
	describe("CLIENT_ERROR", function() {
		it("should be 4", function() {
			httpStatus.CLIENT_ERROR.should.be.exactly(4).and.be.a.Number()
		})
	})
	describe("SERVER_ERROR", function() {
		it("should be 5", function() {
			httpStatus.SERVER_ERROR.should.be.exactly(5).and.be.a.Number()
		})
	})
})

describe(".getSeries(statusCode)", function() {
	it("should accept a number", function() {
		httpStatus.getSeries(404).should.be.exactly(4).and.be.a.Number()
	})
	it("should accept a string", function() {
		httpStatus.getSeries("404").should.be.exactly(4).and.be.a.Number()
	})
})

describe(".isInformational(statusCode)", function() {
	it("should return true for 1XX", function() {
		for(var i=100; i<200; i++) {
			httpStatus.isInformational(i).should.be.true()
		}
	})
	it("should not return true for 2XX", function() {
		for(var i=200; i<300; i++) {
			httpStatus.isInformational(i).should.not.be.true()
		}
	})
	it("should not return true for 3XX", function() {
		for(var i=300; i<400; i++) {
			httpStatus.isInformational(i).should.not.be.true()
		}
	})
	it("should not return true for 4XX", function() {
		for(var i=400; i<500; i++) {
			httpStatus.isInformational(i).should.not.be.true()
		}
	})
	it("should not return true for 5XX", function() {
		for(var i=500; i<600; i++) {
			httpStatus.isInformational(i).should.not.be.true()
		}
	})
})

describe(".isSuccessful(statusCode)", function() {
	it("should not return true for 1XX", function() {
		for(var i=100; i<200; i++) {
			httpStatus.isSuccessful.should.not.be.true()
		}
	})
	it("should return true for 2XX", function() {
		for(var i=200; i<300; i++) {
			httpStatus.isSuccessful(i).should.be.true()
		}
	})
	it("should not return true for 3XX", function() {
		for(var i=300; i<400; i++) {
			httpStatus.isSuccessful(i).should.not.be.true()
		}
	})
	it("should not return true for 4XX", function() {
		for(var i=400; i<500; i++) {
			httpStatus.isSuccessful(i).should.not.be.true()
		}
	})
	it("should not return true for 5XX", function() {
		for(var i=500; i<600; i++) {
			httpStatus.isSuccessful(i).should.not.be.true()
		}
	})
})

describe(".isRedirection(statusCode)", function() {
	it("should not return true for 1XX", function() {
		for(var i=100; i<200; i++) {
			httpStatus.isRedirection.should.not.be.true()
		}
	})
	it("should not return true for 2XX", function() {
		for(var i=200; i<300; i++) {
			httpStatus.isRedirection.should.not.be.true()
		}
	})
	it("should return true for 3XX", function() {
		for(var i=300; i<400; i++) {
			httpStatus.isRedirection(i).should.be.true()
		}
	})
	it("should not return true for 4XX", function() {
		for(var i=400; i<500; i++) {
			httpStatus.isRedirection(i).should.not.be.true()
		}
	})
	it("should not return true for 5XX", function() {
		for(var i=500; i<600; i++) {
			httpStatus.isRedirection(i).should.not.be.true()
		}
	})
})

describe(".isClientError(statusCode)", function() {
	it("should not return true for 1XX", function() {
		for(var i=100; i<200; i++) {
			httpStatus.isClientError.should.not.be.true()
		}
	})
	it("should not return true for 2XX", function() {
		for(var i=200; i<300; i++) {
			httpStatus.isClientError.should.not.be.true()
		}
	})
	it("should not return true for 3XX", function() {
		for(var i=300; i<400; i++) {
			httpStatus.isClientError(i).should.not.be.true()
		}
	})
	it("should return true for 4XX", function() {
		for(var i=400; i<500; i++) {
			httpStatus.isClientError(i).should.be.true()
		}
	})
	it("should not return true for 5XX", function() {
		for(var i=500; i<600; i++) {
			httpStatus.isClientError(i).should.not.be.true()
		}
	})
})

describe(".isServerError(statusCode)", function() {
	it("should not return true for 1XX", function() {
		for(var i=100; i<200; i++) {
			httpStatus.isServerError.should.not.be.true()
		}
	})
	it("should not return true for 2XX", function() {
		for(var i=200; i<300; i++) {
			httpStatus.isServerError.should.not.be.true()
		}
	})
	it("should not return true for 3XX", function() {
		for(var i=300; i<400; i++) {
			httpStatus.isServerError(i).should.not.be.true()
		}
	})
	it("should not return true for 4XX", function() {
		for(var i=400; i<500; i++) {
			httpStatus.isServerError(i).should.not.be.true()
		}
	})
	it("should return true for 5XX", function() {
		for(var i=500; i<600; i++) {
			httpStatus.isServerError(i).should.be.true()
		}
	})
})
