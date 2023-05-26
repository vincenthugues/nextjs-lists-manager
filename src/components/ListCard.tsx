import Link from 'next/link';

type ListStyle = 'image' | 'links' | 'text';

export type List = {
  id: string;
  ownerId: string;
  name: string;
  description: string;
  style?: ListStyle;
};

export default function ListCard({
  list: { id, name, description },
}: {
  list: List;
}) {
  return (
    <Link
      href={`/list/${id}`}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>{name}</h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{description}</p>
    </Link>
  );
}
