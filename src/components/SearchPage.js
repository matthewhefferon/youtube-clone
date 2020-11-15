import React from "react";
import "../styles/SearchPage.css"
import TuneSharpIcon from '@material-ui/icons/TuneSharp';
import ChannelRow from "./ChannelRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneSharpIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow 
      image="https://yt3.ggpht.com/a/AATXAJxJPBN1o3Mj7TEEmBx0eyNPq0_uj25m00B02Rl4=s176-c-k-c0x00ffffff-no-rj-mo"
      channel="Viztip"
      verified
      subs="1k"
      noOfVideos={55}
      description="Quick video tutorials on all things Tableau."
      />
      <hr />
    </div>
  );
}

export default SearchPage;
