import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse,
){
    try {
        await res.revalidate('/');
        return res.json({ revalidated: true });
    } catch {  // 👈 괄호와 error: any를 아예 지워버립니다!
         return res.status(500).send('Revalidate Failed');
    }
}