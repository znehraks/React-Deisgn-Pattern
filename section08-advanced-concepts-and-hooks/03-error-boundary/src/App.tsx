import { Child } from "./Child";
import { ErrorBoundary } from "./CustomErrorBoundary";

function App() {
  return (
    <>
      <h1>Parent Component</h1>
      <ErrorBoundary fallback={<h2>Error at Child level</h2>}>
        <Child />
      </ErrorBoundary>
    </>
  );
}

export default App;
