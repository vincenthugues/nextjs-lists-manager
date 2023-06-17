import { List } from '@/types/List';
import { ListItem } from '@/types/ListItem';

export type CreateListFunction = (list: List) => Promise<List | null>;
export type GetListsFunction = () => Promise<List[]>;
export type GetListByIdFunction = (listId: string) => Promise<List | null>;
export type UpdateListFunction = (
  listId: string,
  list: Partial<List>
) => Promise<List | null>;
export type DeleteListFunction = (listId: string) => Promise<void>;

export type CreateListItemFunction = (
  listItem: ListItem
) => Promise<ListItem | null>;
export type GetListItemsFunction = () => Promise<ListItem[]>;
export type GetListItemByIdFunction = (
  listItemId: string
) => Promise<ListItem | null>;
export type UpdateListItemFunction = (
  listItemId: string,
  listItem: Partial<ListItem>
) => Promise<ListItem | null>;
export type DeleteListItemFunction = (listItemId: string) => Promise<void>;
