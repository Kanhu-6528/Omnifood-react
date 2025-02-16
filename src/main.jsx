import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import ErrorSection from "./components/ErrorSection.jsx";
import HeroComponent from "./components/HeroSection.jsx";
import FeaturedComponent from "./components/FeatureSection.jsx";
import HowComponent from "./components/HowSection.jsx";
import MealComponent from "./components/MealsSection.jsx";
import TestimonyComponent from "./components/TestimonialSection.jsx";
import PricingComponent from "./components/PricingSection.jsx";
import CallToAction from "./components/CTASection.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorSection />}>
      <Route path="" element={<HeroComponent />} />
      <Route path="feature" element={<FeaturedComponent />} />
      <Route path="how" element={<HowComponent />} />
      <Route path="meals" element={<MealComponent />} />
      <Route path="testimonials" element={<TestimonyComponent />} />
      <Route path="pricing" element={<PricingComponent />} />
      <Route path="cta" element={<CallToAction />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
