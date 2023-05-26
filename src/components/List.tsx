import ListItemRow, { ListItem } from '@/components/ListItemRow';

const listItems: ListItem[] = [
  {
    id: 'list-item001',
    listId: 'list001',
    name: 'Item 1',
  },
  {
    id: 'list-item002',
    listId: 'list001',
    name: 'Item 2',
    notes: 'Second item',
  },
  {
    id: 'list-item003',
    listId: 'list001',
    name: 'Item 3',
    notes: 'Second-second item',
  },
];

export default function List({ listId }: { listId: string }) {
  return (
    <>
      <div style={{ margin: '2rem 0' }}>
        <h2 style={{ fontSize: '2rem' }}>List {listId}</h2>
      </div>
      <div className="relative flex place-items-center before:rounded-full">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {listItems.map((listItem) => (
            <ListItemRow key={listItem.id} listItem={listItem} />
          ))}
        </div>
      </div>
    </>
  );
}
