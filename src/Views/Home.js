import React from 'react';
import { HelloWorld } from '../Components';

function Home() {
  return (
    <div>
      <h1 className='font-bold text-2xl'>This is home page</h1>
      <HelloWorld name='laveesh' />
    </div>
  );
}

export default Home;