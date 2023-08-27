import { Routes, Route } from "react-router-dom";
import Tracking from "./components/Tracking";
import History from "./components/History";
import Layout from "./components/Layout";
import Expense from "./components/Expense";
import Income from "./components/Income";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Tracking />} />
          <Route path="history" element={<History />} />
          <Route path="expense" element={<Expense />} />
          <Route path="income" element={<Income />} />
        </Route>
      </Routes>
    </div>
  );
}
