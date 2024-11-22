import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Editor } from "@tinymce/tinymce-react";
import { apiKeyTinyMce, filePickerCallBack } from "../../../config/config";
import { useEffect, useRef, useState } from "react";
import { getArticleById } from "../../../services/getArticleById";
import { updateArticleById } from "../../../services/updateArticle";
import { Loading } from "../../../components/Loading";
import { deleteImage } from "../../../services/deleteImage";
import { uploadImage } from "../../../services/uploadImage";
import { ModalSuccess } from "../../../components/Modal/ModalSuccess";
export const FormEditArticle = ({ setEditArticle, id }) => {
  const [dataEdit, setDataEdit] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const editorRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (id) {
      const fetch = async () => {
        try {
          const response = await getArticleById(id);
          setDataEdit(response[0]);
        } catch (error) {
          console.error(error);
        }
      };
      fetch();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const file = imageRef.current.files[0];
    if (!file) {
      const payload = {
        title: dataEdit.title,
        description: dataEdit.description,
        content: editorRef.current.getContent(),
      };
      try {
        await updateArticleById(dataEdit.id, payload);
        document.getElementById("succes-edit").showModal();
        setIsloading(false);
        return;
      } catch (e) {
        console.error(e);
        setIsloading(false);
        return;
      }
    }
    try {
      const randomName = crypto.randomUUID();
      const payload = {
        title: dataEdit.title,
        description: dataEdit.description,
        content: editorRef.current.getContent(),
        image: randomName,
      };
      await deleteImage(dataEdit.image);
      await uploadImage(file, randomName);
      await updateArticleById(dataEdit.id, payload);
      document.getElementById("succes-edit").showModal();
      setIsloading(false);
      return;
    } catch (e) {
      console.error(e);
      setIsloading(false);
      return;
    }
  };
  const handleChange = (e) => {
    setDataEdit({
      ...dataEdit,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <ModalSuccess
        description={"Success Edit article"}
        functionClick={() => setEditArticle(false)}
        title={"Success"}
        id="succes-edit"
        textButton={"Close"}
      />
      {isLoading && <Loading />}
      <div className="min-h-screen bg-white p-7">
        <button
          className="text-xl font-bold mb-4"
          onClick={() => setEditArticle(false)}
        >
          <FontAwesomeIcon icon={faAngleLeft} className="pr-4" />
          Kembali
        </button>
        {dataEdit && (
          <>
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="title" className="label">
                Title Article
              </label>
              <input
                type="text"
                id="title"
                defaultValue={dataEdit.title}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
              <label htmlFor="description" className="label">
                Description
              </label>
              <input
                type="text"
                id="description"
                defaultValue={dataEdit.description}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
              <label htmlFor="image" className="label">
                Image
              </label>
              <div className="flex flex-col items-center justify-center gap-4">
                <img
                  src={`${
                    import.meta.env.VITE_SUPABASE_URL
                  }/storage/v1/object/public/image-article/public/${
                    dataEdit.image
                  }`}
                  alt="image Article"
                  className="rounded-xl"
                />
                <input
                  type="file"
                  id="image"
                  ref={imageRef}
                  className="file-input file-input-primary"
                />
              </div>
              <label htmlFor="content" className="label">
                Content
              </label>
              <Editor
                apiKey={apiKeyTinyMce}
                onInit={(_evt, editor) => (editorRef.current = editor)}
                initialValue={dataEdit.content}
                init={{
                  height: 500,
                  images_file_types: "jpeg,jpg,jpe,png,gif,webp",
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "image",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help | image",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  file_picker_callback: filePickerCallBack,
                }}
              />
              <button className="btn btn-neutral hover:btn-primary text-white mt-4 w-full">
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};
