import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "300px" }}>{children}</div>
      <Footer />
    </div>
  );
}
