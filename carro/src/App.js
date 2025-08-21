import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CarGrid from "./components/CarGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        border: "4px solid black",
        boxSizing: "border-box",
      }}
    >
      <Header />

      <div style={{ display: "flex", flex: 1, gap: 16, padding: 16 }}>
        <Sidebar />
        <CarGrid />
      </div>

      <Footer />
    </div>
  );
}
