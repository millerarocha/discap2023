

const Input = ({label='input title'}) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text uppercase">{label}</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full"
      />
    </div>
  );
};

export default Input;
