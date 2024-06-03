'use client'
import Link from "next/link"
import { useState } from "react"

export default function Crypto1() {
    const [flatTabs, setFlatTabs] = useState(1)
    const handleFlatTabs = (index) => {
        setFlatTabs(index)
    }

    // Array of tab names
    const tabNames = [
        "CAC 40",
        "DAX 30",
        "Dow Jones Industrial Average",
        "Hang Seng 50",
        "Italy 40",
        "Japan225",
        "S&P 500"
    ];

    // Array of objects containing additional values for each flatTabs
    const additionalValues = [
        { value: "The CAC (Cotation Assistée en Continu) 40 is the benchmark French stock market index, representing the 40 most significant companies among the 100 highest market capitalisations listed on the Euronext Paris exchange. It is one of the biggest European stock markets, and hence one of the most important national indices of the pan-European stock exchange group, Euronext." },
        { value: "The Deutscher Aktienindex, or DAX, tracks the value of the 30 biggest companies listed on the Frankfurt Stock Exchange (FSE) and this is represented in real time by the DAX price. \n As the listed companies that make up the DAX 30 index represent around 75% of the total market cap of the FSE, the DAX is often viewed as a gauge for the German economy. This is one reason why DAX trading is popular with many of our clients. You can track its price in real time on our platform using our DAX live chart." },
        { value: "The Dow Jones Industrial Average, often referred to as ‘the Dow’, is a price-weighted index that tracks the value of 30 publicly-owned companies listed on the NASDAQ and the New York Stock Exchange (NYSE). It is represented in real-time by the Dow price. \n The Dow Jones index has become something of a microcosm for global financial markets, as it has grown to become one of the oldest and most-watched indices in the world. It is often seen by investors and media commentators as an overall summary of the performance of the US stock market." },
        { value: "The Hang Seng 50 is an index of the 50 largest and most actively traded companies listed on the Hong Kong Stock Exchange. Founded as a “Dow Jones Index for Hong Kong”, the Hang Seng 50 serves as a benchmark index and the major indicator of Hong Kong’s market performance, as well as a proxy for a wider Asian market. \n The HSI embraces the largest and most liquid stocks in the local market, largely dominated by finance companies. The components of the index are divided into four sub-indices: Finance; Commerce and Industry; Properties; and Utilities." },
        { value: "The Italy 40, or FTSE MIB, is an index of the 40 largest and most actively traded companies listed on the Borsa Italiana. Launched in 1997, the Italy 40 serves as a national and international benchmark index, and the major indicator of the Italian stock market performance. \n Before June 2009 the index was managed by Standard & Poor’s and was called the S&P/MIB. Today the Italy 40 is published and calculated by the London Stock Exchange Group, which is Borsa Italiana’s parent company. \n Capturing approximately 80% of the domestic market capitalisation, the Italy 40 (FTSE MIB) includes the highly liquid companies in Italy. Some of the most well-known index constituents include Ferrari, Fiat Chrysler Automobiles, Pirelli, Intesa Sanpaolo, Salvatore Ferragamo and Moncler." },
        { value: "Commonly referred to as the Nikkei 225 Stock Average, the Japan 225 embraces the largest and most liquid stocks traded on the Tokyo Stock Exchange (TSE). Established in 1950, the Nikkei 225 serves as a national benchmark index and the major indicator of the Japanese stock market performance. \n Also known as the “Nikkei Dow Jones Stock Average”, the Japan 225 is the most often quoted index for Japanese stocks. Reviewed once a year at the beginning of October, the Nikkei is comprised of 225 domestic companies, representing different industry sectors, including: technology; consumer goods; financials; capital goods; materials; transportation; utilities and others." },
        { value: "The S&P 500, also known as Standard & Poor’s 500, is a stock market index that tracks the stock price performance of the top 500 companies in the US. \n As the assets of the index comprise an approximate total of $2.2 trillion, the S&P 500 index – along with the Dow Jones Industrial Average (DJIA) – is often used as a gauge for the performance and strength of the US economy." }
    ];

    return (
        <>
            <section className="crypto" data-aos="fade-up" data-aos-duration={1000}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="crypto__main">
                                <div className="flat-tabs">
                                    <ul className="menu-tab">
                                        {/* Map through tab names and render list items */}
                                        {tabNames.map((tab, index) => (
                                            <li key={index} className={flatTabs === index + 1 ? "active" : ""} onClick={() => handleFlatTabs(index + 1)}>
                                                <h6 className="fs-16">{tab}</h6>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="content-tab">
                                        {/* Map through tab names and render content based on index */}
                                        {tabNames.map((tab, index) => (
                                            <div key={index} className="content-inner" style={{ display: `${flatTabs === index + 1 ? "flex" : "none"}`, flexDirection: 'column', height: '100%' }}>
                                                <div className="crypto-box">
                                                    {/* Render additional value based on index */}
                                                    <p>{additionalValues[index].value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
