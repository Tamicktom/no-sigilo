// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

function loremIpsum() {
    let res = '';
    fetch('https://baconipsum.com/api/?type=meat-and-filler')
        .then(response => { return response.json() })
        .then(data => {
            res = data;
        })
        .catch((erro) => {
        })
    return res;
}

type Produto = {
    id_product: string | number,
    units_left: number,
    name_product: string,
    short_description: string,
    long_description: string,
    price_product: string | number,
    promotion: boolean,
    image: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Produto>
) {
    res.status(200).json({
        id_product: Math.random() * 10,
        units_left: Math.random() * 80,
        name_product: 'Produto de Exemplo',
        short_description: 'Descrição de exemplo, descrição de exemplo',
        long_description: loremIpsum(),
        price_product: (Math.random() * 10),
        promotion: false,
        image: ''
    })
}
