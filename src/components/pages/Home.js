import React, { useState, useEffect } from "react";

const Home = () => {
  const quotes = [
    {
      quote:
        "Decide whether or not the goal is worth the risks involved. If it is, stop worrying.",
      owner: "Amelia Earhart"
    },
    {
      quote:
        "If you want your life to be a magnificent story, then begin by realising that you are the author.",
      owner: "Mark Houlahan"
    },
    {
      quote:
        "Give yourself permission to slow down. You can speed up by slowing down.",
      owner: "Gabby Bernstein"
    },
    {
      quote:
        "The first step to accepting yourself is to stop comparing yourself to others.",
      owner: "Joe Duncan"
    },
    {
      quote: "Why fit in when you were born to stand out?",
      owner: "Dr. Seuss"
    }
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteChanged, setQuoteChanged] = useState(false);
  let index = 0;
  let change = false;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < quotes.length - 1) {
        index++;
        change = !change;
        setQuoteChanged(change);
      } else {
        index = 0;
      }

      setQuoteIndex(index);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page home">
      <div
        className="home__quote"
        style={{
          animation: quoteChanged
            ? "quote-left 0.5s ease-in-out forwards"
            : "quote-right 0.5s ease-in-out forwards"
        }}
      >
        <p>&ldquo;{quotes[quoteIndex].quote}&rdquo;</p>
        <p>{quotes[quoteIndex].owner}</p>
      </div>
      <div className="home__contact">
        <a href="!#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="!#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="!#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="!#">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
