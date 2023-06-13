import { getListItemsByListId } from '@/db-calls';
import { ListItem } from '@/types/ListItem';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ListItem[]>
) {
  const { listId } = req.query;
  if (!listId) {
    console.log('No listId requested');
    return res.status(200).json([]);
  }

  const items = await getListItemsByListId(listId as string);
  res.status(200).json(items);
}
