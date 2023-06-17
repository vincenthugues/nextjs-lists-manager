import {
  CreateListFunction,
  CreateListItemFunction,
  DeleteListFunction,
  DeleteListItemFunction,
  GetListByIdFunction,
  GetListItemByIdFunction,
  GetListItemsFunction,
  GetListsFunction,
  UpdateListFunction,
  UpdateListItemFunction,
} from './interface';
import { db } from './mock-db';

// List

export const createList: CreateListFunction = async (list) => {
  db.lists.push(list);

  return list;
};

export const getLists: GetListsFunction = async () => {
  return db.lists || [];
};

export const getListById: GetListByIdFunction = async (listId: string) => {
  const list = db.lists.find(({ id }) => id === listId);

  return list || null;
};

export const updateList: UpdateListFunction = async (listId, list) => {
  const listIndex = db.lists.findIndex(({ id }) => id === listId);
  if (listIndex === -1) {
    return null;
  }

  const storedList = db.lists[listIndex];
  const updatedList = {
    ...storedList,
    ...list,
  };

  db.lists[listIndex] = updatedList;

  return updatedList;
};

export const deleteList: DeleteListFunction = async (listId: string) => {
  db.lists = db.lists.filter(({ id }) => id !== listId);
};

// ListItem

export const createListItem: CreateListItemFunction = async (listItem) => {
  db.listItems.push(listItem);

  return listItem;
};

export const getListItems: GetListItemsFunction = async () => {
  return db.listItems || [];
};

export const getListItemById: GetListItemByIdFunction = async (listItemId) => {
  const listItem = db.listItems.find(({ id }) => id === listItemId);

  return listItem || null;
};

export const updateListItem: UpdateListItemFunction = async (
  listItemId,
  listItem
) => {
  const listItemIndex = db.listItems.findIndex(({ id }) => id === listItemId);
  if (listItemIndex === -1) {
    return null;
  }

  const storedListItem = db.listItems[listItemIndex];
  const updatedListItem = {
    ...storedListItem,
    ...listItem,
  };

  db.listItems[listItemIndex] = updatedListItem;

  return updatedListItem;
};

export const deleteListItem: DeleteListItemFunction = async (listItemId) => {
  db.listItems = db.listItems.filter(({ id }) => id !== listItemId);
};
