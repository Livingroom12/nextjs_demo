// This is a SERVER component (default in the App Router).
// It renders on the server, so it can read data directly - no useEffect needed.
import Counter from "./components/Counter";
import QuoteBox from "./components/QuoteBox";

// Plain in-memory data instead of a database.
const topics = [
  { id: 1, title: "File-based routing", text: "A folder with a page.js file becomes a URL. app/about/page.js is /about." },
  { id: 2, title: "Server components", text: "Components run on the server by default, which keeps JavaScript sent to the browser small." },
  { id: 3, title: "Client components", text: "Add 'use client' at the top of a file when you need state, effects, or click handlers." },
  { id: 4, title: "Route handlers", text: "A route.js file inside app/api creates a backend endpoint without a separate server." },
];

export default function HomePage() {
  const renderedAt = new Date().toLocaleString("en-IN");

  return (
    <>
      <h1>Welcome to Next.js</h1>
      <p>
        This page was rendered on the server at <code>{renderedAt}</code>.
        There is no database; all data lives in plain JavaScript.
      </p>

      <h2>What you will learn here</h2>
      {topics.map((t) => (
        <div className="card" key={t.id}>
          <h3>{t.title}</h3>
          <p>{t.text}</p>
        </div>
      ))}

      <h2>Client component: counter</h2>
      <p>State lives in the browser, so this part needs <code>'use client'</code>.</p>
      <Counter />

      <h2>API route: random quote</h2>
      <p>This button calls <code>/api/quote</code>, which is defined in <code>app/api/quote/route.js</code>.</p>
      <QuoteBox />
    </>
  );
}