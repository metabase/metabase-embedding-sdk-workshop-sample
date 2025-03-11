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

3. Install the Embedded Analytics SDK:

   ```bash
   npm install @metabase/embedding-sdk-react@53-stable
   ```

4. Start the frontend. It will be available at [http://localhost:5173](http://localhost:5173):

   ```bash
   npm run dev
   ```

5. Run the quickstart command:

   ```bash
   npx @metabase/embedding-sdk-react start
   ```

6. Follow the instructions in the terminal to complete the setup.

## A quick note on the CLI

We built a single command to spin up a Metabase and help you get an embedded dashboard in your app. This setup with API keys won’t work in production; it’s only intended for you to quickly try out the SDK on your local machine. A production setup requires a Pro/Enterprise license, and SSO with JWT.

## What's Next?

During the workshop, we'll:

1. Set up the Metabase React SDK
2. Configure embedding settings in your Metabase instance
3. Add an interactive dashboard to this application
4. Explore various customization options

## Resources

- [SDK Documentation](https://www.metabase.com/docs/latest/embedding/sdk/introduction)
- [Quickstart with CLI](https://www.metabase.com/docs/latest/embedding/sdk/quickstart-cli)
- [Quickstart using your own Metabase instance](https://www.metabase.com/docs/latest/embedding/sdk/quickstart)
