import { useState, useEffect, useRef } from "react";

function Try() {
  const [scrollPos, setScrollPos] = useState(0);
  const imageRowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = imageRowRef.current.scrollLeft;
      setScrollPos(scrollPosition);
    };

    const imageRowElement = imageRowRef.current;
    imageRowElement.addEventListener("scroll", handleScroll);

    return () => {
      imageRowElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={imageRowRef}
      style={{
        display: "flex",
        alignItems: "center",
        overflowX: "scroll",
        scrollBehavior: "smooth",
        WebkitOverflowScrolling: "touch",
        height: 200,
        padding: "0 20px",
      }}
    >
      {[...Array(3)].map((_, index) => (
        <img
          key={index}
          src={`https://picsum.photos/id/${index + 1}/200`}
          alt={`Image ${index + 1}`}
          style={{
            width: 200,
            height: "auto",
            marginRight: 20,
            transform: `scale(${1 + (index === 1 ? scrollPos / 500 : 0)})`,
          }}
        />
      ))}
    </div>
  );
}

export default Try;
