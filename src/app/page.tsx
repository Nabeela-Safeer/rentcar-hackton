
import Header from "@/components/Header";
import Rentcar from "@/components/Rentcar";
import Recommedcar from "@/components/Recommedcar"
import Popularcars from '@/components/Popularcars';
import Pickup from '@/components/Pickup';
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Rentcar/>
      <Pickup/>
      <Popularcars/>
      <Recommedcar/>
      <Footer/>
    </div>
  );
}
