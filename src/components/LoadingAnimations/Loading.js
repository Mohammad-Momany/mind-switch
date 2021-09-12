import "./Loading.scss";

const Loading = () => {
  return (
    <div className="book__container--loading">
      {[...Array(3)].map((el,i) => <div key={i}></div> )}
    </div>
  );
};

export default Loading;
