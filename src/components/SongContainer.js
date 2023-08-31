import React, { useEffect, useState } from "react";
import SongCard from "./SongCard";
import ShimmarUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";

//for filteration logic
let filterData = (searchBar, musicList) => {
  return musicList.filter((data) => {
    let loewrCaseSearchText = searchBar.toLowerCase();
    let newSongListLowerCase = data?.title.toLowerCase();

    return newSongListLowerCase.includes(loewrCaseSearchText);
  });
  // let filter=newMovieList.filter((data)=>data.original_title.includes(searchText));
  // return filter;
};

let SongContainer = () => {
  let [musicList, setMusicList] = useState([]);
  let [filteredMusicList, setFilteredMusicList] = useState([]);
  let [page, setPage] = useState(1); //for infinite scroll

  //subscribing to store
  //search comming from store as you write the key and text comming from initial value at slice
  let searchBar = useSelector((store) => store.search.text);
  // console.log(searchBar);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let handleScroll = () => {
    // console.log("heghti",document.documentElement.scrollHeight);
    // console.log("pixel",document.documentElement.scrollTop);
    // console.log("window height",window.innerHeight);
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((page) => page + 1);
    }
  };
  // console.log(page);

  async function musicListApi() {
    let temp = await fetch(
      `https://academics.newtonschool.co/api/v1/music/song?page=${page}&limit=20`,
      {
        headers: {
          projectId: "f104bi07c490",
        },
      }
    );
    let data = await temp.json();
    // setMusicList(data.data);

    //for settting the previous data
    setMusicList((prev) => [...prev, ...data.data]);             //for api data storing state variable
    setFilteredMusicList((prev) => [...prev, ...data.data]);    //for filtered data
    // console.log(data.data);
    // console.log(musicList);
  }

  //whenever my search bar or musiclist updates it will call the filterData Function
  //before in other project i use this function inside buttonclick
  useEffect(() => {
    let data = filterData(searchBar, musicList);
    setFilteredMusicList(data);
  }, [searchBar, musicList]);

  useEffect(() => {
    musicListApi();
    // console.log(musicList);
  }, [page]);

  if (musicList.length === 0) {
    return <ShimmarUi />; // or any other JSX you want to display while loading
  }

  return (
    <>
    
      <div className="flex">
        <div className="w-1/2">
        <SideBar/>
        </div>
      
        {filteredMusicList.length === 0 ? (
          // <h1 className="pl-20">Search Not Found!!!</h1>
          <img className="w-[500px] h-[500px]" src="https://thumbs.dreamstime.com/b/no-found-symbol-unsuccessful-search-suitable-results-oops-page-failure-concept-flat-outline-vector-illustration-loupe-122872462.jpg"/>
        ) : (
          <div className="flex justify-evenly flex-wrap ">
            {filteredMusicList &&
              filteredMusicList.map((data, index) => {
                return (
                  <Link key={index} to={`/songs/${data._id}`}><SongCard key={index} list={data} /></Link>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default SongContainer;

// async function musicAlbum(){
//     let temp= await fetch('https://academics.newtonschool.co/api/v1/music/album/id:64cf907d47ae38c3e33a18a2',{
//         headers: {
//             'projectId':"f104bi07c490"}
//         })

//     let data= await temp.json();
//     console.log(data);
// }
