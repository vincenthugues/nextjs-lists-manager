import ListsPreviews from '@/components/ListsPreviews';
import { getListsByOwnerId } from '@/db-calls';
import { List } from '@/types/List';
import { GetServerSideProps } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const getServerSideProps: GetServerSideProps<{
  lists: List[];
}> = async () => {
  const userId = 'user001';
  const lists = await getListsByOwnerId(userId);

  return { props: { lists } };
};

function NavButton({ label }: { label: string }) {
  return (
    <p className="left-0 top-0 flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 mx-2 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 hover:bg-slate-900">
      {label}
    </p>
  );
}

export default function Home({ lists }: { lists: List[] }) {
  if (!lists) {
    return <div>Error loading lists</div>;
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div className="z-10 w-auto max-w-5xl items-center justify-between text-m lg:flex mb-4">
        {new Array(5).fill(null).map((_, index) => (
          <NavButton key={index} label={`Item ${index + 1}`} />
        ))}
      </div>

      <ListsPreviews lists={lists} />
    </main>
  );
}
