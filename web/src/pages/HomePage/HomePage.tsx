import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="text-3xl font-bold underline">
        Home Page this will be the cockpit
      </h1>
    </>
  )
}

export default HomePage
