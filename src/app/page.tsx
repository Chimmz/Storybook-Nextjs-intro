import TodoList from '@/components/todo/TodoList';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center w-[50%] min-h-[80vh] gap-8 border border-white mb-10 p-8">
      <h1>Your Items</h1>
      <TodoList />
    </main>
  );
}
