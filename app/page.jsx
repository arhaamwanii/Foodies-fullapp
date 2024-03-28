
import  Link from 'next/link';
export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link src="/meals">Meals</Link></p>
      <p><Link src="/community">Community</Link></p>
      <p><Link src="/meals/share">Meals share</Link></p>
    </main>
  );
}
