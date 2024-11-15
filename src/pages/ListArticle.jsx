import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../components/Footer";

export const ListArticle = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-secondary px-7">
        <div className="w-full pt-7 ">
          <div className="flex md:flex-row flex-col-reverse gap-4 justify-between items-center">
            <div className=" w-full flex flex-col">
              <ItemArtickel />
              <ItemArtickel />
              <ItemArtickel />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const ItemArtickel = () => {
  return (
    <div className="rounded gap-2 flex justify-center items-center border-y md:py-5 md:border-none py-2">
      <div className="">
        <h3 className="md:text-xl text-lg font-bold">
          How Solar Energy is Revolutioning Transportation industri
        </h3>
        <div className="flex items-center text-xs md:text-sm gap-4 font-light ">
          <p className="text-neutral">December 25, 2023</p>
        </div>
        <p className="md:text-base text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est fuga
          harum nesciunt totam obcaecati unde eveniet natus, quos esse, vitae
          cumque. Quo commodi, velit ratione sit officiis repellat eius nihil.
        </p>

        <button className="flex items-center gap-2 text-neutral my-4 hover:text-primary">
          <p>See Detail</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="">
        <img
          src="./images/green-1.webp"
          alt="Gambar kecil 2"
          className="md:min-w-[12rem] min-w-[5rem] w-[30rem] object-contain mb-2 rounded"
        />
      </div>
    </div>
  );
};
