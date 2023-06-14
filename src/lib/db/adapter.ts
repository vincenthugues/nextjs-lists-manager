import { List } from '@/types/List';
import { ListItem } from '@/types/ListItem';
import { db } from './mock-db';

// List

export async function createList(list: List): Promise<List | null> {
  db.lists.push(list);

  return list;
}

export async function getLists(): Promise<List[]> {
  return db.lists || [];
}

export async function getListById(listId: string): Promise<List | null> {
  const list = db.lists.find(({ id }) => id === listId);

  return list || null;
}

export async function updateList(
  listId: string,
  list: List
): Promise<List | null> {
  const index = db.lists.findIndex(({ id }) => id === listId);
  db.lists[index] = list;

  return list;
}

export async function deleteList(listId: string): Promise<void> {
  db.lists = db.lists.filter(({ id }) => id !== listId);
}

// ListItem

export async function createListItem(
  listItem: ListItem
): Promise<ListItem | null> {
  db.listItems.push(listItem);

  return listItem;
}

export async function getListItems(): Promise<ListItem[]> {
  return db.listItems || [];
}

export async function getListItemById(
  listItemId: string
): Promise<ListItem | null> {
  const listItem = db.listItems.find(({ id }) => id === listItemId);

  return listItem || null;
}

export async function updateListItem(
  listItemId: string,
  listItem: ListItem
): Promise<ListItem | null> {
  const index = db.listItems.findIndex(({ id }) => id === listItemId);
  db.listItems[index] = listItem;

  return listItem;
}

export async function deleteListItem(listItemId: string): Promise<void> {
  db.listItems = db.listItems.filter(({ id }) => id !== listItemId);
}
