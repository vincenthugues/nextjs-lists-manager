import { getListById, getListItems, getLists } from './adapter';
import {
  getListByIdAndOwnerId,
  getListItemsByListId,
  getListsByOwnerId,
} from './service';

jest.mock('./adapter');
const mGetLists = jest.mocked(getLists);
const mGetListById = jest.mocked(getListById);
const mGetListItems = jest.mocked(getListItems);

describe('getListsByOwnerId', () => {
  it('returns lists owned by a specific owner', async () => {
    const ownerId = 'owner1';

    mGetLists.mockResolvedValueOnce([
      { id: 'list1', ownerId: 'owner1', name: 'List 1' },
      { id: 'list2', ownerId: 'owner1', name: 'List 2' },
    ]);

    const result = await getListsByOwnerId(ownerId);

    expect(getLists).toHaveBeenCalled();
    expect(result).toEqual([
      { id: 'list1', ownerId: 'owner1', name: 'List 1' },
      { id: 'list2', ownerId: 'owner1', name: 'List 2' },
    ]);
  });
});

describe('getListByIdAndOwnerId', () => {
  it('returns a list when listId and ownerId match', async () => {
    const listId = 'list2';
    const ownerId = 'owner1';

    mGetListById.mockResolvedValueOnce({
      id: 'list2',
      ownerId: 'owner1',
      name: 'List 2',
    });

    const result = await getListByIdAndOwnerId(listId, ownerId);

    expect(getListById).toHaveBeenCalledWith(listId);
    expect(result).toEqual({ id: 'list2', ownerId: 'owner1', name: 'List 2' });
  });

  it('returns null when listId and ownerId do not match', async () => {
    const listId = 'list1';
    const ownerId = 'owner2';

    mGetListById.mockResolvedValueOnce({
      id: 'list1',
      ownerId: 'owner1',
      name: 'List 1',
    });

    const result = await getListByIdAndOwnerId(listId, ownerId);

    expect(getListById).toHaveBeenCalledWith(listId);
    expect(result).toBeNull();
  });
});

describe('getListItemsByListId', () => {
  it('returns list items for a specific listId', async () => {
    const listId = 'list1';

    mGetListItems.mockResolvedValueOnce([
      { id: 'item1', listId: 'list1', name: 'List 1', sortOrder: 0 },
      { id: 'item2', listId: 'list1', name: 'List 2', sortOrder: 1 },
    ]);

    const result = await getListItemsByListId(listId);

    expect(getListItems).toHaveBeenCalled();
    expect(result).toEqual([
      { id: 'item1', listId: 'list1', name: 'List 1', sortOrder: 0 },
      { id: 'item2', listId: 'list1', name: 'List 2', sortOrder: 1 },
    ]);
  });
});
