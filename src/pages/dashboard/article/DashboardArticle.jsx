import { useEffect, useState } from "react";
import { WrapperDashboard } from "../../../components/WrapperDashboard";
import { FormAddArticle } from "./FormAddArticle";
import { FormEditArticle } from "./FormEditArticle";
import { getDataArticles } from "../../../services/getAllArticle";
import { Loading } from "../../../components/Loading";
import { deleteArticleById } from "../../../services/deleteArticle";
import { Link } from "react-router-dom";
import { convertTimestampToDate } from "../../../utils/convertTime";
import { ModalConfirm } from "../../../components/Modal/ModalConfirm";
import { ModalSuccess } from "../../../components/Modal/ModalSuccess";

export const DashboardArticle = () => {
  const [addArticle, setAddArticle] = useState(false);
  const [editArticle, setEditArticle] = useState(false);
  const [idEdit, setIdEdit] = useState(null);
  return (
    <>
      <WrapperDashboard itemTabActive="article" tabActive={"konten"}>
        {addArticle ? (
          <FormAddArticle setAddArticle={setAddArticle} />
        ) : editArticle ? (
          <FormEditArticle setEditArticle={setEditArticle} id={idEdit} />
        ) : (
          <DataTable
            setAddArticle={setAddArticle}
            setEditArticle={setEditArticle}
            setIdEdit={setIdEdit}
          />
        )}
      </WrapperDashboard>
    </>
  );
};

const DataTable = ({ setAddArticle, setEditArticle, setIdEdit }) => {
  const [dataArticle, setDataArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [idDelete, setIdDelete] = useState(null)
  useEffect(() => {
    setIsLoading(true)
    const fetchAll = async () => {
      const response = await getDataArticles();
      if (response.error === true) {
        alert(response.message);
        setIsLoading(false)
        return;
      }
      setDataArticle(response);
      setIsLoading(false)
    };
    fetchAll();
    setIsLoading(false)
  }, []);

  const handleDelete = async (id) => {
    // const confirm = window.confirm(`Apakah Kamu yakin delete artilikel dengan id ${id} ini ?`);
    // if(!confirm){
    //   return;
    // } 
    try{
     await deleteArticleById(id);
      //  alert("Delete Success");
      // window.location.reload();
    document.getElementById("modal-success").showModal();
    }catch(e){
      console.error(e)
    }
  }
  return (
    <>
      {isLoading && <Loading />}
      <ModalSuccess description={'delete Success'} textButton={'Close'} title={'Success'} id="modal-success" functionClick={() => window.location.reload()} />
      <ModalConfirm description={'Are you sure delete this article'} title={'Confirm Delete'} funtionOnConfirm={() => handleDelete(idDelete)} id="modal-delete" />
      <div className="px-7 py-4 bg-white min-h-screen">
        <h1 className="text-2xl font-bold py-7">List Article</h1>
        <button
          className="btn btn-sm btn-neutral my-2 text-white"
          onClick={() => setAddArticle(true)}
        >
          Tambah
        </button>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Deskripsi</th>
                <th>Tanggal dibuat</th>
                <th>Tanggal dirubah</th>
                <th className="rounded-tr-lg">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataArticle &&
                dataArticle.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      <p className="max-h-[4rem] w-full overflow-y-auto underline ">
                        <Link
                          to={`/article/${item.id}`}
                          className="hover:text-primary"
                        >
                          {item.title}
                        </Link>
                      </p>
                    </td>
                    <td>
                      <p className="max-h-[4rem] overflow-y-auto">
                        {item.description}
                      </p>
                    </td>
                    <td>{convertTimestampToDate(item.created_at)}</td>
                    <td>{convertTimestampToDate(item.update_at)}</td>
                    <td>
                      <div className="flex gap-2">
                        <button
                          className="btn btn-sm bg-blue-600 text-white border-none"
                          onClick={() => {
                            setIdEdit(item.id);
                            setEditArticle(true);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm bg-red-600 text-white border-none"
                          onClick={() => {
                            setIdDelete(item.id)
                            document.getElementById("modal-delete").showModal();
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
