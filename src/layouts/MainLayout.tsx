import * as React from 'react';
import Header from "../components/Header";

type MainLayoutProps = {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps ) {
  return (
    <>
      <Header />
      <div>
        { children }
      </div>
    </>
  )
}

export default MainLayout;