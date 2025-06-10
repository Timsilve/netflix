import React from "react";
import Main from "../Components/Main";
import request from "../request";
import Row from "../Components/Row";

function Home() {
  return (
    <>
      <Main />
      <Row rowID="1" title="Trending" fetchUrl={request.requestTrending} />
      <Row rowID="2" title="Upcoming" fetchUrl={request.requestUpcoming} />
      <Row rowID="3" title="Popular" fetchUrl={request.requestPopular} />
      <Row rowID="4" title="TopRated" fetchUrl={request.requestTopRated} />
      <Row rowID="5" title="Nowplaying" fetchUrl={request.requestNowPlaying} />
    </>
  );
}

export default Home;
