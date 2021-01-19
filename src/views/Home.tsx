import * as React from 'react';

type HomeProps = { message: string };

const Home = ({ message }: HomeProps) => {
  message = "Home Works!";
  
  return <div>{ message }</div>;
}

export default Home;