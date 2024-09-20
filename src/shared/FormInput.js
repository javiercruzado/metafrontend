const FormInput = (props) => {
  const { validationInfo } = props;

  return (
    <div className="form-input">
      {props.children}
      {!validationInfo.isValid ? (
        <p className="form-input-error">{validationInfo.message}</p>
      ) : null}
    </div>
  );
};

export default FormInput;
