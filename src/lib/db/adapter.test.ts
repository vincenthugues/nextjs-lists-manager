import { List } from '@/types/List';
import { ListItem } from '@/types/ListItem';
import {
  createList,
  createListItem,
  deleteList,
  deleteListItem,
  getListById,
  getListItemById,
  getListItems,
  getLists,
  updateList,
  updateListItem,
} from './adapter';
import { db } from './mock-db';

describe('List', () => {
  beforeEach(() => {
    db.lists = [];
  });

  describe('createList', () => {
    it('adds a new list to the database', async () => {
      const list: List = {
        id: 'list1',
        ownerId: 'owner1',
        name: 'Shopping List',
      };

      await createList(list);

      expect(db.lists).toContain(list);
    });

    it('returns the created list', async () => {
      const list: List = {
        id: 'list1',
        ownerId: 'owner1',
        name: 'Shopping List',
      };

      const result = await createList(list);

      expect(result).toEqual(list);
    });
  });

  describe('getLists', () => {
    it('returns all lists from the database', async () => {
      const lists: List[] = [
        { id: 'list1', ownerId: 'owner1', name: 'Shopping List' },
        { id: 'list2', ownerId: 'owner1', name: 'ToDo List' },
      ];

      db.lists = lists;

      const result = await getLists();

      expect(result).toEqual(lists);
    });

    it('returns an empty array if no lists exist', async () => {
      db.lists = [];

      const result = await getLists();

      expect(result).toEqual([]);
    });
  });

  describe('getListById', () => {
    it('returns the list with the specified listId', async () => {
      const lists: List[] = [
        { id: 'list1', ownerId: 'owner1', name: 'Shopping List' },
        { id: 'list2', ownerId: 'owner1', name: 'ToDo List' },
      ];

      db.lists = lists;

      const result = await getListById('list2');

      expect(result).toEqual(lists[1]);
    });

    it('returns null if the list with the specified listId does not exist', async () => {
      db.lists = [];

      const result = await getListById('list1');

      expect(result).toBeNull();
    });
  });

  describe('updateList', () => {
    it('updates the list with the specified listId', async () => {
      const lists: List[] = [
        { id: 'list1', ownerId: 'owner1', name: 'Shopping List' },
        { id: 'list2', ownerId: 'owner1', name: 'ToDo List' },
      ];

      db.lists = lists;

      const updatedList: Partial<List> = { name: 'Updated List' };

      const result = await updateList('list1', updatedList);

      expect(result).toEqual({
        id: 'list1',
        ownerId: 'owner1',
        name: 'Updated List',
      });
      expect(db.lists[0]).toEqual({
        id: 'list1',
        ownerId: 'owner1',
        name: 'Updated List',
      });
    });

    it('returns null if the list with the specified listId does not exist', async () => {
      db.lists = [];

      const updatedList: Partial<List> = { name: 'Updated List' };

      const result = await updateList('list1', updatedList);

      expect(result).toBeNull();
    });
  });

  describe('deleteList', () => {
    it('removes the list with the specified listId from the database', async () => {
      const lists: List[] = [
        { id: 'list1', ownerId: 'owner1', name: 'Shopping List' },
        { id: 'list2', ownerId: 'owner1', name: 'ToDo List' },
      ];
      db.lists = lists;

      await deleteList('list1');

      expect(db.lists).toEqual([
        { id: 'list2', ownerId: 'owner1', name: 'ToDo List' },
      ]);
    });

    it('does nothing if the list with the specified listId does not exist', async () => {
      const lists: List[] = [
        { id: 'list1', ownerId: 'owner1', name: 'ToDo List' },
      ];
      db.lists = lists;

      await deleteList('list2');

      expect(db.lists).toEqual([
        { id: 'list1', ownerId: 'owner1', name: 'ToDo List' },
      ]);
    });
  });
});

