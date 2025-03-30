import {
  Outlet,
  Link,
  useParams,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";

export default function Taps() {
  const { id } = useParams();
  const location = useLocation();

  if (location.pathname === `/product/${id}`) {
    return <Navigate to={`/product/${id}/accessories`} replace />;
  }

  return (
    <>
      <div className="flex items-center justify-around flex-wrap text-2xl mt-[50px]">
        <Link to={`/product/${id}/accessories`}>
          <h3
            className={` focus:outline-none pb-0 focus:pb-0.5
                        ${
                          location.pathname === `/product/${id}/accessories`
                            ? "text-3xl border-b-2 border-yellow-500"
                            : "text-2xl"
                        }`}
          >
            Accessories
          </h3>
        </Link>
        <Link to={`/product/${id}/description`}>
          <h3
            className={` focus:outline-none pb-0 focus:pb-0.5
                        ${
                          location.pathname === `/product/${id}/description`
                            ? "text-3xl border-b-2 border-yellow-500"
                            : "text-2xl"
                        }`}
          >
            Description
          </h3>
        </Link>
        <Link to={`/product/${id}/specification`}>
          <h3
            className={` focus:outline-none pb-0 focus:pb-0.5
                        ${
                          location.pathname === `/product/${id}/specification`
                            ? "text-3xl border-b-2 border-yellow-500"
                            : "text-2xl"
                        }`}
          >
            Specification
          </h3>
        </Link>
        <Link to={`/product/${id}/reviews`}>
          <h3
            className={` focus:outline-none pb-0 focus:pb-0.5
                        ${
                          location.pathname === `/product/${id}/reviews`
                            ? "text-3xl border-b-2 border-yellow-500"
                            : "text-2xl"
                        }`}
          >
            Reviews
          </h3>
        </Link>
        <Link to={`/product/${id}/MoreProducts`}>
          <h3
            className={`focus:outline-none pb-0 focus:pb-0.5
                        ${
                          location.pathname === `/product/${id}/MoreProducts`
                            ? "text-3xl border-b-2 border-yellow-500"
                            : "text-2xl"
                        }`}
          >
            More Products
          </h3>
        </Link>
      </div>
      <hr className="mb-5" />
      <div className="border rounded-lg">
        <Outlet />
      </div>
    </>
  );
}
