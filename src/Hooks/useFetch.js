import axios from "axios";
import React, { useState } from "react";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [error, setError] = useState();

    const getData = async (url) => {
        console.log(url);
        try {
            const res = await axios.get(url);
            setData(res.data);
            setDataLoading(false);
        } catch (error) {
            // Handle errors
            console.log(error);
        }
    };
    const postData = async (url, data) => {
        axios
            .post(url, data, { headers: { "Content-Type": "application/json" } })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const patchData = async (url, data) => {
        axios
            .patch(url, data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const deleteData = async (url) => {
        try {
            const res = axios.delete(url, { headers: { "Content-Type": "application/json" } });
            console.log(res);
        } catch (err) {
            setError(err);
        }
    };
    return {
        data,
        setData,
        getData,
        postData,
        patchData,
        deleteData,
        loading: dataLoading,
    };
};

export default useFetch;
