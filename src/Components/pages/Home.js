import Header from "../Home/Header";
import SportsCategory from "../Home/SportsCategory";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mx-2 flex flex-col gap-y-6 md:pt-16 md:grid md:grid-cols-2 md:gap-x-8 sm:mx-8 lg:gap-x-16 lg:mx-16">
        <SportsCategory />
        <SportsCategory />
      </div>
    </div>
  );
}
