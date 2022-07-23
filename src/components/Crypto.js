import React, { useEffect, useState } from "react";

export default function Crypto() {
  const [cryptoData, setCryptoData] = useState({
    bitcoin: "",
    ethereum: "",
    dogecoin: "",
  });
  const bitcoinUrl = `https://api.coingecko.com/api/v3/coins/bitcoin`;
  const ethereumUrl = `https://api.coingecko.com/api/v3/coins/ethereum`;
  const dogeCoinUrl = `https://api.coingecko.com/api/v3/coins/dogecoin`;

  const getBitcoinData = async () => {
    try {
      const response = await fetch(bitcoinUrl);
      const data = await response.json();
      setCryptoData((prev) => ({
        ...prev,
        bitcoin: data,
      }));
    } catch (error) {
      console.log("Fetch error");
    }
  };

  const getEthereumData = async () => {
    const response = await fetch(ethereumUrl);
    const data = await response.json();
    setCryptoData((prev) => ({
      ...prev,
      ethereum: data,
    }));
  };

  const getDogeCoinData = async () => {
    const response = await fetch(dogeCoinUrl);
    const data = await response.json();
    setCryptoData((prev) => ({
      ...prev,
      dogecoin: data,
    }));
  };

  useEffect(() => {
    getBitcoinData();
    getEthereumData();
    getDogeCoinData();
  }, []);
  console.log(cryptoData);

  return (
    <div className="crypto-container">
      <h3>Cryptocurrency Prices</h3>
      <div className="crypto-price-container">
        <p className="crypto-text">
          <span className="crypto-name">{cryptoData.bitcoin.name}</span> :
          {cryptoData.bitcoin.market_data.current_price.inr} INR
        </p>
        <p className="crypto-text">
          <span className="crypto-name">{cryptoData.ethereum.name}</span> :
          {cryptoData.ethereum.market_data.current_price.inr} INR
        </p>
        <p className="crypto-text">
          <span className="crypto-name">{cryptoData.dogecoin.name}</span> :
          {cryptoData.dogecoin.market_data.current_price.inr} INR
        </p>
      </div>
    </div>
  );
}
