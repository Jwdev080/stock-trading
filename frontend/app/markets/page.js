'use client';
import Layout from "@/components/layout/Layout";
import { useState } from "react";

export default function Markets() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const tabNames = [
        "Asian Country",
        "Nasdaq Index",
        "Dow Jones Industrial Average"
    ];

    const marketData = {
        "Asian Country": [
            { id: 1, country: 'china', symbol: 'US100', last: '18601.0', low: '18601.0', high: '18601.0', chg: '18601.0', chg_p: '+0.0801%', time: "17:03:04" },
            { id: 2, country: 'china', symbol: 'US100', last: '18601.0', low: '18601.0', high: '18601.0', chg: '18601.0', chg_p: '+0.0801%', time: "17:03:04" },
            { id: 3, country: 'china', symbol: 'US100', last: '18601.0', low: '18601.0', high: '18601.0', chg: '18601.0', chg_p: '+0.0801%', time: "17:03:04" }
        ],
        "Nasdaq Index": [
            { id: 4, country: 'us', symbol: 'US100', last: '18601.0', low: '18601.0', high: '18601.0', chg: '18601.0', chg_p: '+0.0801%', time: "17:03:04" }
        ],
        "Dow Jones Industrial Average": [
            { id: 5, country: 'us', symbol: 'US100', last: '18601.0', low: '18601.0', high: '18601.0', chg: '18601.0', chg_p: '+0.0801%', time: "17:03:04" }
        ]
    };

    const additionalValues = [
        { value: "Additional value for Asian Country" },
        { value: "Additional value for Nasdaq Index" },
        { value: "Additional value for Dow Jones Industrial Average" }
    ];

    return (
        <Layout headerStyle={1} footerStyle={2}>
            <div className="banner">
                {/* Banner section content */}
            </div>
            <section className="crypto" data-aos="fade-up" data-aos-duration={1000}>
                <div className="container">
                    <div className="crypto__main">
                        <div className="flat-tabs">
                            <ul className="menu-tab">
                                {tabNames.map((tab, index) => (
                                    <li key={index} className={activeTab === index ? "active" : ""} onClick={() => handleTabClick(index)}>
                                        <h6 className="fs-16">{tab}</h6>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="coin-list">
                <div className="container">
                    <div className="content-tab">
                        {tabNames.map((tab, index) => (
                            <div key={index} className="content-inner" style={{ display: activeTab === index ? "flex" : "none", flexDirection: 'column', height: '100%' }}>
                                <div className="crypto-box">
                                    <div className="most-traded">
                                        <div className="trades-list">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Country</th>
                                                        <th>Symbol</th>
                                                        <th>Last</th>
                                                        <th>High</th>
                                                        <th>Low</th>
                                                        <th>Change</th>
                                                        <th>Change %</th>
                                                        <th>Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {marketData[tab].map((item) => (
                                                        <tr key={item.id}>
                                                            <td>
                                                                <img
                                                                    src={`/assets/images/flags/${item.country}.jpg`}
                                                                    alt={`${item.country} flag`}
                                                                    className="flag-icon"
                                                                />
                                                            </td>
                                                            <td>{item.symbol}</td>
                                                            <td>{item.last}</td>
                                                            <td>{item.high}</td>
                                                            <td>{item.low}</td>
                                                            <td>{item.chg}</td>
                                                            <td>{item.chg_p}</td>
                                                            <td>{item.time}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <p>{additionalValues[index].value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
