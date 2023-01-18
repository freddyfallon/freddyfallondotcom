import Head from 'next/head';

function Header(props: { children: React.ReactNode }) {
  return <div className="flex justify-center py-5">{props.children}</div>;
}

function Nav(props: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <nav className="flex justify-center w-4/5 sm:w-3/5 space-x-2 sm:space-x-3 md:space-x-6 lg:space:x-5 xl:space:x-6">
        {props.children}
      </nav>
    </div>
  );
}

function NavLink(props: { href: string; children: React.ReactNode }) {
  return (
    <a className="text-sm sm:text-base md:text-3xl" href={props.href}>
      {props.children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-full font-serif space-y-0 sm:space-y-3 md:space-4 lg:space-8">
      <Head>
        <title>Freddy Fallon - Software Engineer</title>
        <meta
          name="description"
          content="Go/JavaScript/TypeScript engineer based in London, U.K. Spend nearly all of my time writing backend code in Go but before that worked in Node and React."
        />
        <link
          rel="preload"
          href="/fonts/hepta-slab/HeptaSlab-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/hepta-slab/HeptaSlab-Bold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header>
        <h1 className="text-center text-4xl font-bold sm:text-5xl md:text-7xl lg:text-9xl">
          <a href="/">Freddy Fallon</a>
        </h1>
      </Header>
      <Nav>
        <NavLink href="https://www.github.com/freddyfallon/">GitHub</NavLink>
        <NavLink href="https://www.linkedin.com/in/freddyfallon/">
          LinkedIn
        </NavLink>
        <NavLink href="mailto:freddyfallon@gmail.com">Email</NavLink>
      </Nav>
    </div>
  );
}
