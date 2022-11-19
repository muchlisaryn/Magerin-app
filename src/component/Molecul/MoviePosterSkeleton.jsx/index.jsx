import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function MoviePosterSkeleton() {
  return (
    <div>
      <Skeleton height={250} />
    </div>
  );
}
