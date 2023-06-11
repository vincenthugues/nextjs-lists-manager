import { List } from '@/types/List';
import type { NextApiRequest, NextApiResponse } from 'next';
import { lists } from '../../db';

function getListByIdAndOwnerId(id: string, ownerId: string): List | null {
  const list = lists.find((list) => list.id === id && list.ownerId === ownerId);
  return list || null;
}

export default function handler(
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

  const list = getListByIdAndOwnerId(id as string, ownerId as string);
  res.status(200).json(list);
}
