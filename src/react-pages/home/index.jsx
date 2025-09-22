import React from "react";
import { Navbar2 } from "./components/navbar-02";
import { Header5 } from "./components/header-05";
import { Layout192 } from "./components/layout-192";
import { Logo2 } from "./components/logo-02";
import { Services } from "./components/layout-306";
import { Support } from "./components/layout-198";
import { Projects } from "./components/portfolio-12";
import { Cta27 } from "./components/cta-27";
import { Footer5 } from "./components/footer-05";

export default function Page() {
  return (
    <div>
      <Navbar2 />
      <Header5 />
      <Layout192 />
      <Logo2 />
      <Services />
      <Support />
      <Projects />
      <Cta27 />
      <Footer5 />
    </div>
  );
}
