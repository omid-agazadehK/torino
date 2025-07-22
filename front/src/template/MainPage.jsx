import AdvantagesSection from "@/modules/AdvantagesSection";
import Banner from "@/modules/Banner";
import FilterSection from "@/modules/FilterSection";
import ToursSection from "@/modules/ToursSection";
import WelcomSection from "@/modules/WelcomSection";
import WhyTorinoSection from "@/modules/WhyTorinoSection";

function MainPage() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <WelcomSection />
      <FilterSection />
      <ToursSection />
      <Banner />
      <WhyTorinoSection />
      <AdvantagesSection />
    </main>
  );
}

export default MainPage;
