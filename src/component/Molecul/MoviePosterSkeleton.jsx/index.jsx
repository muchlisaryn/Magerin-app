import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function MoviePosterSkeleton() {
  return (
    <div>
      <div className="m-2">
        <Skeleton width={200} height={300} className="rounded-3" />
      </div>
    </div>
  );
}
