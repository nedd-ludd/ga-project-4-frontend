import OursHero from "./home/OursHero";
import OursExamples from "./home/OursExamples";
import HowItWorks from "./home/HowItWorks";
import AboutSharing from "./home/AboutSharing";
import AppFooter from "./home/AppFooter";

export default function home() {
  return (
    <>
      <OursHero />
      <HowItWorks />
      <OursExamples />
      <AboutSharing />
      <AppFooter />
    </>
  );
}
