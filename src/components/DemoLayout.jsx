// These are just for the demo, don't worry about them :)

const Code = ({ children }) => (
  <code className="text-violet-400">{children}</code>
);

export const DemoLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <DemoHeader />

    <main className="flex-1 px-8 flex items-center justify-center">
      {children}
    </main>

    <DemoFooter />
  </div>
);

export const SetupHintText = () => (
  <div className="flex flex-col items-center justify-center bg-[#F9FBFC] text-center text-gray-500 h-full min-h-[650px] border-2 border-dashed border-gray-200 rounded-xl">
    <p className="text-lg">✨ Let's add an interactive dashboard here ✨</p>

    <p className="text-sm my-4">
      <ul className="flex flex-col list-decimal list-inside items-start w-full max-w-[550px] font-mono">
        <li>
          run <Code>npx @metabase/embedding-sdk-react start</Code>
        </li>
        <li>
          add <Code>&lt;AnalyticsPage /&gt;</Code> from ./components/metabase to
          <Code> App.jsx</Code>
        </li>
      </ul>
    </p>

    <div className="font-mono text-sm max-w-[500px]">
      tip: you can edit the dashboard in <Code>analytics-dashboard.jsx</Code>{" "}
      and customize the theme in <Code> embedding-provider.jsx</Code> 👀
    </div>
  </div>
);

export const DemoHeader = () => (
  <header className="flex justify-between items-center px-8 py-5">
    <div className="flex items-center space-x-2">
      <img src="/assets/metabase-logo.svg" alt="Metabase" className="h-8" />

      <span className="text-xl font-semibold text-gray-600">
        Embedding Workshop
      </span>
    </div>

    <nav className="flex space-x-6">
      <a
        href="https://www.metabase.com/docs/latest/embedding/sdk/quickstart-cli"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-violet-500 transition-colors"
      >
        Quickstart
      </a>
      <a
        href="https://www.metabase.com/docs/latest/embedding/sdk/introduction"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-violet-500 transition-colors"
      >
        SDK Docs
      </a>
    </nav>
  </header>
);

export const DemoFooter = () => (
  <footer className="py-8 w-full max-w-[600px] mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-3">
      <div>
        <h3 className="font-semibold mb-2 text-gray-500">Try this out</h3>
        <ul className="space-y-1">
          <li>
            <a
              href="https://www.metabase.com/docs/latest/embedding/sdk/dashboards"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-500 text-sm"
            >
              Embed a dashboard
            </a>
          </li>
          <li>
            <a
              href="https://www.metabase.com/docs/latest/embedding/sdk/questions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-500 text-sm"
            >
              Embed a question
            </a>
          </li>
          <li>
            <a
              href="https://www.metabase.com/docs/latest/embedding/sdk/appearance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-500 text-sm"
            >
              Make your own theme
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2 text-gray-500">Sample Apps</h3>
        <ul className="space-y-1">
          <li>
            <a
              href="https://github.com/metabase/metabase-nodejs-react-sdk-embedding-sample"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-500 text-sm"
            >
              Node.js + React
            </a>
          </li>
          <li>
            <a
              href="https://github.com/metabase/metabase-nextjs-sdk-embedding-sample"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-500 text-sm"
            >
              Next.js
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2 text-gray-500">Community</h3>
        <ul className="space-y-1">
          <li>
            <a
              href="https://github.com/metabase/metabase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-500 text-sm"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://discourse.metabase.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-500 text-sm"
            >
              Discourse
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);
