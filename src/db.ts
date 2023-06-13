import { List } from '@/types/List';
import { ListItem } from '@/types/ListItem';

export const lists: List[] = [
  {
    id: 'list001',
    ownerId: 'user001',
    name: 'Groceries',
    hasCheckboxes: true,
  },
  {
    id: 'list002',
    ownerId: 'user001',
    name: 'TODO',
    hasCheckboxes: true,
  },
  {
    id: 'list003',
    ownerId: 'user001',
    name: 'Birthday wishlist',
    description: 'Gift ideas',
  },
  {
    id: 'list004',
    ownerId: 'user001',
    name: 'Apartments',
    description: 'Apartment listings for house hunting',
  },
  {
    id: 'list005',
    ownerId: 'user001',
    name: 'Articles to read',
  },
  {
    id: 'list006',
    ownerId: 'user001',
    name: 'Movies',
    description: 'To watch once a week',
  },
];

export const listItems: ListItem[] = [
  {
    id: 'list-item001',
    listId: 'list001',
    name: 'Pasta',
    sortOrder: 0,
    notes: 'any shape',
  },
  {
    id: 'list-item002',
    listId: 'list001',
    name: 'Eggs',
    sortOrder: 1,
  },
  {
    id: 'list-item003',
    listId: 'list001',
    name: 'Milk',
    sortOrder: 2,
    notes: 'Cow & oat',
  },
  {
    id: 'list-item004',
    listId: 'list002',
    name: 'Take out trash',
    sortOrder: 0,
  },
  {
    id: 'list-item005',
    listId: 'list002',
    name: 'Check emails',
    sortOrder: 1,
  },
  {
    id: 'list-item006',
    listId: 'list003',
    name: 'Photo album',
    sortOrder: 0,
    notes: 'For vacation pictures',
  },
  {
    id: 'list-item006',
    listId: 'list003',
    name: 'Film camera',
    sortOrder: 1,
    notes: 'To produce said pictures',
  },
];
