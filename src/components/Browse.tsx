
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import Header from "./Header";
import PrimaryComponent from "./PrimaryComponent";
import SecondaryComponent from "./SecondaryComponent";

const Browse = () => {
  useNowPlayingMovie();
  return (
    <div>
      <Header />
      <PrimaryComponent />
      <SecondaryComponent/>
    </div>
  );
};

export default Browse;
