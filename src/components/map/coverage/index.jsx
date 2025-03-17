export const CoverageLayers = ({ coverage }) => {
  console.log({ coverage });
  if (!coverage?.length < 0) return;
  return (
    <>
      {coverage?.map((item) => (
        <CoverageLayer key={item?.properties?.start_time} layer={item} />
      ))}
    </>
  );
};

export const CoverageLayer = ({ layer }) => {
  console.log({ layer });
  return <div></div>;
};
