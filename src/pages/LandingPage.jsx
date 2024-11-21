import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getDataArticles } from "../services/getAllArticle";
import { truncateText } from "../utils/truncateText";
import { convertTimestampToDate } from "../utils/convertTime";
import { Link } from "react-router-dom";
export const LandingPage = () => {
  const [dataArticles, setDataArticles] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getDataArticles();
        setDataArticles(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, []);
  console.log(dataArticles);
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-secondary px-7">
        {/* Hero Section start */}
        <div className="w-full pt-10 pb-14 flex md:flex-row flex-col-reverse gap-4 justify-between items-center ">
          <div className="md:w-[45%]">
            <h1 className="text-primary lg:text-6xl md:text-4xl text-2xl font-bold heading-font">
              Explore a Greener Future
            </h1>
            <p className="pt-2">
              Discover the latest innovations and insights in green technology
              and renewable energy—all in one place.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <Link to={'/article'} className="btn btn-neutral text-primary">
                Read Articles
              </Link>
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
      </div>
      <div className="px-7 bg-[#CCFF33] py-4">
        <h2 className="text-primary lg:text-5xl md:text-3xl text-xl text-center font-semibold heading-font ">
          About Green<span className="text-neutral">Insight</span>
        </h2>
        <p className="text-center md:max-w-[70%] mx-auto pt-2 text-sm md:text-base">
          GreenInsight is a platform dedicated to sharing the latest insights
          and advancements in green technology and renewable energy. Our mission
          is to inspire individuals and communities to take actionable steps
          toward a more sustainable future. With in-depth articles, practical
          guides, and innovative ideas, we aim to support the transition to a
          greener lifestyle for everyone
        </p>
      </div>
      <div className="px-7 bg-secondary">
        <>
          <h2 className="lg:text-5xl md:text-3xl text-xl font-semibold text-primary heading-font text-center pt-[4rem]">
            News and Update
          </h2>
          <p className="text-center w-full md:w-[70%] mx-auto pt-2 text-sm md:text-base">
            Stay informed with the latest news and updates on green technology
            and renewable energy. Explore groundbreaking innovations, policy
            changes, and inspiring stories shaping a sustainable future. From
            global trends to local initiatives, we bring you timely insights to
            keep you ahead in the journey toward a greener world
          </p>
          <div className="w-full pt-7 ">
            <div className="flex md:flex-row flex-col-reverse gap-4 justify-center items-center">
              <div className="w-full md:w-[70%] flex flex-col py-6">
                {dataArticles &&
                  dataArticles
                    .slice()
                    .reverse()
                    .slice(0, 3)
                    .map((item) => (
                      <ItemArtickel
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        img={item.image}
                        updateAt={item.update_at}
                        description={item.description}
                      />
                    ))}
                <Link to={"/article"} className="btn btn-neutral w-full">
                  See other articles
                </Link>
              </div>
            </div>
          </div>
        </>
      </div>
      <Footer />
    </>
  );
};

const ItemArtickel = ({ title, img, updateAt, description, id }) => {
  return (
    <div className="rounded gap-2 flex items-center md:flex-row flex-col py-4">
      <img
        src={`${
          import.meta.env.VITE_SUPABASE_URL
        }/storage/v1/object/public/image-article/public/${img}`}
        alt="image article"
        className="md:max-w-[20rem] md:min-w-[20rem] w-full max-h-[10rem] object-cover mb-2 rounded"
      />
      <div className="">
        <div className="flex items-center text-sm gap-4 font-light ">
          <p className="text-neutral">Update</p>
          <p className="">{convertTimestampToDate(updateAt)}</p>
        </div>

        <h3 className="text-xl font-bold">{title}</h3>
        <p>{truncateText(description, 25)}</p>

        <Link to={`/article/${id}`} className="flex items-center gap-2 text-neutral my-4 hover:text-primary">
          <p>See Detail</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};
