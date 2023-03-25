// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  ip: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log(req.connection.remoteAddress)
  res.status(200).json({  })
}
