//* This is only for testing purposes.

import { NextApiRequest, NextApiResponse } from "next";


export default function RandomNumber(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json({
    randomNumber: Math.floor(Math.random() * 100) + 1,
  });
}
