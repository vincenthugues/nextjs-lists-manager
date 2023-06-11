import { ListItem } from '@/types/ListItem';
import type { NextApiRequest, NextApiResponse } from 'next';
import { listItems } from '../../db';

function getListItemsByListId(listId: string): ListItem[] {
  return listItems.filter((listItem) => listItem.listId === listId);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ListItem[]>
) {
  const { listId } = req.query;
  if (!listId) {
    console.log('No listId requested');
    return res.status(200).json([]);
  }

  const items = getListItemsByListId(listId as string);
  res.status(200).json(items);
}
