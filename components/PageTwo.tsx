type PageTwo = {
  index: number;
};

const PageTwo = ({ index }: PageTwo) => {
  return (
    <div
      // style={{ transform: `translate3d(0, ${translate3d}%, 0)` }}
      className={
        index === 1
          ? "page-two move-in flex  flex-col items-center justify-center bg-red-300"
          : "page-two flex  flex-col items-center justify-center bg-red-300"
      }
    >
      <h1>hello</h1>
      <h2>Page # 2</h2>
    </div>
  );
};

export default PageTwo;
