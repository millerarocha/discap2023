import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const editorConfiguration = {
  toolbar: [
    'undo',
    'redo',
    'heading',
    '|',
    'bold',
    'italic',
    'bulletedList',
    'numberedList',
    '|',
    'link',
  ],
};

const Input = ({ label = "input title", placeholder, isEditor = false }) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text uppercase">{label}</span>
      </label>
      {isEditor ? (
        <CKEditor
          className="form-control w-full"
          editor={ClassicEditor}
          config={editorConfiguration}
          data={placeholder}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered w-full"
        />
      )}
    </div>
  );
};

export default Input;
