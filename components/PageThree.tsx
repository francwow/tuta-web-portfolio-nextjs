type PageThree = {
  index: number;
};

const PageThree = ({ index }: PageThree) => {
  return (
    <div
      className={
        index === 2
          ? "page-three move-in flex  flex-col items-center justify-center bg-lime-300"
          : "page-three flex flex-col items-center justify-center bg-lime-300"
      }
    >
      <h1>hello</h1>
      <h2>Page # 3</h2>
    </div>
  );
};

export default PageThree;
