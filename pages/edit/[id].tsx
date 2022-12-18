import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Edit = () => {
  const router = useRouter();
  const id = router.query.id;

  const [name, setName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [bankName, setBankName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const clearForm = () => {
    setAccountNo("");
    setAddress1("");
    setAddress2("");
    setCity("");
    setName("");
    setCountry("");
    setBankName("");
    setZipCode("");
  };

  const editVendor = () => {
    axios
      .patch(`https://vendor-server-production-9234.up.railway.app/${id}`, {
        name: name,
        accountNo: accountNo,
        bankName: bankName,
        address1: address1,
        address2: address2,
        city: city,
        country: country,
        zipCode: zipCode,
      })
      .then((res) => {
        clearForm(), console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <div className="text-xl font-semibold border-b-2 border-black">
        Enter your details
      </div>
      <div className="flex flex-col items-center justify-center pt-3">
        <div className="flex w-fit  m-2 flex-col justify-center items-center gap-4">
          <input
            className="border w-[450px] h-10  placeholder:p-2 rounded-md p-2 "
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          <input
            className="border w-[450px] h-10 placeholder:p-2 rounded-md p-2"
            type="text"
            placeholder="Account Number"
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
            required
          ></input>
          <input
            className="border w-[450px] h-10 placeholder:p-2 rounded-md p-2"
            type="text"
            placeholder="Bank Name"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            required
          ></input>
          <input
            className="border w-[450px] h-10 placeholder:p-2 rounded-md p-2"
            type="text"
            placeholder="Address Line 1"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          ></input>
          <input
            className="border w-[450px] h-10 placeholder:p-2 rounded-md p-2"
            type="text"
            placeholder="Address Line 2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          ></input>
          <input
            className="border w-[450px] h-10 placeholder:p-2 rounded-md p-2"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <input
            className="border w-[450px] h-10 placeholder:p-2 rounded-md p-2"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></input>
          <input
            className="border w-[450px] h-10 placeholder:p-2 rounded-md p-2"
            type="text"
            placeholder="Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          ></input>
        </div>
        <div
          className="bg-blue-500 w-24 h-10 flex justify-center items-center shadow-md mt-5 rounded-lg text-white hover:cursor-pointer "
          onClick={() => editVendor()}
        >
          Edit
        </div>
      </div>
    </div>
  );
};

export default Edit;
