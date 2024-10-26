import jwt from "jsonwebtoken";

export const generateAccessToken = (payload: any): string=>{
    return jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET || "");
}

export const decodeJWT = (token: string)=>{
    try{
        const payload = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET || "");
        return payload;
    }catch(e){
        return null;
    }
}