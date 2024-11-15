import { Navbar } from "../components/Navbar";
import gambar from "../assets/images/green-1.webp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
export const DetailArticle = () => {
  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen bg-secondary px-7 py-7">
        <img
          src={gambar}
          alt="Gambar kecil 2"
          // width={600}
          className="md:h-[350px] h-[200px] lg:min-w-[900px] md:min-w-[700px] min-w-full  object-cover  mb-2 rounded mx-auto"
        />

        <div className="lg:px-[12rem] md:px-[9rem] px-4 text-left py-7">
          <h1 className="text-3xl font-bold">
            How Solar Energy is Revolutioning Transportation industri
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            illo eaque porro culpa recusandae sapiente quia corporis pariatur
            repellat, repellendus cupiditate mollitia ab nobis minus
            necessitatibus veritatis maiores. Repudiandae, illo.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
            sint ipsum autem voluptatem aut, corrupti est, numquam vero odit id
            quos labore optio fuga tempora eum magnam deserunt repellendus
            consectetur soluta quaerat. Voluptatibus odit rerum minus a et
            adipisci unde inventore! Minus perspiciatis temporibus, maxime ipsam
            perferendis totam id rem culpa ipsa itaque, dolorum quibusdam
            voluptatem aperiam eligendi sed, quisquam tenetur sint repudiandae
            maiores fuga molestiae? Consequatur aut dolor optio nemo, ut est
            velit deserunt laudantium modi enim perspiciatis facilis molestiae
            eaque maxime illum consequuntur. Aliquid, harum ratione minus alias
            illum officia dolores optio veritatis enim dignissimos dolorem
            doloremque hic?
          </p>
          <h2 className="font-bold">Ini Judul Baru</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            explicabo doloribus in soluta natus mollitia sapiente quas suscipit
            expedita accusantium laborum, veritatis eius amet necessitatibus
            nemo illo beatae velit, iste delectus recusandae nam at alias
            tempore. Ducimus aperiam voluptate, nobis maxime quae animi
            blanditiis qui doloribus voluptas. Quis voluptatem enim cum at
            quidem eveniet sit fugit et numquam perferendis. Necessitatibus sint
            quod molestias voluptatum suscipit ut, quasi culpa molestiae quas
            est, aliquam provident eum at omnis tenetur obcaecati qui corrupti
            architecto aut totam quam commodi! Mollitia dolor dolores rerum
            dignissimos laboriosam perferendis, consectetur consequatur eligendi
            sed id nihil! Commodi sequi facere voluptatem minus mollitia,
            maiores quae aut, esse dolorem, deserunt autem ea consequatur.
            Dolore voluptatibus iste obcaecati laudantium optio, beatae qui sunt
            aliquam ad nesciunt labore pariatur iusto minima exercitationem sint
            repudiandae dolor placeat eos blanditiis provident dolorem corrupti
            aut omnis! Magnam pariatur eveniet dolorem velit fugit? Fuga
            exercitationem ipsa ratione voluptates odio ex sapiente asperiores.
            Quod, amet vel? Provident, minima, velit adipisci totam nulla sequi
            ad, repellendus ab molestiae recusandae consequatur est. Eligendi,
            alias repudiandae. Nesciunt esse sed suscipit tempore sint
            perspiciatis, unde veniam, molestiae laborum facere enim aliquid
            magnam error eligendi tempora. Consectetur exercitationem dicta
            molestiae et nulla.
          </p>
          <div className="flex items-center text-lg font-bold my-6 ">
            <Link to={"/article"} className="hover:text-base hover:text-primary">
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
                Dignissimos velit fuga officia enim repellendus facere neque,
                ratione consequuntur impedit odit in sapiente, sit molestias
                similique, laboriosam voluptas aspernatur temporibus vel!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
