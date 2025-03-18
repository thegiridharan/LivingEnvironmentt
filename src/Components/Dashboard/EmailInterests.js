import { useEffect } from "react";
import { deleteData, getData } from "@/firebase/firestoreService";
import { useState } from "react";

const EmailInterests = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const fetchedData = await getData("Interests");
                setData(fetchedData);
            }
            catch (error) {
                console.error("Error fetching Email Interests:", error);
            } finally {
                setLoading(false);
            }
        }, 500);
        return () => clearInterval(interval);

    }, []);

    if (loading) {
        return <p>Loading...</p>
    }

    const deleteEntity = async (id) => {
        await deleteData("Interests", id);
    }

    return (
        <>
            <div >
                <div className="m-[10px] mb-0 p-[10px] font-bold border-[2px] border-gray-200 rounded-t-[10px]">
                    <p className="text-[18px]">Email Responses</p>
                </div>
                <div className="grid grid-flow-row m-[10px] p-[10px] border-[2px] border-gray-200">
                    {data.length > 0 ? data.map((datum) => (
                        <div key={datum.id} className="bg-gray-200 rounded-[10px] p-[10px] mb-[10px]">
                            <p>Name: {datum.name}</p>
                            <p>Email: {datum.email}</p>
                            <p>Contact: {datum.phno}</p>
                            <p>Service: {datum.service}</p>
                            <button onClick={() => deleteEntity(datum.id)} className="h-[45px] w-[80px] rounded-[10px] bg-red-700 font-semibold text-white text-center cursor-pointer mt-[10px]">Delete</button>
                        </div>
                    )) : <p className="text-red-700">No Interests Found.</p>}
                </div>
            </div>
        </>
    )
}

export default EmailInterests;