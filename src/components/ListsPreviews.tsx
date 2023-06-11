import { List } from '@/types/List';
import ListCard from './ListCard';

export default function ListsPreviews({ lists }: { lists: List[] }) {
  return (
    <div className="flex place-items-center flex-wrap">
      {lists.map((list) => (
        <ListCard key={list.id} list={list} />
      ))}
    </div>
  );
}
