
import styles from './styles/main.css'
import MainNavigation from './components/MainNavigation';

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";


export const links = () => [
  ...(styles ? [{ rel: "stylesheet", href: styles }] : []),
];


export const meta = () => {
  return [
    { title: "Notas Remix" },
    {
      property: "og:title",
      content: "Very cool app",
    },
    {
      name: "description",
      content: "This app is the best",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      
      <body>
      <header>
        <MainNavigation/>
      </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({error}){
  const caughtResponse = useCatch();
  return (
    <html lang="en">
    <head>
      <Meta />
      <Links />
      <title>caughtResponse.statusText</title>
    </head>

    <body>
    <header>
      <MainNavigation/>
    </header>
      <main className='error'>
        <h1>caughtResponse.statusText</h1>
        <p>{caughtResponse.data?.message || 'something went wrong! '}</p>
        <p>Ir atrás <Link to="/">Incio</Link> Ir al inicio</p>
      </main>
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
  )
 
}

