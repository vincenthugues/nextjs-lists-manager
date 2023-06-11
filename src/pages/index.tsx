import ListsPreviews from '@/components/ListsPreviews';
import { List } from '@/types/List';
import { GetServerSideProps } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const getServerSideProps: GetServerSideProps<{
  lists: List[];
}> = async () => {
  const userId = 'user001';
  const res = await fetch(`http://localhost:3000/api/lists?ownerId=${userId}`);
  const lists = await res.json();

  return { props: { lists } };
};

export default function Home({ lists }: { lists: List[] }) {
  if (!lists) {
    return <div>Error loading lists</div>;
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Item 1
        </p>
      </div>

      <ListsPreviews lists={lists} />
    </main>
  );
}
