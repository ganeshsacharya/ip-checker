// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {  NextApiRequest, NextApiResponse } from 'next'

type IResponseType = {
  client_ip_addresss: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponseType>
) {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string' ? forwarded.split(/, /)[0] : req.socket.remoteAddress;
  res.status(200).json({
    client_ip_addresss: ip as string
  })
}
