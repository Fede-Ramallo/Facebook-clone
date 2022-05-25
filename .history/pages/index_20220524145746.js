import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import { getSession } from 'next-auth/react';

export default function Home({session}) {
  if (!session) return <Login />;

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      <main className='flex'>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Fee
        {/* Widgets */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get the User
  const session = await getSession(context);

  return {
    props: {
      session
    },
  };
}
