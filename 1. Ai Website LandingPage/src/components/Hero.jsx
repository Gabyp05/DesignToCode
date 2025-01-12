import { aiModel, elements } from "../assets";

const Hero = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        
        <div className="container mx-auto">
          <div className="pt-20 pb-20 ">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="w-[686px] flex flex-col items-start gap-y-7 ml-20">
                <div className="flex flex-row items-center justify-between w-fit py-3 px-4 gap-x-2 rounded-full bg-black border border-white/15">
                  <span className="bg-white rounded-full w-fit h-auto font-inter font-bold uppercase text-[10px] py-1 px-2 ">
                    New
                  </span>
                  <p className="font-inter text-white text-base">
                    Latest integration just arrived
                  </p>
                </div>
                <div>
                  <h1 className="text-gradient font-poppins font-extrabold text-[75px] leading-[80px]">
                    Revolutionize Your Workflow with AI
                  </h1>
                </div>
                <h2 className="text-poppins text-white text-[25px]">
                  Experience cutting-edge solutions designed to elevate
                  productivity and deliver results like never before.
                </h2>

                <button className="button-inner-shadow text-white text-xl font-normal bg-black px-6 py-3 rounded-full">
                  Get Started
                </button>
              </div>

              {/* Hero Image */}

              <div className="relative">
               
                <img
                  src={elements}
                  alt="Elements"
                  className="absolute -right-[20%] w-full h-full object-cover opacity-50"
                />
                <img
                  src={aiModel}
                  alt="Ai robot woman"
                  className="relative z-10 w-full max-w-5xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
