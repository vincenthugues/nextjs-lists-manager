import { List } from '@/types/List';
import { ListItem } from '@/types/ListItem';
import { getListById, getListItems, getLists } from './adapter';

export async function getListsByOwnerId(ownerId: string): Promise<List[]> {
  const ownerLists = (await getLists()).filter(
    (list) => list.ownerId === ownerId
  );

  return ownerLists;
}

export async function getListByIdAndOwnerId(
  listId: string,
  ownerId: string
): Promise<List | null> {
  const list = await getListById(listId);

  if (list?.ownerId !== ownerId) {
    return null;
  }

  return list;
}

export async function getListItemsByListId(
  listId: string
): Promise<ListItem[]> {
  return (await getListItems()).filter(
    (listItem) => listItem.listId === listId
  );
}
