import { Navbar } from "../components/Navbar";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-secondary">
        {/* Hero Section start */}
        <div className="w-full pt-7 px-7 flex md:flex-row flex-col-reverse gap-4 justify-between items-center">
          <div className="md:w-[45%]">
            <h1 className="text-primary lg:text-6xl md:text-4xl text-2xl font-bold heading-font">
              Empowering sustainability through innovation
            </h1>
            <p className="pt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
              ut consequatur eveniet ullam non perferendis omnis repudiandae
              asperiores maiores, officia, natus minima maxime enim. Dicta
              voluptatum expedita officiis repellendus id.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <button className="btn btn-neutral text-primary">Get Started</button>
              <button className="btn bg-gray-400 border-none hover:bg-gray-400 text-primary">Reading</button>
            </div>
          </div>
          <div className="relative flex justify-end w-full lg:w-[650px] md:rounded-3xl overflow-hidden">
            <div className="w-full absolute h-full bg-[#CCFF33] rotate-[25deg] rounded-3xl top-12 left-12 hidden md:block"></div>
            <img
              src="./images/windmill.jpg"
              width={'90%'}
              alt=""
              className="rounded-3xl img-clip hidden md:block"
            />
            <img
              src="./images/windmill.jpg"
              alt=""
              className="rounded-xl w-full md:hidden block"
            />
          </div>
        </div>
        {/* Hero Section end */}
      </div>
    </>
  );
};
