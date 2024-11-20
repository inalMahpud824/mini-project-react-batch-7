import { Navbar } from "../components/Navbar";
import gambar from "../assets/images/green-1.webp";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getArticleById } from "../services/getArticleById";
export const DetailArticle = () => {
  const [article, setArticle] = useState({});
  const [error, setError] = useState(null);
  const {id} = useParams()
  useEffect(() => {
    const fetch = async () => {
      try{
        const response = await getArticleById(id);
        setArticle(response[0]);
      }catch(error){
        setError(error)
        console.error(error)
      }
    }
    fetch()
  }, [id])
  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen bg-secondary px-7 py-7">
        {article && (
          <>
            <img
              src={`${
                import.meta.env.VITE_SUPABASE_URL
              }/storage/v1/object/public/image-article/public/${article.image}`}
              alt="image Article"
              // width={600}
              className="md:h-[350px] h-[200px] lg:min-w-[900px] md:min-w-[700px] min-w-full  object-cover  mb-2 rounded mx-auto rounded-lg"
            />

            <div className="lg:px-[12rem] md:px-[9rem] px-4 text-left py-7">
              <h1 className="text-3xl font-bold">{article.title}</h1>
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              <div className="flex items-center text-lg font-bold my-6 ">
                <Link
                  to={"/article"}
                  className="hover:text-base hover:text-primary"
                >
                  <FontAwesomeIcon icon={faAngleLeft} className="mr-2" />
                  Kembali
                </Link>
              </div>
              <div className="flex justify-center items-center py-7 flex-col">
                <button className="btn btn-neutral my-4">
                  Genereta Summary with AI
                </button>
                <div className="p-7 border-dashed border-2 rounded-2xl">
                  <h3 className="text-lg font-bold">Summary with AI</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos velit fuga officia enim repellendus facere
                    neque, ratione consequuntur impedit odit in sapiente, sit
                    molestias similique, laboriosam voluptas aspernatur
                    temporibus vel!
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
