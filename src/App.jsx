import { DemoLayout, SetupHintText } from "./components/DemoLayout";

export default function App() {
  return (
    <DemoLayout>
      <div className="min-h-[650px] w-full max-w-[1200px] bg-white rounded-xl">
        {/** You can delete this and add <AnalyticsPage /> here :) */}
        <SetupHintText />
      </div>
    </DemoLayout>
  );
}
