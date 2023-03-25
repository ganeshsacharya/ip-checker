// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {  NextApiRequest, NextApiResponse } from 'next'

import type { NextRequest } from 'next/server'


type Data = {
  ip: string
}

export default function handler(
  req: NextRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({ ip: req})
}
