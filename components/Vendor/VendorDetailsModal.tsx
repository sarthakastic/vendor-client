import React, { Dispatch, SetStateAction } from "react";

type Props = {
  showDetailsModel: boolean;
  setShowDetailsModel: Dispatch<SetStateAction<boolean>>;
  details: any;
};

const VendorDetailsModal = ({
  showDetailsModel,
  setShowDetailsModel,
  details,
}: Props) => {
  const handleClose = (e: any) => {
    if (e.target.id === "closeModel") {
      setShowDetailsModel(false);
    }
  };
  if (showDetailsModel === false) return null;
  return (
    <div
      onClick={handleClose}
      id="closeModel"
      className="fixed inset-0 z-10 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="w-4/6 h-4/6 bg-white flex items-center p-4 flex-col">
        <div className="w-full text-center text-xl font-semibold">
          Vendor Details
        </div>
        <div className="w-full flex flex-col gap-x-3 ">
          <div className="flex my-5">
            <h1 className="font-bold"> Name:</h1>{" "}
            <p className="font-semi px-5 ">{details.name}</p>
          </div>
          <div className="flex my-5">
            <h1 className="font-bold"> Account Number:</h1>{" "}
            <p className="font-semi px-5 ">{details.accountNo}</p>
          </div>
          <div className="flex my-5">
            <h1 className="font-bold"> Bank Name:</h1>{" "}
            <p className="font-semi px-5 ">{details.bankName}</p>
          </div>
          <div className="flex my-5">
            <h1 className="font-bold"> Address Line 1:</h1>{" "}
            <p className="font-semi px-5 ">{details.address1}</p>
          </div>
          <div className="flex my-5">
            <h1 className="font-bold"> Address Line 2:</h1>{" "}
            <p className="font-semi px-5 ">{details.address2}</p>
          </div>
          <div className="flex my-5">
            <h1 className="font-bold"> City:</h1>{" "}
            <p className="font-semi px-5 ">{details.city}</p>
          </div>
          <div className="flex my-5">
            <h1 className="font-bold"> Country:</h1>{" "}
            <p className="font-semi px-5 ">{details.country}</p>
          </div>
          <div className="flex my-5">
            <h1 className="font-bold"> Zip Code:</h1>{" "}
            <p className="font-semi px-5 ">{details.zipCode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetailsModal;
