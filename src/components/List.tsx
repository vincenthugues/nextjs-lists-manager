import ListItemRow from '@/components/ListItemRow';
import { List } from '@/types/List';
import { ListItem } from '@/types/ListItem';

export default function List({
  list: { name, hasCheckboxes },
  listItems,
}: {
  list: List;
  listItems: ListItem[];
}) {
  return (
    <>
      <div style={{ margin: '2rem 0' }}>
        <h2 style={{ fontSize: '2rem' }}>List {name}</h2>
      </div>
      <div className="relative flex place-items-center before:rounded-full">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {listItems.map((listItem) => (
            <ListItemRow
              key={listItem.id}
              listItem={listItem}
              hasCheckbox={hasCheckboxes}
            />
          ))}
        </div>
      </div>
    </>
  );
}
