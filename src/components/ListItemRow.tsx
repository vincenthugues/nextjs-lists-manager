export type ListItem = {
  id: string;
  listId: string;
  name: string;
  notes?: string;
  url?: string;
  pulledInfo?: {
    title: string;
    description?: string;
    heroImageUrl?: string;
  };
  imageUrl?: string;
};

export default function ListItemRow({
  listItem: { name, notes },
}: {
  listItem: ListItem;
}) {
  return (
    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <h2 className={`mb-3 text-xl font-semibold`}>{name}</h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{notes}</p>
    </div>
  );
}
