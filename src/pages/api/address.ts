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
  // console.log(req.headers)
  res.status(200).json({ip: req.headers.host})
}
