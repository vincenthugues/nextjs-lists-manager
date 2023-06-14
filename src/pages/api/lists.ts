import { getListsByOwnerId } from '@/lib/db/service';
import { List } from '@/types/List';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<List[]>
) {
  const { ownerId, id } = req.query;
  if (!ownerId) {
    console.log('No ownerId requested');
    return res.status(200).json([]);
  }

  const ownerLists = await getListsByOwnerId(ownerId as string);
  res.status(200).json(ownerLists);
}
