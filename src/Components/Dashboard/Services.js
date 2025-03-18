import { addData, deleteData, updateData, getData } from "@/firebase/firestoreService";
import { serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Services() {
    const ServiceConstruction = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [data, setData] = useState([]);
        const [img, setImg] = useState(null);
        const [title, setTitle] = useState("");
        const [content, setContent] = useState("");
        const [loading, setLoading] = useState(false);
        const [deleteLoading, setDeleteLoading] = useState(false);


        useEffect(() => {
            const interval = setInterval(async () => {
                const fetchedData = await getData("ServiceConstruction");
                setData(fetchedData);
            }, 500)
            return () => clearInterval(interval);
        }, []);

        const postData = async () => {

            if (!img || !title || !content) {
                alert("All fields are required");
                return;
            }

            setLoading(true);
            try {
                await addData("ServiceConstruction", { img, title, content, createdAt: serverTimestamp() })

                //Update UI instantly
                const updatedData = await getData("ServiceConstruction");
                setData(updatedData);

                //Close popup & reset fields
                setIsOpen(false);
                setImg(null);
                setTitle("");
                setContent("");

            } catch (error) {
                console.log("Error is", error);
            } finally {
                setLoading(false);
            }
        };

        const deleteContent = async (id) => {
            await deleteData("ServiceConstruction", id);
        };

        const updateContent = (id) => {
            setForUpdate(true);
            setID(id);
        }
        const [forUpdate, setForUpdate] = useState(false);
        const [loadingUpdate, setLoadingUpdate] = useState(false);
        const [ID, setID] = useState("");
        const UpdateContentNew = async () => {
            await updateData("ServiceConstruction", ID, { img, title, content, createdAt: serverTimestamp() });
            setForUpdate(false);
            setLoadingUpdate(false);
        }


        return (
            <>
                <div>
                    <div className="grid grid-flow-row m-[20px] border-[2px] border-gray-200 p-[10px] rounded-t-[10px]">
                        <p className="font-bold pb-[25px]">Construction - Services</p>
                        <button onClick={() => setIsOpen(true)} className="bg-black text-white font-semibold h-[40px] w-[80px] rounded-[5px] cursor-pointer">New</button>
                    </div>
                    {isOpen &&
                        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-20 overflow-y-auto" onClick={() => setIsOpen(false)}>
                            <div className="bg-white p-[20px] rounded-[10px] shadow-2xl w-[500px] grid grid-flow-row" onClick={(e) => e.stopPropagation()}>
                                <p className="font-semibold flex justify-between mb-[10px]">New <span>Construction Service</span></p>
                                <p>Image URL</p>
                                <textarea placeholder="Image URL" type="url" onChange={(e) => setImg(e.target.value)} className="bg-gray-200 rouded-[5px] p-[4px] mt-[5px] mb-[10px] rounded-[5px]"></textarea>
                                <p>Title</p>
                                <textarea placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="bg-gray-200 rouded-[5px] p-[4px] mb-[10px] rounded-[5px] mt-[5px] "></textarea>
                                <p>Content</p>
                                <textarea placeholder="Content" type="text" onChange={(e) => setContent(e.target.value)} className="bg-gray-200 rouded-[5px] p-[4px] mb-[20px] rounded-[5px] mt-[5px] "></textarea>
                                <button onClick={postData} className="h-[45px] bg-black font-semibold text-white flex items-center justify-center rounded-[10px] cursor-pointer">{
                                    loading ? "Uploading.." : "Upload"
                                }</button>
                            </div>
                        </div>}

                    <div>
                        <div className="m-[20px] border-[2px] border-gray-200 rounded-b-[10px] p-[10px] grid grid-flow-row gap-[10px]">
                            {
                                data.map((value) => (
                                    <div key={value.id}>
                                        <div className="bg-gray-200 p-[10px] rounded-[10px]">
                                            <p>Image URL: {value.img}</p>
                                            <p>Title: {value.title}</p>
                                            <p>Content: {value.content}</p>
                                            <div className="mt-[10px]">
                                                <button onClick={() => deleteContent(value.id)} className="h-[40px] w-[80px] ml-0 bg-red-700 text-white font-semibold rounded-[5px] cursor-pointer">Delete</button>
                                                <button onClick={() => updateContent(value.id)} className="h-[40px] w-[80px] bg-black text-white font-semibold rounded-[5px] cursor-pointer ml-[10px]">Update</button>
                                            </div>
                                        </div>

                                        {forUpdate && (value.id == ID) && (
                                            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md" onClick={() => setForUpdate(false)}>
                                                <div className="bg-white p-[20px] rounded-lg shadow-2xl w-[500px] grid grid-flow-row" onClick={(e) => e.stopPropagation()}>
                                                    <p className="font-semibold flex items-center justify-between mb-[10px]">Update <span>Construction Service</span></p>
                                                    <p>Image URL</p>
                                                    <textarea type="url" onChange={(e) => setImg(e.target.value)} defaultValue={`${value.img}`} className="bg-gray-200 p-[5px] rounded-[5px] mb-[10px]"></textarea>
                                                    <p>Title</p>
                                                    <textarea onChange={(e) => setTitle(e.target.value)} defaultValue={`${value.title}`} className="bg-gray-200 p-[5px] rounded-[5px] mb-[10px]"></textarea>
                                                    <p>Content</p>
                                                    <textarea type="text" onChange={(e) => setContent(e.target.value)} defaultValue={`${value.content}`} className="bg-gray-200 p-[5px] rounded-[5px] mb-[10px]"></textarea>
                                                    <button onClick={UpdateContentNew} className="bg-black font-semibold h-[45px] w-full rounded-[10px] text-center mt-[10px] text-white cursor-pointer">{
                                                        loadingUpdate ? "Updating.." : "Update"
                                                    }</button>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const ServiceWaterproof = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [data, setData] = useState([]);
        const [img, setImg] = useState(null);
        const [title, setTitle] = useState("");
        const [content, setContent] = useState("");
        const [loading, setLoading] = useState(false);
        const [deleteLoading, setDeleteLoading] = useState(false);


        useEffect(() => {
            const interval = setInterval(async () => {
                const fetchedData = await getData("ServiceWaterproof");
                setData(fetchedData);
            }, 500)
            return () => clearInterval(interval);
        }, []);

        const postData = async () => {

            if (!img || !title || !content) {
                alert("All fields are required");
                return;
            }

            setLoading(true);
            try {
                await addData("ServiceWaterproof", { img, title, content, createdAt: serverTimestamp() })

                //Update UI instantly
                const updatedData = await getData("ServiceWaterproof");
                setData(updatedData);

                //Close popup & reset fields
                setIsOpen(false);
                setImg(null);
                setTitle("");
                setContent("");

            } catch (error) {
                console.log("Error is", error);
            } finally {
                setLoading(false);
            }
        };

        const deleteContent = async (id) => {
            await deleteData("ServiceWaterproof", id);
        };

        const updateContent = (id) => {
            setForUpdate(true);
            setID(id);
        }
        const [forUpdate, setForUpdate] = useState(false);
        const [loadingUpdate, setLoadingUpdate] = useState(false);
        const [ID, setID] = useState("");
        const UpdateContentNew = async () => {
            await updateData("ServiceWaterproof", ID, { img, title, content, createdAt: serverTimestamp() });
            setForUpdate(false);
            setLoadingUpdate(false);
        }

        return (
            <>
                <div className="grid grid-flow-row">
                    <div className="grid grid-flow-row p-[10px] border-[2px] border-gray-200 m-[20px] rounded-t-[10px]">
                        <p className="font-bold pb-[25px]">WaterProof - Services</p>
                        <button onClick={() => setIsOpen(true)} className="h-[40px] bg-black font-semibold text-white w-[80px] rounded-[5px] cursor-pointer">New</button>
                        {isOpen &&
                            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-20 overflow-scroll overflow-y-auto" onClick={() => setIsOpen(false)}>
                                <div className="bg-white p-[20px] rounded-[10px] w-[500px] shadow-2xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                                    <div className="grid grid-flow-row">
                                        <p className="font-semibold pb-[10px] flex justify-between">New <span>WaterProof Service</span></p>
                                        <p className="mb-[5px]">Image URL</p>
                                        <textarea placeholder="Image URL" type="url" onChange={(e) => setImg(e.target.value)} className="p-[4px] rounded-[5px] mb-[10px] bg-gray-200"></textarea>
                                        <p className="mb-[5px]">Title</p>
                                        <textarea placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="p-[4px] rounded-[5px] mb-[10px] bg-gray-200"></textarea>
                                        <p className="mb-[5px]">Content</p>
                                        <textarea placeholder="Content" type="text" onChange={(e) => setContent(e.target.value)} className="p-[4px] rounded-[5px] mb-[10px] bg-gray-200"></textarea>
                                        <button onClick={postData} className="h-[45px] w-full bg-black font-semibold text-white rounded-[10px] cursor-pointer mt-[10px]">{
                                            loading ? "Uploading.." : "Upload"
                                        }</button>
                                    </div>
                                </div>
                            </div>}
                    </div>
                    <div className="m-[20px] border-[2px] border-gray-200 mt-0 rounded-b-[10px]">
                        {
                            data.map((value) => (
                                <div key={value.id} className="m-[10px] bg-gray-200 rounded-[10px] p-[8px]">
                                    <div>
                                        <p>Image URL: {value.img}</p>
                                        <p>Title: {value.title}</p>
                                        <p>Content: {value.content}</p>
                                    </div>
                                    <div className="mt-[10px]">
                                        <button onClick={() => deleteContent(value.id)} className="h-[40px] w-[80px] bg-red-700 text-white font-semibold rounded-[5px] cursor-pointer mr-[10px]">{deleteLoading ? "Deleting.." : "Delete"}</button>
                                        <button onClick={() => updateContent(value.id)} className="h-[40px] w-[80px] bg-black text-white font-semibold rounded-[5px] cursor-pointer">Update</button>
                                        {forUpdate && (value.id == ID) && (
                                            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md" onClick={() => setForUpdate(false)}>
                                                <div className="bg-white p-[20px] rounded-lg shadow-2xl w-[500px] grid grid-flow-row" onClick={(e) => e.stopPropagation()}>
                                                    <p className="font-semibold flex items-center justify-between mb-[10px]">Update <span>Waterproof Service</span></p>
                                                    <p>Image URL</p>
                                                    <textarea type="url" onChange={(e) => setImg(e.target.value)} defaultValue={`${value.img}`} className="bg-gray-200 p-[5px] rounded-[5px] mb-[10px]"></textarea>
                                                    <p>Title</p>
                                                    <textarea onChange={(e) => setTitle(e.target.value)} defaultValue={`${value.title}`} className="bg-gray-200 p-[5px] rounded-[5px] mb-[10px]"></textarea>
                                                    <p>Content</p>
                                                    <textarea type="text" onChange={(e) => setContent(e.target.value)} defaultValue={`${value.content}`} className="bg-gray-200 p-[5px] rounded-[5px] mb-[10px]"></textarea>
                                                    <button onClick={UpdateContentNew} className="bg-black font-semibold h-[45px] w-full rounded-[10px] text-center mt-[10px] text-white cursor-pointer">{
                                                        loadingUpdate ? "Updating.." : "Update"
                                                    }</button>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </>
        )
    }

    return (
        <>
            <div>
                <ServiceWaterproof />
                <ServiceConstruction />
            </div>
        </>
    )
}