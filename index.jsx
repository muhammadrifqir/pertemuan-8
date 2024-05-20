import Container from "../container";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";

/**
 * membuat componet layout
 * layout terdiri dari navbar, footer, children
 * menggunakan teknik composition:
 * - menampilkan konten dinamis
 * - menggunakan props children
 */
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {/**
         * menggunakan component container
         * konten dibungkus dengan container
         */}
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
