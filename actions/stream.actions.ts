"use server";

import { currentUser } from "@clerk/nextjs/server"; // ← added missing import
import { StreamClient } from "@stream-io/node-sdk"; // ← added missing import

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY; // ← removed duplicate
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
    const user = await currentUser();

    if(!user) throw new Error('User is not logged in');
    if(!apiKey) throw new Error('No API key');
    if(!apiSecret) throw new Error('No API secret');

    const client = new StreamClient(apiKey, apiSecret); // ← fixed: 'streamClient' → 'StreamClient'

    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const issued = Math.floor(Date.now() / 1000) - 60;

    const token = client.generateUserToken({ // ← fixed: 'createToken' → 'generateUserToken'
        user_id: user.id,
        exp,
        iat: issued,
    });

    return token;
}