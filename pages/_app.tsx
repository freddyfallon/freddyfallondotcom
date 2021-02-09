import '../styles/globals.css';

function App({
  Component,
  pageProps,
}: {
  Component: React.FC;
  pageProps: { [key: string]: any };
}) {
  return <Component {...pageProps} />;
}

export default App;
