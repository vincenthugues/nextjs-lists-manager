import { List } from '@/types/List';
import Link from 'next/link';

export default function ListCard({
  list: { id, name, description },
}: {
  list: List;
}) {
  return (
    <Link
      href={`/list/${id}`}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      style={{ minWidth: '200px' }}
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>{name}</h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{description}</p>
    </Link>
  );
}
