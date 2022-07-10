//* This is only for testing purposes.

import { NextApiRequest, NextApiResponse } from "next";

export default function consultPkm(req: NextApiRequest, res: NextApiResponse) {
  const pkm = req.query;
  console.log(pkm);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pkm.name}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      res.json(data);
    })
    .catch((erro) => {
      res.status(404);
    });
}
