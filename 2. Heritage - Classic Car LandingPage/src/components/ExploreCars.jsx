import { vintageCar } from "../assets";
import { MoveRight } from "lucide-react";

const ExploreCars = () => {
  return (
    <section className="container mx-auto px-20 py-8 mt-8 flex flex-col gap-10">
      <div className="flex flex-row items-center justify-between gap-x-14">
        <div className="flex flex-col space-y-4">
          <h1 className="text-[180px] font-montagu font-black leading-none">
            Unique <br /> Cars
          </h1>
          <button className="w-52 h-16 border border-heritage-orange rounded-full flex gap-x-4 items-center justify-center hover:scale-105  transition-colors">
            Explore cars <MoveRight className="text-heritage-orange" />
          </button>
        </div>
        <div className="w-96 p-8 flex flex-col space-y-4 rounded-[40px] bg-heritage-black overflow-hidden">
          <span className="w-fit px-3 py-1 rounded-full border border-white font-medium text-white">
            Feature
          </span>

          <p className="font-medium text-2xl text-white">
            Discover the uniqueness <br /> and true charecter <br /> in each
            model.
          </p>

          <img
            src={vintageCar}
            alt="Vintage black car"
            className="object-cover w-full translate-x-[30%]"
          />
        </div>
      </div>
        <div className="grid grid-cols-3 gap-x-20">
          <p className="text-pretty text-lg">
            Every classic car in our collection is hand-picked to ensure it
            boasts authenticity, is in pristine condition, and possesses
            exceptional visual appeal.
          </p>
 
          <p className="text-pretty text-lg">
            Every classic car in our collection is hand-picked to ensure it
            boasts authenticity, is in pristine condition, and possesses
            exceptional visual appeal.
          </p>
          <p className="text-pretty text-lg">
            Every classic car in our collection is hand-picked to ensure it
            boasts authenticity, is in pristine condition, and possesses
            exceptional visual appeal.
          </p>
        </div>
    </section>
  );
};

export default ExploreCars;
