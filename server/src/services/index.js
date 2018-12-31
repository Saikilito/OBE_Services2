const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/config')

function createToken(user){
    const payload = {
        //Cambiar el id por uno diferente este ID pone en riesgo la integridad de la db
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(7,'day').unix(),
    }

    return jwt.encode(payload, config.SECRET_TOKEN )
}

function decodeToken (token) {
    const decoded = new Promise((resolve, reject) => {
      try {
        const payload = jwt.decode(token, config.SECRET_TOKEN)
  
        if (payload.exp <= moment().unix()) {
          reject({
            status: 401,
            message: 'El token ha expirado'
          })
        }
        resolve(payload.sub)
      } catch (err) {
        reject({
          status: 500,
          message: 'Invalid Token'
        })
      }
    })
  
    return decoded
  }
  
  module.exports = {
    createToken,
    decodeToken
  }