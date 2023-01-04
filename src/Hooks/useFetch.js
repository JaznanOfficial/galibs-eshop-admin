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
            setError(err);
            if (error) {
                toast.error(error);
            }
        }
    };
    const postData = async (url, data) => {
        try {
            const res = await axios.post(url, data, {
                headers: { "Content-Type": "application/json" },
            });
            if (res.data.status === "Successful") {
                setSuccess(true);

                toast.success("Your data successfully added");
            }
        } catch (err) {
            setError(err);
            if (error) {
                toast.error(error);
            }
        }
    };
    const patchData = async (url, data) => {
        axios
            .patch(url, data)
            .then((res) => {
                console.log(res.data);
                if (res.data.status === "Successful") {
                    setSuccess(true);

                    toast.success("Hurray! your data updated successfully ");
                }
            })
            .catch((err) => {
                console.log(err);
                setError(err);
                if (error) {
                    toast.error(error);
                }
            });
    };
    const deleteData = async (url) => {
        try {
            const res = await axios.delete(url);
            console.log(res);
            if (res.data.status === "Successful") {
                setSuccess(true);

                toast.success("Hurray! your data deleted successfully ");
            }
        } catch (err) {
            setError(err);
            if (error) {
                toast.error(error);
            }
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
