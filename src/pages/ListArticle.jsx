import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataArticles } from "../services/getAllArticle";
import { convertTimestampToDate } from "../utils/convertTimeStamp";
import { truncateText } from "../utils/truncateText";

export const ListArticle = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      try{
        const response = await getDataArticles();
        setArticles(response);
      }catch(error){
        console.error(error)
      }
    }
    fetch()
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-secondary px-7">
        <div className="w-full pt-7 ">
          <div className="flex md:flex-row flex-col-reverse gap-4 justify-between items-center">
            <div className=" w-full flex flex-col">
              {articles &&
                articles.map((article) => (
                  <ItemArtickel
                    key={article.id}
                    description={article.description}
                    title={article.title}
                    image={article.image}
                    id={article.id}
                    updateAt={article.update_at}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const ItemArtickel = ({title, image, description, id, updateAt}) => {
  return (
    <div className="rounded gap-2 flex justify-center items-center border-y md:py-5 md:border-none py-2">
      <div className="">
        <h3 className="md:text-xl text-lg font-bold">{title}</h3>
        <div className="flex items-center text-xs md:text-sm gap-4 font-light ">
          <p className="text-neutral">{convertTimestampToDate(updateAt)}</p>
        </div>
        <p className="md:text-base text-sm">{truncateText(description, 30)}</p>
        <Link to={`/article/${id}`}>
          <button className="flex items-center gap-2 text-neutral my-4 hover:text-primary">
            <p>See Detail</p>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Link>
      </div>
      <div className="">
        <img
          src={`${
            import.meta.env.VITE_SUPABASE_URL
          }/storage/v1/object/public/image-article/public/${image}`}
          alt="Gambar kecil 2"
          className="md:min-w-[12rem] min-w-[5rem] w-[30rem] object-contain mb-2 rounded"
        />
      </div>
    </div>
  );
};
