# Metabase Embedded Analytics Workshop

This is a starter React app for trying out [Embedded Analytics SDK](https://www.metabase.com/docs/latest/embedding/sdk/introduction).

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/metabase/metabase-embedding-sdk-workshop-sample.git
   cd metabase-embedding-sdk-workshop-sample
   ```

2. Start Docker on your machine. This is used to setup a clean Metabase instance to try out the SDK. If you don't have Docker installed, you can download Docker Desktop below:

   - [Download for macOS](https://docs.docker.com/desktop/setup/install/mac-install/)
   - [Download for Windows](https://docs.docker.com/desktop/setup/install/windows-install/)
   - [Download for Linux](https://docs.docker.com/desktop/setup/install/linux/)

For mac, if the CLI doesn't detect Docker running on your system, you may need to add Docker to your path. Add this export statement to your `~/.zshrc` file:

    export PATH="$PATH:/Applications/Docker.app/Contents/Resources/bin/"

3. Install the Embedded Analytics SDK:

   ```bash
   npm install @metabase/embedding-sdk-react@53-stable
   ```

4. Start the frontend. You can view the app at [http://localhost:5173](http://localhost:5173). The app has some hints and helpful links to get you started.

   ```bash
   npm run dev
   ```

5. In a new terminal, run the quickstart command:

   ```bash
   npx @metabase/embedding-sdk-react start
   ```

6. Follow the instructions in your terminal to complete the setup. You can navigate the prompts with the arrow keys and `Enter` to select an option.

7. Import the `<AnalyticsPage />` demo component into `App.jsx`, like so:

   ```diff
   + import { AnalyticsPage } from "./components/metabase";

   export default function App() {
     return (
       <DemoLayout>
         <div className="min-h-[650px] w-full max-w-[1200px] bg-white rounded-xl">
   +       <AnalyticsPage />
         </div>
       </DemoLayout>
     );
   }
   ```

You can then play around with the interactive dashboard!

## What next?

- The interactive dashboard is added by default in `analytics-dashboard.jsx`.
  - Try rendering an [interactive question](https://www.metabase.com/docs/latest/embedding/sdk/questions) instead.
- You can update the theme via `MetabaseProvider` in `embedding-provider.jsx`

## There should be one, and only one, `MetabaseProvider` in your app

In a production React app, you should never add `MetabaseProvider` to multiple pages or components, just like any other React providers. Instead, you should put it in the root of your app (e.g. `App.jsx`) or your root provider if you have one.
Just like other React providers, do NOT add `MetabaseProvider` to more than one page, or more than one component. Instead, you should put `MetabaseProvider` in either a) the root of your app (e.g., `App.jsx`) or b) your root provider (if you have one).
## CLI is not intended for production use

The CLI spins up a Metabase and help you get an embedded dashboard in your app. This setup with API keys won’t work in production; it’s only intended for you to quickly try out the SDK on your local machine. A production setup requires a Pro/Enterprise license, and SSO with JWT.

## Resources

- [SDK Documentation](https://www.metabase.com/docs/latest/embedding/sdk/introduction)
- [Quickstart with CLI](https://www.metabase.com/docs/latest/embedding/sdk/quickstart-cli)
- [Quickstart using your own Metabase instance](https://www.metabase.com/docs/latest/embedding/sdk/quickstart)
