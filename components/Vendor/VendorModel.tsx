import React, { Dispatch, SetStateAction } from "react";

type Props = {
  id: any;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  newVendor: (e: any) => any;
  editVendor: (id: any) => any;
  getDetails: (id: any) => any;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  accountNo: number;
  setAcccountNo: Dispatch<SetStateAction<number>>;
  bankName: string;
  setBankName: Dispatch<SetStateAction<string>>;
  address1: string;
  setAddress1: Dispatch<SetStateAction<string>>;
  address2: string;
  setAddress2: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  zipCode: number;
  setZipCode: Dispatch<SetStateAction<number>>;
};

const VendorModel = ({
  showModal,
  setShowModal,
  id,
  newVendor,
  editVendor,
  name,
  setName,
  accountNo,
  setAcccountNo,
  bankName,
  setBankName,
  address1,
  setAddress1,
  address2,
  setAddress2,
  city,
  setCity,
  country,
  setCountry,
  zipCode,
  setZipCode,
}: Props) => {
  const handleClose = (e: any) => {
    if (e.target.id === "closeModel") {
      setShowModal(false);
    }
  };
  if (showModal === false) return null;

  return (
    <div
      onClick={handleClose}
      id="closeModel"
      className="fixed inset-0 z-10 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="w-4/6 h-4/6">
        <form
          action=""
          className="w-full h-full flex flex-col p-4 items-center bg-white rounded-md gap-y-3"
        >
          <div>
            {id === "" || undefined ? "Create Vendor" : "Edit vender details"}
          </div>
          <input
            className="border w-5/6 h-10 placeholder:p-2 rounded-md"
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="border w-5/6 h-10 placeholder:p-2 rounded-md"
            type="text"
            placeholder="Account Number*"
            value={accountNo}
            onChange={(e) => setAcccountNo(Number(e.target.value))}
            required
          />
          <input
            className="border w-5/6 h-10 placeholder:p-2 rounded-md"
            type="text"
            placeholder="Bank Name*"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            required
          />
          <input
            className="border w-5/6 h-10 placeholder:p-2 rounded-md"
            type="text"
            placeholder="Address Line 1"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
          <input
            className="border w-5/6 h-10 placeholder:p-2 rounded-md"
            type="text"
            placeholder="Address Line 2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
          <input
            className="border w-5/6 h-10 placeholder:p-2 rounded-md"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className="border w-5/6 h-10 placeholder:p-2 rounded-md"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            className="border w-5/6 h-10 placeholder:p-2 rounded-md"
            type="text"
            placeholder="Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(Number(e.target.value))}
          />
          {id === "" ? (
            <button
              type="submit"
              className="w-24 h-12 bg-blue-400 text-white shadow-lg rounded-md mt-2"
              onClick={(e) => {
                newVendor(e), setShowModal(false);
              }}
            >
              Submit
            </button>
          ) : (
            <button
              type="submit"
              className="w-24 h-12 bg-blue-400 text-white shadow-lg rounded-md mt-2"
              onClick={() => {
                editVendor(id), setShowModal(false);
              }}
            >
              Edit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default VendorModel;
