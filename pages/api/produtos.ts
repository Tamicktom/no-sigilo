// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return new Promise((resolve, reject) => {
    fetch("http://26.120.58.152/novaApi/public_html/api/produto/find_all/false")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        res
          .status(200)
          .setHeader("Cache-Control", "max-age=180000")
          .setHeader("Content-Type", "application/json")
          .json(data);
      })
      .catch((erro) => console.log("deu ruim"));
  });
}

// import { getData } from "../../helper";
// export default async function(req, res) {
//   return new Promise((resolve, reject) => {
//     getData()
//       .then(response => {
//         res.statusCode = 200
//         res.setHeader('Content-Type', 'application/json');
//         res.setHeader('Cache-Control', 'max-age=180000');
//         res.end(JSON.stringify(response));
//         resolve();
//       })
//       .catch(error => {
//         res.json(error);
//         res.status(405).end();
//         resolve(); // in case something goes wrong in the catch block (as vijay commented)
//       });
//   });
// };
