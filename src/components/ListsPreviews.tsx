import ListCard, { List } from './ListCard';

const lists: List[] = [
  {
    id: 'list-a',
    ownerId: 'user001',
    name: 'List A',
    description: 'Description List A',
  },
  {
    id: 'list-b',
    ownerId: 'user001',
    name: 'List B',
    description: 'Description List B',
  },
  {
    id: 'list-c',
    ownerId: 'user001',
    name: 'List C',
    description: 'Description List C',
  },
  {
    id: 'list-d',
    ownerId: 'user001',
    name: 'List D',
    description: 'Description List D',
  },
  {
    id: 'list-e',
    ownerId: 'user001',
    name: 'List E',
    description: 'Description List E',
  },
];

export default function ListsPreviews() {
  return (
    <div className="relative flex place-items-center before:rounded-full">
      {lists.map((list) => (
        <ListCard key={list.id} list={list} />
      ))}
    </div>
  );
}