describe('ListItem', () => {
  beforeEach(() => {
    db.listItems = [];
  });

  describe('createListItem', () => {
    it('adds a new list item to the database', async () => {
      const listItem: ListItem = {
        id: 'listItem1',
        listId: 'list1',
        sortOrder: 0,
      };

      await createListItem(listItem);

      expect(db.listItems).toContain(listItem);
    });

    it('returns the created list item', async () => {
      const listItem: ListItem = {
        id: 'listItem1',
        listId: 'list1',
        sortOrder: 0,
      };

      const result = await createListItem(listItem);

      expect(result).toEqual(listItem);
    });
  });

  describe('getListItems', () => {
    it('returns all list items from the database', async () => {
      const listItems: ListItem[] = [
        {
          id: 'listItem1',
          listId: 'list1',
          sortOrder: 0,
        },
        {
          id: 'listItem2',
          listId: 'list1',
          sortOrder: 1,
        },
      ];

      db.listItems = listItems;

      const result = await getListItems();

      expect(result).toEqual(listItems);
    });

    it('returns an empty array if no list items exist', async () => {
      db.listItems = [];

      const result = await getListItems();

      expect(result).toEqual([]);
    });
  });

  describe('getListItemById', () => {
    it('returns the list item with the specified listItemId', async () => {
      const listItems: ListItem[] = [
        {
          id: 'listItem1',
          listId: 'list1',
          sortOrder: 0,
        },
        {
          id: 'listItem2',
          listId: 'list1',
          sortOrder: 1,
        },
      ];

      db.listItems = listItems;

      const result = await getListItemById('listItem2');

      expect(result).toEqual(listItems[1]);
    });

    it('returns null if the list item with the specified listItemId does not exist', async () => {
      db.listItems = [];

      const result = await getListItemById('listItem1');

      expect(result).toBeNull();
    });
  });

  describe('updateListItem', () => {
    it('updates the list item with the specified listItemId', async () => {
      const listItems: ListItem[] = [
        {
          id: 'listItem1',
          listId: 'list1',
          sortOrder: 0,
        },
        {
          id: 'listItem2',
          listId: 'list1',
          sortOrder: 1,
        },
      ];

      db.listItems = listItems;

      const updatedListItem: Partial<ListItem> = { notes: 'Updated List Item' };

      const result = await updateListItem('listItem1', updatedListItem);

      expect(result).toEqual({
        id: 'listItem1',
        listId: 'list1',
        sortOrder: 0,
        notes: 'Updated List Item',
      });
      expect(db.listItems[0]).toEqual({
        id: 'listItem1',
        listId: 'list1',
        sortOrder: 0,
        notes: 'Updated List Item',
      });
    });

    it('returns null if the list item with the specified listItemId does not exist', async () => {
      db.listItems = [];

      const updatedListItem: Partial<ListItem> = { notes: 'Updated List Item' };

      const result = await updateListItem('listItem1', updatedListItem);

      expect(result).toBeNull();
    });
  });

  describe('deleteListItem', () => {
    it('removes the list item with the specified listItemId from the database', async () => {
      const listItems: ListItem[] = [
        {
          id: 'listItem1',
          listId: 'list1',
          sortOrder: 0,
        },
        {
          id: 'listItem2',
          listId: 'list1',
          sortOrder: 1,
        },
      ];
      db.listItems = listItems;

      await deleteListItem('listItem1');

      expect(db.listItems).toEqual([
        {
          id: 'listItem2',
          listId: 'list1',
          sortOrder: 1,
        },
      ]);
    });

    it('does nothing if the list item with the specified listItemId does not exist', async () => {
      const listItems: ListItem[] = [
        {
          id: 'listItem1',
          listId: 'list1',
          sortOrder: 0,
        },
      ];
      db.listItems = listItems;

      await deleteListItem('listItem2');

      expect(db.listItems).toEqual([
        {
          id: 'listItem1',
          listId: 'list1',
          sortOrder: 0,
        },
      ]);
    });
  });
});
