import Counter from "./counter";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <div>
      <h1 data-testid="h1">App Router</h1>
      <Counter />
    </div>
  );
}
