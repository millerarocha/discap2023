const EditorTitle = ({ title = "titulo", btnText = "", onClick }) => {
  return (
    <div className="flex justify-between py-5">
      <h3 className="text-2xl uppercase">{title}</h3>
      {btnText && (
        <button className="btn btn-outline" onClick={onClick}>
          {btnText}
        </button>
      )}
    </div>
  );
};

export default EditorTitle;
