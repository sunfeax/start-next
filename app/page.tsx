import CoreConceptList from "@/components/concepts/core-concept-list";
import Header from "@/components/header";
import TabExampleSection from "@/components/tab-section/tab-example-section";

export default function Home() {
  return (
  <>
    <Header/>
    <CoreConceptList />
    <TabExampleSection />
  </>
  );
}
