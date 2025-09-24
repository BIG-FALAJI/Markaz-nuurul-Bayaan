import { lazy } from "react";
import { allPaths } from "./paths";
const Faq = lazy(() => import("../page/FAQ"));
const About = lazy(() => import("../page/About"));
const ContactUs = lazy(() => import("../page/ContactUs"));
const Gallery = lazy(() => import("../page/Gallery"));
const Home = lazy(() => import("../page/Home"));

export const allRoutes = [
  {
    path: allPaths.home,
    element: Home,
  },
  {
    path: allPaths.about,
    element: About,
  },
  {
    path: allPaths.gallery,
    element: Gallery,
  },
  {
    path: allPaths.contact,
    element: ContactUs,
  },
  {
    path: allPaths.faq,
    element: Faq,
  },
];
