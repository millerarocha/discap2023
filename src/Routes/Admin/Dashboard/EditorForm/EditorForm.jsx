import Input from "../../../../common/Input";

const EditorForm = ({
  title = "Diligencie los campos",
  titleLabel = "Titulo",
  resumeLabel = 'Resumen',
  descriptionLabel = "Descripción",
  data = {},
  onInputChange,
  onEditorChange,
  onEdit,
  onSave,
  isEditorMode=false
}) => {
  return (
    <div className="w-3/4 mx-auto flex flex-col bg-slate-300 p-6 rounded-lg">
      <h2 className="font-bold text-lg uppercase text-center mb-5">{title}</h2>
      <form className="flex flex-col gap-4">
        <Input name='title' label={titleLabel} value={data.title} onInputChange={onInputChange} />
        <Input name='resume' label={resumeLabel} value={data.resume} onInputChange={onInputChange} />
        <Input
          name='editor'
          label={descriptionLabel}
          value={data.description}
          isEditor
          onEditorChange={onEditorChange}
        />
        <div className="flex">
          <button className="btn btn-primary" onClick={isEditorMode ? onEdit : onSave}>
            {isEditorMode ? 'EDITAR' : 'CREAR'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditorForm;
