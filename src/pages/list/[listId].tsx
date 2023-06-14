import ListComponent from '@/components/List';
import { getListByIdAndOwnerId, getListItemsByListId } from '@/lib/db/service';
import { List } from '@/types/List';
import { ListItem } from '@/types/ListItem';
import { GetServerSideProps } from 'next';

function getTextBetween(str1: string, str2: string) {
  return (input: string) => input.split(str1)[1].split(str2)[0];
}

async function getWebpageData(
  url: string
): Promise<{ title: string; imageUrl: string }> {
  const body = await fetch(url).then((res) => res.text());
  const title = getTextBetween('<title data-rh="true">', '</title>')(body);
  const imageUrl = getTextBetween(
    '<meta data-rh="true" property="og:image" content="',
    '"/>'
  )(body);

  return { title, imageUrl };
}

async function getFetchedLinkItem(linkItem: ListItem): Promise<ListItem> {
  const { title, imageUrl } = await getWebpageData(linkItem.url as string);

  const newItem = {
    ...linkItem,
    name: title,
    imageUrl,
    fetchedInfo: {
      title,
      imageUrl,
    },
    // lastFetched: new Date(),
  };
  return newItem;
}

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

  async function handleLinkItemsFetching(
    items: ListItem[]
  ): Promise<ListItem[]> {
    return await Promise.all(
      items.map(async (linkItem: ListItem) => {
        const needsFetching = linkItem.url; // && !linkItem.lastFetched;
        return needsFetching ? await getFetchedLinkItem(linkItem) : linkItem;
      })
    );
  }

  return {
    props: {
      list,
      listItems:
        list?.type === 'links' && list?.hasLinkAutofetch
          ? await handleLinkItemsFetching(listItems)
          : listItems,
    },
  };
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
