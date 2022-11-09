import React from 'react'
const MainDash = React.lazy(() => import('./MainDash'));
const Coins = React.lazy(() => import('./Coins'));
function Home() {
  return (
    <>
    <MainDash/>
    <Coins/>
    </>
  )
}

export default Home
