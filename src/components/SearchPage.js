import React from "react";
import "../styles/SearchPage.css";
import TuneSharpIcon from "@material-ui/icons/TuneSharp";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

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
      <VideoRow
        views="37"
        subs="600"
        description="This quick Tableau tutorial will show you how to add a progress shadow to your bar charts. Please like and subscribe if you find these videos helpful!"
        timestamp="3 days ago"
        channel="viztip"
        title="Tableau Tutorial - Progress Shadow"
        image="https://i.ytimg.com/an_webp/VGkWRdiUYps/mqdefault_6s.webp?du=3000&sqp=CImvwv0F&rs=AOn4CLAXSW69R05Iz5zH99bUJpt_f6BFdQ"
      />
      <VideoRow
        views="32k"
        subs="600"
        description="Quick Tableau tutorial on Top N & Bottom N. Please like and subscribe if you find these videos helpful!"
        timestamp="2 years ago"
        channel="viztip"
        title="Tableau Tutorial - Top N & Bottom N"
        image="https://i.ytimg.com/an_webp/C72JHMjf-h0/mqdefault_6s.webp?du=3000&sqp=CI25wv0F&rs=AOn4CLAX8dwvMoWgmhrxJMFNk5V1Y72XQw"
      />
      <VideoRow
        views="24k"
        subs="600"
        description="Quick tableau tutorial on removing the 'Abc' column from a text table. Please like and subscribe if you find these videos helpful!"
        timestamp="2 years ago"
        channel="viztip"
        title="Tableau Tutorial - Removing 'Abc' Column"
        image="https://i.ytimg.com/vi/6FTZ6TnYaF0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCS_MneEwzm2-UWQTYqXFzkpFrd3A"
      />
      <VideoRow
        views="37"
        subs="600"
        description="This quick Tableau tutorial will show you how to add a progress shadow to your bar charts. Please like and subscribe if you find these videos helpful!"
        timestamp="3 days ago"
        channel="viztip"
        title="Tableau Tutorial - Progress Shadow"
        image="https://i.ytimg.com/an_webp/VGkWRdiUYps/mqdefault_6s.webp?du=3000&sqp=CImvwv0F&rs=AOn4CLAXSW69R05Iz5zH99bUJpt_f6BFdQ"
      />
      <VideoRow
        views="32k"
        subs="600"
        description="Quick Tableau tutorial on Top N & Bottom N. Please like and subscribe if you find these videos helpful!"
        timestamp="2 years ago"
        channel="viztip"
        title="Tableau Tutorial - Top N & Bottom N"
        image="https://i.ytimg.com/an_webp/C72JHMjf-h0/mqdefault_6s.webp?du=3000&sqp=CI25wv0F&rs=AOn4CLAX8dwvMoWgmhrxJMFNk5V1Y72XQw"
      />
      <VideoRow
        views="24k"
        subs="600"
        description="Quick tableau tutorial on removing the 'Abc' column from a text table. Please like and subscribe if you find these videos helpful!"
        timestamp="2 years ago"
        channel="viztip"
        title="Tableau Tutorial - Removing 'Abc' Column"
        image="https://i.ytimg.com/vi/6FTZ6TnYaF0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCS_MneEwzm2-UWQTYqXFzkpFrd3A"
      />
    </div>
  );
}

export default SearchPage;
