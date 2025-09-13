'use client';

import GameLogic from '@/lib';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    GameLogic();
  }, []);

  return <div>Hello</div>;
}
