import style from "./Error.module.css";

function Error() {
  return (
    <div className={style.container}>
      <h1>Error 404. Name not found.</h1>
    </div>
  );
}

export default Error;
