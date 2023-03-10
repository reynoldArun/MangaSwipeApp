import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import axios from "../../../axios/MangaFinder";
import SkeletonGrid from "../../Skeleton/SkeletonGrid";

const Popular = () => {
  const FetchPopular = async () => {
    const result = await axios.get("/completed");
    return result.data.data;
  };

  const { data: Popular, isLoading } = useQuery("popular", FetchPopular);

  if(isLoading) {
    return <SkeletonGrid />
  }

  return (
    <section className="w-[90%] lg:w-[85%] xl:w-[69%] mx-auto">
      <div className="flex justify-between my-4">
        <h1 className="mangaHead">Popular This Week &rarr;</h1>
        <Link to="/popular">
          <span className="underline decoration-[#EFC416] decoration-2 underline-offset-8 cursor-pointer">
            View All
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Popular &&
          Popular.map((manga) => {
            const { mangaImageUrl, mangaTitle, _id, likes } = manga;
            const newLikes = likes
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return (
              <div className="text-center mx-auto w-40" key={_id}>
                <Link to={`/manga/${_id}/chapter`}>
                  <img
                    src={mangaImageUrl}
                    alt={mangaTitle}
                    className="w-44 h-64 rounded-md hover:scale-x-105 hover:scale-y-105"
                  />
                        <div
                          className="text-black dark:text-white space-y-1"
                        >
                          <h3 className="text-sm line-clamp-2 my-1">{mangaTitle}</h3>
                          <h2 className="text-sm font-bold ">
                          <i className="fa-solid fa-thumbs-up mr-1"></i> {newLikes}
                          </h2>
                        </div>
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Popular;