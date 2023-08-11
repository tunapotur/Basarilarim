import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-800 px-8 py-3">
      <Link className="text-2xl font-bold uppercase text-white" href={'/'}>
        successes
      </Link>

      <Link className="bg-white p-2" href={'/addSuccess'}>
        Add Success
      </Link>
    </nav>
  );
}