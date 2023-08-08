import React from "react";
const Navbar = React.lazy(() => import ("./Navbar"));
const Billing = React.lazy(() => import ("./Billing"));
const CardDeal = React.lazy(() => import ("./CardDeal"));
const Business = React.lazy(() => import ("./Business"));
const Clients = React.lazy(() => import ("./Clients"));
const CTA = React.lazy(() => import ("./CTA"));
const Stats = React.lazy(() => import ("./Stats"));
const Footer = React.lazy(() => import ("./Footer"));
const Testimonials = React.lazy(() => import ("./Testimonials"));
const Hero = React.lazy(() => import ("./Hero"));

export {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
};
