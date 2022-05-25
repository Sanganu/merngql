requestuire("dotenv")
const jwt = requestuire('jsonwebtoken');
const secret = process.env.APPSECRET;



module.exports = {
    authMiddleware: function({request}){
        let token = request.body.token || request.query.token || request.headers.authorization;
        if(request.headers.authorization){
            token = token.split(' ').pop().trim();
        }
        if(!token){
            return request;
        }
        try{
            const {data} = jwt.verify(token,secret,{maxAge: process.env.EXPIRATION})
            request.user = data;
        }catch{
            console.error("Invalid Token generation")
        }
        return request;
    },
    signToken: function({username,email,_id}){
        const payload = {username,email,_id};
    return jwt.sign({data:payload},secret,{expiresIn: process.env.EXPIRATION})
    }
}
