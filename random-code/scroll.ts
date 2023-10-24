// let scrollY: any;

// if (typeof window !== "undefined") {
//   scrollY = window.scrollY;
// }

// function blockScroll(index: number, top: number) {
//   window.scrollTo({
//     top: top,
//     behavior: "smooth",
//   });
//   setIndex(index);

//   document.documentElement.style.overflowY = "hidden";
//   setTimeout(
//     () => (document.documentElement.style.overflowY = "scroll"),
//     1500
//   );
// }

// useEffect(() => {
//   prevScrollY.current = window.scrollY;

//   const updateScrollDirection = () => {
//     const scrollY = window.scrollY;

//     if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
//       const newScrollDirection =
//         scrollY > prevScrollY.current ? "down" : "up";

//       setScrollDirection(newScrollDirection);

//       prevScrollY.current = scrollY > 0 ? scrollY : 0;
//     }

//     blocking.current = false;
//   };

//   const onScroll = () => {
//     if (!blocking.current) {
//       blocking.current = true;
//       window.requestAnimationFrame(updateScrollDirection);
//     }
//     setTranslate3d(100 - window.scrollY / 10);
//     setTranslateText(0 - window.scrollY / 2);
//   };

//   window.addEventListener("scroll", onScroll);
//   console.log(scrollDirection);

//   return () => window.removeEventListener("scroll", onScroll);
// }, [scrollDirection]);

// useEffect(() => {
//   if (scrollDirection === "down" && index === 0 && scrollY < 200) {
//     blockScroll(1, 250);
//   } else if (scrollDirection === "up" && index === 1 && scrollY <= 200) {
//     blockScroll(0, 0);
//   } else if (scrollDirection === "down" && index === 1 && scrollY >= 300) {
//     blockScroll(2, 350);
//   } else if (scrollDirection === "up" && index === 2 && scrollY > 300) {
//     blockScroll(1, 250);
//   }

//   if (scrollY) {
//     console.log(scrollDirection);
//     console.log(index);
//   }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [scrollY]);

// useEffect(() => {
//   if (index === 0) {
//     blockScroll(0, 0);
//   } else if (index === 1) {
//     blockScroll(1, 250);
//   } else if (index === 2) {
//     blockScroll(2, 350);
//   }
// }, [index]);
