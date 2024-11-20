import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Editor } from "@tinymce/tinymce-react";
import { apiKeyTinyMce, filePickerCallBack } from "../../../config/config";
import { useRef, useState } from "react";
import { addArticle } from "../../../services/addArticle";
import { uploadImage } from "../../../services/uploadImage";
import { Loading } from "../../../components/Loading";
export const FormAddArticle = ({ setAddArticle }) => {
  const [inputArticle, setInputArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const handleChange = (e) => {
    setInputArticle({
      ...inputArticle,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const file = imageRef.current.files[0];
    const randomName = crypto.randomUUID();
    try {
      await uploadImage(file, randomName);
      await addArticle({
        title: inputArticle.title,
        description: inputArticle.description,
        content: contentRef.current.getContent(),
        image: randomName,
      });
      setIsLoading(false);
      setAddArticle(false);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
    return;
  };
  return (
    <>
      {isLoading && <Loading />}
      <div className="min-h-screen bg-white p-7">
        <button
          className="text-xl font-bold mb-4"
          onClick={() => setAddArticle(false)}
        >
          <FontAwesomeIcon icon={faAngleLeft} className="pr-4" />
          Kembali
        </button>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="title" className="label">
            Title Article
          </label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <label htmlFor="description" className="label">
            Description
          </label>
          <input
            type="text"
            id="description"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <label htmlFor="image" className="label">
            Image
          </label>
          <input
            type="file"
            id="image"
            ref={imageRef}
            className="file-input w-full file-input-primary"
          />
          <label htmlFor="content" className="label">
            Content
          </label>
          <Editor
            apiKey={apiKeyTinyMce}
            onInit={(_evt, editor) => (contentRef.current = editor)}
            // initialValue="<p>This is the initial content of the editor.</p>"
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
          <button
            className="btn btn-neutral hover:btn-primary text-white mt-4 w-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
