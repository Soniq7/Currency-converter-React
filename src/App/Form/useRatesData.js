import { useState, useEffect } from "react";
import axios from 'axios';

const exchangeRates = "http://api.exchangeratesapi.io/v1/latest?access_key=9c99ed80c76dd9ecb3017aea6aafb48e";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await axios.get(exchangeRates);
                const { rates, date } = await response.data;

                setRatesData({
                    status: "success",
                    rates,
                    date,
                });
            }
            catch {
                setRatesData({
                    status: "error",
                });
            };
        };

        setTimeout(getRates, 2000);
    }, []);

    return ratesData;
};