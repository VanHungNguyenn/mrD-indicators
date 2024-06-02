'use client'
import React, { useEffect } from 'react';

const TradingViewWidget = () => {
    useEffect(() => {
        const loadTradingViewWidget = () => {
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
            script.async = true;
            script.innerHTML = JSON.stringify({
                "symbols": [
                    {
                        "proName": "FOREXCOM:SPXUSD",
                        "title": "S&P 500 Index"
                    },
                    {
                        "proName": "FOREXCOM:NSXUSD",
                        "title": "US 100 Cash CFD"
                    },
                    {
                        "proName": "FX_IDC:EURUSD",
                        "title": "EUR to USD"
                    },
                    {
                        "proName": "BITSTAMP:BTCUSD",
                        "title": "Bitcoin"
                    },
                    {
                        "proName": "BITSTAMP:ETHUSD",
                        "title": "Ethereum"
                    }
                ],
                "showSymbolLogo": true,
                "isTransparent": false,
                "displayMode": "adaptive",
                "colorTheme": "dark",
                "locale": "en"
            });

            const widget = document.querySelector('.tradingview-widget-container__widget');
            if (widget) {
                widget.appendChild(script);
            }
        };

        // Delay execution until after component has mounted
        const timeoutId = setTimeout(loadTradingViewWidget, 0);

        return () => {
            clearTimeout(timeoutId); // Clean up timeout on unmount
        };
    }, []);

    return (
        <div className="tradingview-widget-container">
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
};

export default TradingViewWidget;