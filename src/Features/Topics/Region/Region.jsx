import React from "react";
import Loader from "../../../Components/Loader";
import Pagination from "../../../Components/Pagination/Pagination";
import usePagi from "../../../Hooks/usePagi";
import FinanceList from "../Finance/FinanceList";
import { useGetRegionQuery } from "../topicsSlice";

function Region() {
  const { data, isFetching } = useGetRegionQuery();
  const { currentSearchData, currentPage, setCurrentPage } = usePagi(
    data && data
  );

  if (isFetching) return <Loader />;
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto gap-3">
        {currentSearchData &&
          currentSearchData?.map((topic) => {
            return <FinanceList topic={topic} key={topic?.internalID} />;
          })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={data && data?.length}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Region;
