'use server';

import { cookies } from 'next/headers'
import { decodeJWT } from './auth';

export const getLoggedInUserDetails = ()=>{
    try{
        const value = cookies().get('access_token')?.value
        if(!value) return;

        return decodeJWT(value);
    }
    catch(e){
        return null;
    }
}

export const removeAccessToken = ()=>{
    cookies().delete("access_token");
}