import ListItemRow from '@/components/ListItemRow';
import { List } from '@/types/List';
import { ListItem } from '@/types/ListItem';
import { useState } from 'react';

function ListItemCreator({}) {
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);
  const [name, setName] = useState<string>();
  const [notes, setNotes] = useState<string>();
  const onSubmit = () => {
    console.log({ name, notes });
    setName('');
    setNotes('');
    setIsCreatorOpen(false);
  };
  const isFormValid = !!name || !!notes;

  if (!isCreatorOpen) {
    return (
      <button
        onClick={() => {
          setIsCreatorOpen(true);
        }}
        style={{ margin: '3rem', fontSize: '1.5rem' }}
      >
        + Add item
      </button>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        onSubmit();
        e.preventDefault();
      }}
      style={{ display: 'flex', flexDirection: 'column', margin: '3em' }}
    >
      <div style={{ margin: '.5em' }}>
        Name
        <input
          type="text"
          id="name"
          onChange={({ target: { value } }) => {
            setName(value);
          }}
          style={{ marginLeft: '.5em' }}
        />
      </div>
      <div style={{ margin: '.5em' }}>
        Notes
        <input
          type="text"
          id="notes"
          onChange={({ target: { value } }) => {
            setNotes(value);
          }}
          style={{ marginLeft: '.5em' }}
        />
      </div>
      <button
        type="submit"
        disabled={isFormValid === false}
        style={{ fontSize: '1rem' }}
      >
        ✔️ Create
      </button>
      <button
        type="reset"
        onClick={() => {
          setIsCreatorOpen(false);
        }}
        style={{ fontSize: '1rem' }}
      >
        ❌ Cancel
      </button>
    </form>
  );
}

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
        <h2 style={{ fontSize: '2rem' }}>{name}</h2>
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
          <ListItemCreator />
        </div>
      </div>
    </>
  );
}
