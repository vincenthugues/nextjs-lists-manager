import { getListByIdAndOwnerId } from '@/db-calls';
import { List } from '@/types/List';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<List | null>
) {
  const { id, ownerId } = req.query;
  if (!id) {
    console.log('No id requested');
    return res.status(200).json(null);
  }
  if (!ownerId) {
    console.log('No ownerId requested');
    return res.status(200).json(null);
  }

  const list = await getListByIdAndOwnerId(id as string, ownerId as string);
  res.status(200).json(list);
}
