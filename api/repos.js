import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    request,
    response,
) {
    response.status(200).json({
        body: request.body,
        data: {
            name: "boy",
            age:18
        }
    });
}