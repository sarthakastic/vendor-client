import React, { useState } from "react";
import axios from "axios";
import { json } from "stream/consumers";

const createVendor = () => {
  const [name, setName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [bankName, setBankName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  //   let bodyFromData = new FormData();
  //   bodyFromData.append("name", name);
  //   bodyFromData.append("accountNo", accountNo);
  //   bodyFromData.append("bankName", bankName);

  const newVendor = () => {
    console.log("post");
    axios
      .post("https://vendor-server-production-9234.up.railway.app/", {
        name: name,
        accountNo: accountNo,
        bankName: bankName,
        address1: address1,
        address2: address2,
        city: city,
        country: country,
        zipCode: zipCode,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full border m-2 flex-col justify-center items-center gap-4 ">
        <input
          className="border w-40 "
          type="text"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <input
          className="border w-40 "
          type="text"
          placeholder="Account Number*"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
          required
        ></input>
        <input
          className="border w-40 "
          type="text"
          placeholder="Bank Name*"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          required
        ></input>
        <input
          className="border w-40 "
          type="text"
          placeholder="Address Line 1"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
        ></input>
        <input
          className="border w-40 "
          type="text"
          placeholder="Address Line 2"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
        ></input>
        <input
          className="border w-40 "
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <input
          className="border w-40 "
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        ></input>
        <input
          className="border w-40 "
          type="text"
          placeholder="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        ></input>
        <div className="   text-xs font-normal text-red-500 ">
          "*" means required
        </div>
      </div>
      <div
        className="bg-blue-500 px-5 rounded-lg text-white hover:cursor-pointer "
        onClick={() => newVendor()}
      >
        Create
      </div>
    </div>
  );
};

export default createVendor;
