HTTP Status Series
==================
A simple utility for checking HTTP status codes.

Inspired by `HttpStatus` in the [Spring Framework](https://spring.io/).

Install
-------
```js
npm install http-status-series
```

API
---

### Constants

| Constant      | Value |
|---------------|-------|
| INFORMATIONAL |   1   |
| SUCCESSFUL    |   2   |
| REDIRECTION   |   3   |
| CLIENT_ERROR  |   4   |
| SERVER_ERROR  |   5   |

### Methods

#### getSeries(statusCode)
Returns the series of the statusCode.

##### Example
```js
httpStatus.getSeries(200) => 2
```

#### isInformational(statusCode)
Returns `true` if the HTTP status series is informational (1XX).

##### Example
```js
httpStatus.isInformational(100)   => true
httpStatus.isInformational("100") => true
httpStatus.isInformational(200)   => false
httpStatus.isInformational("200") => false
```

#### isSuccessful(statusCode)
Returns `true` if the HTTP status series is successful (2XX).

##### Example
```js
httpStatus.isSuccessful(200)   => true
httpStatus.isSuccessful("200") => true
httpStatus.isSuccessful(301)   => false
httpStatus.isSuccessful("301") => false
```

#### isRedirection(statusCode)
Returns `true` if the HTTP status series is a redirection (3XX).

##### Example
```js
httpStatus.isRedirection(301)   => true
httpStatus.isRedirection("301") => true
httpStatus.isRedirection(404)   => false
httpStatus.isRedirection("404") => false
```

#### isClientError(statusCode)
Returns `true` if the HTTP status series is a client error (4XX).

##### Example
```js
httpStatus.isClientError(404)   => true
httpStatus.isClientError("404") => true
httpStatus.isClientError(500)   => false
httpStatus.isClientError("500") => false
```

#### isServerError(statusCode)
Returns `true` if the HTTP status series is a server error (5XX).

##### Example
```js
httpStatus.isServerError(500)   => true
httpStatus.isServerError("500") => true
httpStatus.isServerError(404)   => false
httpStatus.isServerError("404") => false
```

License
-------

HTTP Status Series is licensed with [The BSD 2-Clause License](LICENSE.md)
