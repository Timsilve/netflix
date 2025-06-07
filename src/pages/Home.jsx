import React from "react";
import Main from "../Components/Main";
import request from "../request";
import Row from "../Components/Row";

function Home() {
  return (
    <>
      <Main />
      <Row title="Upcoming" fetchUrl={request.requestUpcoming} />
      <Row title="Popular" fetchUrl={request.requestPopular} />
      <Row title="Trending" fetchUrl={request.requestTrending} />
      <Row title="TopRated" fetchUrl={request.requestTopRated} />
      <Row title="Nowplaying" fetchUrl={request.requestNowPlaying} />
    </>
  );
}

export default Home;
