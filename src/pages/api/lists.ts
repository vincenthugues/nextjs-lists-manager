import { List } from '@/types/List';
import type { NextApiRequest, NextApiResponse } from 'next';
import { lists } from '../../db';

function getListsByOwnerId(ownerId: string): List[] {
  return lists.filter((list) => list.ownerId === ownerId);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<List[]>
) {
  const { ownerId, id } = req.query;
  if (!ownerId) {
    console.log('No ownerId requested');
    return res.status(200).json([]);
  }

  const ownerLists = getListsByOwnerId(ownerId as string);
  res.status(200).json(ownerLists);
}
