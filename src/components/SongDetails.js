import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmarUi from "./ShimmerUi";
import Footer from "./Footer";
import SideBar from "./SideBar";
import SongContainer from "./SongContainer";


const SongDetails = () => {
  let params = useParams();
  const songId = params.id;
  console.log(songId);

  let [musicList, setMusicList] = useState([]);

  async function musicListApi() {
    let temp = await fetch(
      `https://academics.newtonschool.co/api/v1/music/song/${songId}`,
      {
        headers: {
          projectId: "f104bi07c490",
        },
      }
    );
    let data = await temp.json();
    // setMusicList(data.data);

    //for settting the previous data
    setMusicList(data);
    console.log(data.data);
    console.log(musicList);
  }

  useEffect(() => {
    musicListApi();
  }, []);

  if (musicList.length === 0) {
    return <ShimmarUi />; // or any other JSX you want to display while loading
  }

  return (
    <>
    
      <div className="flex  ">
        <div className="hidden md:block">
        <SideBar />
        </div>
      

      <div className="flex  w-[700px] items-center pt-12 pl-5   ">
        <div>
          <img
            className="w-72 rounded-lg  "
            src={musicList?.data?.thumbnail}
            alt="image"
          />
        </div>

        <div className="">
          <h1 className=" text-gray-600 font-bold text-4xl px-12 py-2 ">
            {musicList?.data?.title}
          </h1>
          <h1 className="font-bold px-12 py-2">
            {" "}
            Released On:{musicList?.data?.dateOfRelease}
          </h1>
          <h1 className="font-bold px-12 py-2">Mood:{musicList?.data?.mood}</h1>
        </div>
      </div>
      </div>

      <Footer data={musicList?.data?.audio_url} />
    </>
  );
};

export default SongDetails;

// just checking git commit
