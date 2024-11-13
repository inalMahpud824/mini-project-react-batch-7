import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-secondary px-7">
        {/* Hero Section start */}
        <div className="w-full pt-7 flex md:flex-row flex-col-reverse gap-4 justify-between items-center mb-7">
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
              <button className="btn btn-neutral text-primary">
                Get Started
              </button>
              <button className="btn bg-gray-400 border-none hover:bg-gray-400 text-primary">
                Reading
              </button>
            </div>
          </div>
          <div className="relative flex justify-end w-full lg:w-[650px] md:rounded-3xl overflow-hidden">
            <div className="w-full absolute h-full bg-[#CCFF33] rotate-[25deg] rounded-3xl top-12 left-12 hidden md:block"></div>
            <img
              src="./images/windmill.jpg"
              width={"90%"}
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

        <>
          <h2 className="lg:text-5xl md:text-3xl text-xl font-semibold text-primary heading-font text-center pt-[4rem]">
            News and Update
          </h2>
          <p className="pt-2 text-center text-primary max-w-[28rem] mx-auto font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            dignissimos reiciendis ducimus.igendi, earum deserunt.
          </p>
          <div className="w-full pt-7 ">
            <div className="flex md:flex-row flex-col-reverse gap-4 justify-between items-center mb-7">
              <div className="md:w-1/2 w-full">
                <img
                  src="./images/green-1.webp"
                  alt="Gambar besar"
                  className="w-full md:h-[60%] object-cover rounded"
                />
                <div className="">
                  <div className="flex items-center text-sm gap-4 ">
                    <p className="text-neutral p-2">Update</p>
                    <p className="">December 25, 2023</p>
                  </div>

                  <h3 className="text-xl font-bold">
                    How Solar Energy is Revolutioning Transportation industri
                  </h3>

                  <button className="btn text-neutral btn-ghost my-4 hover:text-primary">
                    <p>See Detail</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>

              <div className="md:w-1/2 w-full flex flex-col">
                <ItemArtickel />
                <ItemArtickel />
                <ItemArtickel />
              </div>
            </div>
          </div>
        </>
      </div>
      <Footer />
    </>
  );
};

const ItemArtickel = () => {
  return (
    <div className="rounded gap-2 flex items-center md:flex-row flex-col">
      <img
        src="./images/green-1.webp"
        alt="Gambar kecil 2"
        className="w-full md:w-[50%] object-cover mb-2 rounded"
      />
      <div className="">
        <div className="flex items-center text-sm gap-4 font-light ">
          <p className="text-neutral">Update</p>
          <p className="">December 25, 2023</p>
        </div>

        <h3 className="text-xl font-bold">
          How Solar Energy is Revolutioning Transportation industri
        </h3>

        <button className="flex items-center gap-2 text-neutral my-4 hover:text-primary">
          <p>See Detail</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}