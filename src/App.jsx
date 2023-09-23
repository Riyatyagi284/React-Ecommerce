import React,{ lazy, Suspense } from "react";
import styles from "./style";
// const { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } = React.lazy(() => import ("./components"))

const {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} ={
  Billing: lazy(() => import("./components/Billing")),
  Business: lazy(() => import("./components/Business")),
  CardDeal: lazy(() => import("./components/CardDeal")),
  Clients: lazy(() => import("./components/Clients")),
  CTA: lazy(() => import("./components/CTA")),
  Footer: lazy(() => import("./components/Footer")),
  Navbar: lazy(() => import("./components/Navbar")),
  Stats: lazy(() => import("./components/Stats")),
  Testimonials: lazy(() => import("./components/Testimonials")),
  Hero: lazy(() => import("./components/Hero")),
};



const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
