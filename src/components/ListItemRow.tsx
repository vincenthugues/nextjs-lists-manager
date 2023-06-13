import { ListItem } from '@/types/ListItem';

export default function ListItemRow({
  listItem: { name, notes, url, imageUrl },
  hasCheckbox,
  isChecked,
}: {
  listItem: ListItem;
  hasCheckbox?: boolean;
  isChecked?: boolean;
}) {
  return (
    <div
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      <div
        style={{
          display: hasCheckbox ? 'inline' : 'none',
          margin: '.2rem 1.5rem',
          fontSize: '1.7rem',
        }}
      >
        {isChecked ? '🗹' : '☐'}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 className={`mb-3 text-xl font-semibold`}>
          {url ? <a href={url}>{name}</a> : name}
        </h2>
        {imageUrl && (
          <div>
            <img src={imageUrl} alt={name} style={{ maxHeight: '240px' }} />
          </div>
        )}
        <p className={`m-0 max-w-[30ch] text-m opacity-90`}>{notes}</p>
      </div>
    </div>
  );
}
