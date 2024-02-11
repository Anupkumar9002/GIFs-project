import  Tag  from "./components/Tag";
import Random from "./components/Random";
export default function App() {
  return (
<div className="w-full h-screen background flex flex-col items-center overflow-y-auto">
  <h1 className="bg-white rounded-lg w-11/12  text-3xl text-bold text-center mt-[40px] "> RANDOM GIFS</h1>
  <div className="w-full">
    <Random></Random>
    <Tag></Tag>
  </div>
</div>
  );
}

