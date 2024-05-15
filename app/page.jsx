import { getSession } from '@/libs/actions';
import { redirect } from 'next/navigation';


export default async function Home() {
  const session = await getSession()

  if (session.isLoggedIn) {
    redirect('/dashboard');
  } else {
    redirect('/login');
  }

  return (
    <div className="flex flex-col items-center px-2">
      <h2 className="text-2xl font-bold my-5">Dashboard</h2>



    </div>
  );
}
