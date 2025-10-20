import CoreConceptList from "@/components/concepts/core-concept-list";
import Dropdown from "@/components/dropdown";
import Header from "@/components/header";
import TabExampleSection from "@/components/tab-section/tab-example-section";

export default function Home() {
  return (
  <>
    <Header/>
    <nav className="flex flex-col md:flex-row bg-purple-900 justify-center md:justify-between">
      <Dropdown menuText="Hola"></Dropdown>
      <Dropdown menuText="Adios"></Dropdown>
    </nav>
    <CoreConceptList />
    <TabExampleSection />
  </>
  );
}
