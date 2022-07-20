import React, { useEffect, useState } from "react";

export default function Quotes() {
  const [quote, setQuote] = useState("");
  const quoteUrl = "https://quotes15.p.rapidapi.com/quotes/random/";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "614e6b7b53msh82f60b9f55f9633p1e1378jsn052b2a4e2caf",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  };

  const getQuote = async () => {
    const response = await fetch(quoteUrl, options);
    const data = await response.json();
    setQuote(data.content);
  };

  useEffect(() => {
    getQuote();
  }, []);
  return (
    <>
      <p className="quote">"{quote}"</p>
    </>
  );
}
