function Alert(props) {
  return (
    props.text && (
      <div
        className={`p-4 mb-4 text-sm ${
          props.type === "error"
            ? "text-red-700 bg-red-50"
            : "text-green-700 bg-green-50"
        }  rounded-lg `}>
        {props.text}
      </div>
    )
  );
}

export default Alert;
