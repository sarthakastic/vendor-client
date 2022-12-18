import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Details = () => {
  const [data, setData] = useState<any>({});
  useEffect(() => {
    console.log("useeffect");
    axios
      .get(`https://vendor-server-production-9234.up.railway.app/${id}`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data.name);
      })
      .catch((e) => console.log(e));
  }, []);

  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <h1 className="text-slate-500 text-4xl font-extrabold">User Details</h1>
      <div className="flex border ">
        <div className="text-slate-400 px-2 w-1/2 font-medium text-xl ">
          Name:{" "}
        </div>
        <div className="text-slate-400 px-2 font-medium text-xl ">
          {data.name}
        </div>
      </div>
      <div className="flex border ">
        <div className="text-slate-400 px-2 w-1/2 font-medium text-xl ">
          Account Number:{" "}
        </div>
        <div className="text-slate-400 px-2 font-medium text-xl ">
          {data.accountNo}
        </div>
      </div>
      <div className="flex border ">
        <div className="text-slate-400 px-2 w-1/2 font-medium text-xl ">
          Bank Name:{" "}
        </div>
        <div className="text-slate-400 px-2 font-medium text-xl ">
          {data.bankName}
        </div>
      </div>
      <div className="flex border ">
        <div className="text-slate-400 w-1/2 px-2 font-medium text-xl ">
          Address Line 1:{" "}
        </div>
        <div className="text-slate-400 px-2 font-medium text-xl ">
          {data.address1 == undefined ? <p>Empty</p> : data.address1}
        </div>
      </div>
      <div className="flex border ">
        <div className="text-slate-400 px-2 w-1/2 font-medium text-xl ">
          Address Line 2:{" "}
        </div>
        <div className="text-slate-400 px-2 font-medium text-xl ">
          {data.address2 == undefined ? <p>Empty</p> : data.address2}
        </div>
      </div>
      <div className="flex border ">
        <div className="text-slate-400 px-2 w-1/2 font-medium text-xl ">
          City:{" "}
        </div>
        <div className="text-slate-400 px-2 font-medium text-xl ">
          {data.city == undefined ? <p>Empty</p> : data.city}
        </div>
      </div>
      <div className="flex border ">
        <div className="text-slate-400 px-2 w-1/2 font-medium text-xl ">
          Country:{" "}
        </div>
        <div className="text-slate-400 px-2 font-medium text-xl ">
          {data.country == undefined ? <p>Empty</p> : data.country}
        </div>
      </div>
      <div className="flex border ">
        <div className="text-slate-400 px-2 w-1/2 font-medium text-xl ">
          Zip Code:{" "}
        </div>
        <div className="text-slate-400 px-2 font-medium text-xl ">
          {data.zipCode == undefined ? <p>Empty</p> : data.zipCode}
        </div>
      </div>
    </div>
  );
};

export default Details;
