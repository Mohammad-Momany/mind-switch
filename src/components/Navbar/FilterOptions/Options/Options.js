import optionsValue from "./optionsValue";

const Options = () => {
  return (
    <>
      {optionsValue.map(({ value, displayText }, i) => (
        <option key={i} value={value}>
          {displayText}
        </option>
      ))}
    </>
  );
};

export default Options;
