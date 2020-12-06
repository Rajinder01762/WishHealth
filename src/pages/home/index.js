import React from "react";
import { HomeBanner } from "../../components/banner";
import BookOurDoctors from "./BookOurDoctors";
import ServiceWeProvide from "./ServiceWeProvide";
import HealthIssues from "./HealthIssues";
import Features from "./Features";
import WhatsDoctorSays from "./WhatsDoctorSays";
import FAQ from "./FAQ";
import BlogsSection from "./BlogsSection";
export default () => (
  <>
    <HomeBanner />
    <BookOurDoctors />
    <ServiceWeProvide />
    <HealthIssues />
    <BlogsSection />
    <WhatsDoctorSays />
    <FAQ />
    <Features />
  </>
);
