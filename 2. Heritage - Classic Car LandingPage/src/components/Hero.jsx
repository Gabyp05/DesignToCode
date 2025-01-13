import { heroImg } from "../assets";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[200px] font-montagu font-black text-center leading-none">
          Classic Cars
        </h1>
        <div className="w-fit">
        <div className="relative w-full">
          <div className="w-[1024px] max-w-7xl flex items-center justify-center space-x-2 bg-heritage-black text-white p-8 rounded-[40px]">
            <img
              src={heroImg}
              alt="Vintage Card"
              className="w-[600px] object-cover overflow-hidden -translate-x-16 "
            />

            <div className="flex flex-col items-start space-y-4 mb-12">
              <span className="w-fit px-3 py-1 rounded-full border border-white font-medium">
                Feature
              </span>

              <p className="font-medium text-4xl">
                Rediscover <br />
                Beauty on the <br />
                Road
              </p>

              <div className="flex items-center gap-4 z-10">
                <div className="flex -space-x-3">
                  <img
                    src="https://avatar.iran.liara.run/public/boy"
                    alt="People 1"
                    className="size-8 rounded-full"
                  />
                  <img
                    src="https://avatar.iran.liara.run/public"
                    alt="People 2"
                    className="size-8 rounded-full"
                  />
                  <img
                    src="https://avatar.iran.liara.run/public/girl"
                    alt="People 3"
                    className="size-8 rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl text-white">150+</span>
                  <span className="text-sm">
                    People Add <br /> collection
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-9 -bottom-6 p-6 bg-heritage-bg rounded-full">
            <button className="w-52 h-16 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
              <MoveRight className="text-white" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
