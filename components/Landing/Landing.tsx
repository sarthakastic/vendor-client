import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

const Landing = () => {
  const [data, setData] = useState<any>([]);
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    console.log("useeffect");
    axios
      .get(
        `https://vendor-server-production-9234.up.railway.app/?page=${page}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        setData(res.data);
        console.log(page);
        console.log(res.data.length);
      })
      .catch((e) => console.log(e));
  }, [page]);

  const previous = () => {
    if (page != 1) setPage(page - 1);
  };
  const next = () => {
    if (data.length < 5) {
      console.log(data.length, "pages");
    } else setPage(page + 1);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="w-full">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-200 border-b-2 ">
              <th>Name</th>
              <th>Account No.</th>
              <th>Bank Name</th>
              <th></th>
            </tr>
          </thead>
          {data.map((i: any) => (
            <tbody key={i._id}>
              <tr className="border-b-2">
                <td className="text-center">{i.name}</td>
                <td className="text-center">{i.accountNo}</td>
                <td className="text-center ">{i.bankName}</td>
                <td>
                  <span
                    onClick={() => router.push(`/details/${i._id}`)}
                    className="px-1 hover:cursor-pointer"
                  >
                    <Icon icon="material-symbols:info-outline" />
                  </span>
                  <span
                    onClick={() => router.push(`/edit/${i._id}`)}
                    className="px-1 hover:cursor-pointer"
                  >
                    <Icon icon="mdi:pencil-outline" />
                  </span>
                  <span
                    onClick={() => router.push(`/delete/${i._id}`)}
                    className="px-1 hover:cursor-pointer"
                  >
                    <Icon icon="mdi:bin-outline" />
                  </span>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      <div className="my-5 relative rounded-lg p-2 text-white bg-blue-500 w-fit flex justify-center ">
        <button onClick={() => router.push("/createVendor")}>
          Create New Vendor
        </button>
      </div>

      <div className="flex w-full justify-around ">
        <div
          className={`hover:cursor-pointer ${
            page === 1 ? "hidden" : null
          }  bg-slate-200 text-2xl rounded-full  `}
          onClick={previous}
        >
          <Icon icon="material-symbols:keyboard-arrow-left" />
        </div>
        <div
          className={`hover:cursor-pointer ${
            data.length < 5 ? "hidden" : null
          }  bg-slate-200 rounded-full text-2xl `}
          onClick={next}
        >
          <Icon icon="material-symbols:keyboard-arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
