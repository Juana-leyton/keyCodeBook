const jwt = require('jwt-simple')
const moment = require('moment')
const SECRET = 'KeyCodeSecretTokenUser'

exports.createToken = (dataUser) => {
    const payload = {
        sub: dataUser._id,
        iat: moment().unix(),
        exp: moment().add('1', 'hour').unix(),
        firstName: dataUser.firstName,
        lastName: dataUser.lastName,
        email: dataUser.email,
        role: dataUser.role,
        birthDate: dataUser.birthDate,
        age: dataUser.age,
    }

    return jwt.encode(payload, SECRET)
}

exports.decodeToken = (token) => {
    const decode = new Promise( (resolve, reject) => {
        try{
            const payload = jwt.decode(token, SECRET)
            if (payload.exp <= moment().unix()){
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                })
            }
            resolve(payload.sub)
        }catch{
            reject({
                status: 500,
                message: 'El token es invalido'
            })
        }
    } )

    return decode
}