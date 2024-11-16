import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Editor } from "@tinymce/tinymce-react";
import { apiKeyTinyMce } from "../../../config/config";
export const FormAddArticle = ({setAddArticle}) => {
  console.log(apiKeyTinyMce)
  return (
    <>
      <div className="min-h-screen bg-white p-7">
        <button className="text-xl font-bold mb-4" onClick={() => setAddArticle(false)}>
          <FontAwesomeIcon icon={faAngleLeft} className="pr-4" />
          Kembali
        </button>
        <form action="">
          <label htmlFor="title" className="label">
            Title Article
          </label>
          <input
            type="text"
            id="title"
            className="input input-bordered w-full"
          />
          <label htmlFor="description" className="label">
            Description
          </label>
          <input
            type="text"
            id="description"
            className="input input-bordered w-full"
          />
          <label htmlFor="content" className="label">
            Content
          </label>
          <Editor
            apiKey={apiKeyTinyMce}
            // onInit={(_evt, editor) => (editorRef.current = editor)}
            // initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 200,
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
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          <button className="btn btn-neutral hover:btn-primary text-white mt-4 w-full">Submit</button>
        </form>
      </div>
    </>
  );
};
