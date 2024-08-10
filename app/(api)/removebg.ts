import type { NextApiRequest, NextApiResponse } from 'next';
import FormData from 'form-data';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const formData = new FormData();
      formData.append('image', req.body);

      const response = await fetch('https://image-background-removal6.p.rapidapi.com/simplyneural/background_removal/uri', {
        method: 'POST',
        headers: {
          'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
          'x-rapidapi-host': 'image-background-removal6.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        body: formData
      });

      const result = await response.json();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Background removal failed' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
