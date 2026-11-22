    export const metadata = { title: "About - Simple Next.js App" };

export default function AboutPage() {
  return (
    <>
      <h1>About this project</h1>
      <p>
        This second page exists to show file-based routing. The file
        <code> app/about/page.js </code> automatically becomes the <code>/about</code> URL.
      </p>
      <div className="card">
        <h3>Project structure</h3>
        <p>
          <code>app/layout.js</code> shared layout and navigation<br />
          <code>app/page.js</code> home page<br />
          <code>app/about/page.js</code> this page<br />
          <code>app/components/</code> reusable components<br />
          <code>app/api/</code> backend endpoints
        </p>
      </div>
      <div className="card">
        <h3>Try the hello API</h3>
        <p>Open <a href="/api/hello?name=Asha">/api/hello?name=Asha</a> in your browser.</p>
      </div>
    </>
  );
}