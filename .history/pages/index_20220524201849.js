import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import { getSession } from 'next-auth/react';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import { db } from '../firebase';

export default function Home({session}) {
  if (!session) return <Login />;

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='flex'>
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get the User
  const session = await getSession(context);

  const posts = await db

  return {
    props: {
      session
    },
  };
}
