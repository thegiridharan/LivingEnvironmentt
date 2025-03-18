import { addData, deleteData, updateData, getData } from "@/firebase/firestoreService";
import { serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


export default function Blog() {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);
    const [img, setImg] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);


    useEffect(() => {
        const interval = setInterval(async () => {
            const fetchedData = await getData("Blog");
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
            await addData("Blog", { img, title, content, createdAt: serverTimestamp() })

            //Update UI instantly
            const updatedData = await getData("Blog");
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
        await deleteData("Blog", id);
    };

    const updateContent = (id) => {
        setForUpdate(true);
        setID(id);
    }
    const [forUpdate, setForUpdate] = useState(false);
    const [loadingUpdate, setLoadingUpdate] = useState(false);
    const [ID, setID] = useState("");
    const UpdateContentNew = async () => {
        setLoadingUpdate(true);
        await updateData("Blog", ID, { img, title, content, createdAt: serverTimestamp() });
        setForUpdate(false);
        setLoadingUpdate(false);
    }


    return (
        <>
            <div>
                <div className="m-[20px] border-[2px] border-gray-200 p-[10px] grid grid-flow-row rounded-t-[10px]">
                    <p className="font-bold pb-[25px]">Blogs</p>
                    <button onClick={() => setIsOpen(true)} className="h-[40px] w-[80px] text-center bg-black rounded-[5px] text-white font-semibold cursor-pointer">New</button>
                </div>
                {isOpen &&
                    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md" onClick={() => setIsOpen(false)}>
                        <div className="bg-white p-[20px] rounded-[10px] shadow-2xl w-[500px] grid grid-flow-row gap-[10px]" onClick={(e) => e.stopPropagation()}>
                            <p className="font-semibold flex justify-between">New <span>Blog</span></p>
                            <p>Image URL</p>
                            <textarea placeholder="Image" type="url" onChange={(e) => setImg(e.target.value)} className="p-[5px] bg-gray-200 rounded-[5px] mb-[10px]"></textarea>
                            <p>Title</p>
                            <textarea placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="p-[5px] bg-gray-200 rounded-[5px] mb-[10px]"></textarea>
                            <p>Content</p>
                            <textarea placeholder="Content" type="text" onChange={(e) => setContent(e.target.value)} className="p-[5px] bg-gray-200 rounded-[5px] mb-[10px]"></textarea>
                            <button onClick={postData} className="h-[45px] bg-black font-semibold text-white rounded-[10px] cursor-pointer">{
                                loading ? "Uploading.." : "Upload"
                            }</button>
                        </div>
                    </div>}

                <div className="m-[20px] border-[2px] border-gray-200 p-[10px] rounded-b-[10px]">
                    {
                        data.map((value) => (
                            <div key={value.id} className="bg-gray-200 rounded-[5px] mb-[10px] p-[10px]">
                                <p>Image URL: {value.img}</p>
                                <p>Title: {value.title}</p>
                                <p className="mb-[10px]">Content: {value.content}</p>
                                <button onClick={() => deleteContent(value.id)} className="h-[40px] w-[80px] bg-red-700 rounded-[5px] cursor-pointer text-white font-semibold">Delete</button>
                                <button onClick={() => updateContent(value.id)} className="h-[40px] w-[80px] bg-black rounded-[5px] cursor-pointer font-semibold text-white ml-[10px]">Update</button>
                                {forUpdate && (value.id == ID) && (
                                    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md" onClick={() => setForUpdate(false)}>
                                        <div className="bg-white p-[20px] rounded-[10px] shadow-2xl w-[500px] grid grid-flow-row" onClick={(e) => e.stopPropagation()}>
                                            <p className="flex items-center justify-between font-semibold mb-[10px]">Update <span>Blog</span></p>
                                            <p>Image URL</p>
                                            <textarea type="url" onChange={(e) => setImg(e.target.value)} defaultValue={`${value.img}`} className="bg-gray-200 rounded-[5px] mt-[5px] p-[5px] mb-[10px]"></textarea>
                                            <p>Title</p>
                                            <textarea onChange={(e) => setTitle(e.target.value)} defaultValue={`${value.title}`} className="bg-gray-200 rounded-[5px] mt-[5px] p-[5px] mb-[10px]"></textarea>
                                            <p>Content</p>
                                            <textarea type="text" onChange={(e) => setContent(e.target.value)} defaultValue={`${value.content}`} className="bg-gray-200 rounded-[5px] mt-[5px] p-[5px] mb-[10px]"></textarea>
                                            <button onClick={UpdateContentNew} className="h-[45px] bg-black rounded-[10px] text-white font-semibold mt-[10px] cursor-pointer">{
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
        </>
    )
}