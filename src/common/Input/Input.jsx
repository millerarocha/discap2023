import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const editorConfiguration = {
  toolbar: [
    "undo",
    "redo",
    "heading",
    "|",
    "bold",
    "italic",
    "bulletedList",
    "numberedList",
    "|",
    "link",
  ],
};

const Input = ({ label = "input title", value='', placeholder, name, isEditor = false, onInputChange, onEditorChange }) => {

  
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text uppercase">{label}</span>
      </label>
      {isEditor ? (
        <CKEditor
          name={name}
          className="form-control w-full"
          editor={ClassicEditor}
          config={editorConfiguration}
          data={value}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={onEditorChange}
        />
      ) : (
        <input
          name={name}
          type="text"
          placeholder={placeholder}
          className="input input-bordered w-full"
          value={value}
          onChange={onInputChange}
        />
      )}
    </div>
  );
};

export default Input;
