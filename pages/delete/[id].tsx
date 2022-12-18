import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const Delete = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);

  const deleteDetails = () => {
    console.log("first");
    axios
      .delete(`https://vendor-server-production-9234.up.railway.app/${id}`)
      .then((res) => {
        console.log("Deleted Successfully", res.status);
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hover:cursor-pointer flex flex-col h-screen justify-center items-center ">
      <div className="border-2 p-2 ">
        <div className="font-bold">
          Are you sure you want to permanently delete this data?
        </div>
        <div className="flex justify-around m-2">
          <div
            className="w-fit px-5 border bg-slate-200 rounded-lg "
            onClick={() => router.push("/")}
          >
            No
          </div>
          <div
            className="w-fit px-5 bg-red-500 text-white rounded-lg "
            onClick={() => deleteDetails()}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
