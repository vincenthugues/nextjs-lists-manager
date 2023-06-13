import { listItems, lists } from './db';
import { List } from './types/List';
import { ListItem } from './types/ListItem';

export async function getListsByOwnerId(ownerId: string): Promise<List[]> {
  const ownerLists = lists.filter((list) => list.ownerId === ownerId);

  return ownerLists;
}

export async function getListByIdAndOwnerId(
  listId: string,
  ownerId: string
): Promise<List | null> {
  const list = lists.find(
    (list) => list.id === listId && list.ownerId === ownerId
  );

  return list || null;
}

export async function getListItemsByListId(
  listId: string
): Promise<ListItem[]> {
  return listItems.filter((listItem) => listItem.listId === listId);
}
