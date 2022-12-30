import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const getData = async (url) => {
        console.log(url);
        try {
            const res = await axios.get(url);
            setData(res.data);
            setDataLoading(false);
        } catch (err) {
            // Handle errors
            console.log(error);
            setError(err)
        }
    };
    const postData = async (url, data) => {
        try {
            const res = await axios.post(url,data, { headers: { "Content-Type": "application/json" } });
            console.log(res);
        } catch (err) {
            setError(err);
        }
    
    };
    const patchData = async (url, data) => {
        axios
            .patch(url, data)
            .then((res) => {
                console.log(res.data);
                if (res.data.status === "Successful") {
                    setSuccess(true)
                    if (success) {
                        toast.success('Hurray! your data updated successfully ', );
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                setError(err)
                if (error) {
                    toast.error('Hurray! your data updated successfully ', );
                }
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
        success,
        error,
        loading: dataLoading,
    };
};

export default useFetch;
