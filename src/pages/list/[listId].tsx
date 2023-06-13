import ListComponent from '@/components/List';
import { getListByIdAndOwnerId, getListItemsByListId } from '@/db-calls';
import { List } from '@/types/List';
import { ListItem } from '@/types/ListItem';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps<{
  list: List | null;
  listItems: ListItem[];
}> = async (context) => {
  const userId = 'user001';
  const { listId } = context.query;

  const [list, listItems] = await Promise.all([
    getListByIdAndOwnerId(listId as string, userId),
    getListItemsByListId(listId as string),
  ]);

  return { props: { list, listItems } };
};

export default function ListPage({
  list,
  listItems,
}: {
  list: List;
  listItems: ListItem[];
}) {
  if (!list || !listItems) {
    return <div>Error loading list</div>;
  }

  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <ListComponent list={list} listItems={listItems} />
    </main>
  );
}
