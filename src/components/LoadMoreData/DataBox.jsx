function DataBox(props) {
  return (
    <div className="h-50 w-50 border border-blue-400 m-2 relative flex flex-col p-2 ">
      <h3>${props.price}</h3>
      <img
        src={props.thumbnail}
        alt={props.title}
        className=" h-[75%] w-[75%] mx-auto"
      />
      <h3 className="z-1 text-center ">{props.title}</h3>
    </div>
  );
}
export default DataBox;
