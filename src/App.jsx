import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./Layout";
import { allRoutes } from "./Route/route";
import { Suspense, useEffect } from "react";
import ScrollToTop from "./component/scroll-to-top";
import WhatsAppChat from "./Shared/WhatsAppChat";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({
      duration: 3000, // animation duration (1s)
      once: true, // animate only once per element
      offset: 100, // trigger 100px before element is in view
    });
  }, []);

  return (
    <>
      <Layout>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {allRoutes.map(({ path, element: Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Routes>
          <WhatsAppChat />
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
