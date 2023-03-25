// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {  NextApiRequest, NextApiResponse } from 'next'

import type { NextRequest } from 'next/server'


type Data = {
  ip: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string' ? forwarded.split(/, /)[0] : req.socket.remoteAddress;
  console.log(ip);
  res.status(200).json({ip})
}
