import Head from 'next/head';
import Link from 'next/link';

function Header(props: { children: React.ReactNode }) {
  return <header className="flex justify-between flex-col gap-3 sm:flex-row sm:gap-0">{props.children}</header>;
}

function Nav(props: { children: React.ReactNode }) {
  return (
    <nav className="flex sm:justify-end items-center space-x-2 md:space-x-4 lg:space-x-8">
      {props.children}
    </nav>
  );
}

function NavLink(props: { href: string; children: React.ReactNode }) {
  return (
    <a className="text-sm sm:text-base md:text-xl lg:text2xl xl:text3xl hover:text-slate-500" href={props.href}>
      {props.children}
    </a>
  );
}

function Section(props: { children: React.ReactNode }) {
  return <section className="mt-8">{props.children}</section>;
}

function VSpace(props: { children: React.ReactNode }) {
  return <div className="space-y-4">{props.children}</div>;
}

function Text(props: { children: React.ReactNode }) {
  return <p className="text-base sm:text-lg md:text-xl lg:text-2xl">{props.children}</p>;
}

export default function Home() {
  return (
    <main className="font-serif text-slate-800 py-5 px-9">
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
        <h1 className="text-4xl font-bold sm:text-4xl md:text-5xl lg:text-7xl">
          <a href="/">Freddy Fallon</a>
        </h1>
        <Nav>
          <NavLink href="https://www.github.com/freddyfallon/">GitHub</NavLink>
          <NavLink href="https://www.linkedin.com/in/freddyfallon/">
            LinkedIn
          </NavLink>
          <NavLink href="mailto:freddyfallon@gmail.com">Email</NavLink>
        </Nav>
      </Header>
      <Section>
        <VSpace>
          <Text>Hello 👋</Text>
          <Text>I'm Freddy. A software engineer based in the U.K. I'm based in Brighton but normally work in
            London.</Text>
          <Text>I work with JavaScript and TypeScript, as well as Go. I've worked at a number of places, such as Bulb
            🪦, Compare The Market 👔, and Monzo 💰.</Text>
          <Text>If you want to get in touch, feel free to <Link className="underline decoration-pink-500 text-pink-500"
                                                                href="mailto:freddyfallon@gmail.com">email me</Link>, or
            check out my <Link className="underline decoration-pink-500 text-pink-500" href="https://www.linkedin.com/in/freddyfallon/">LinkedIn</Link>.</Text>
        </VSpace>
      </Section>
    </main>
  );
}
