import React from 'react';
import Skeleton from 'react-loading-skeleton';

export const BulkLoading = () => {
  // return <div className="d-flex justify-content-center">Loading...</div>;
  return (
    <>
      {/* <div className="d-flex justify-content-center">
        <>Loading...</>
      </div> */}
      <div className="col-md-3">
        <>
          <Skeleton height={350} />
        </>
      </div>
      <div className="col-md-3">
        <>
          <Skeleton height={350} />
        </>
      </div>
      <div className="col-md-3">
        <>
          <Skeleton height={350} />
        </>
      </div>
      <div className="col-md-3">
        <>
          <Skeleton height={350} />
        </>
      </div>
    </>
  );
};

export const SingleLoading = () => {
  return (
    <>
      <div className="col-md-6">
        <>
          <Skeleton height={400} />
        </>
      </div>
      <div className="col-md-6" style={{ lineHeight: 2 }}>
        <>
          <Skeleton height={50} width={300} />
          <Skeleton height={80} />
          <Skeleton height={40} width={300} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </>
      </div>
    </>
  );
};
