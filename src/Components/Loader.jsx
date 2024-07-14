import { RotatingLines } from "react-loader-spinner";
function Loader() {
  return (
    <div className="w-full text-center h-screen  flex justify-center items-center ">
      <RotatingLines width="100px" height="100px" strokeWidth="3" strokeColor="#fe5d42"/>
    </div>
  );
}

export default Loader;
