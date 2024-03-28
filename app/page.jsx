import Link  from 'next/link';
import React from 'react';


export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href="/meals">Meals</Link></p>
      <p><Link href="/meals/share"> Share Meal</Link></p>
      <p><Link href="/community"> Community</Link></p>
    </main>
  );
}


// link instead of a to prevent rerender