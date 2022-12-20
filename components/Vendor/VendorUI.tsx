import { Icon } from "@iconify/react";
import React, { Dispatch, SetStateAction } from "react";
import VendorDelete from "./VendorDelete";
import VendorDetailsModal from "./VendorDetailsModal";
import VendorModel from "./VendorModel";

type Props = {
  page: any;
  setPage: Dispatch<SetStateAction<any>>;
  id: string;
  setId: Dispatch<SetStateAction<string>>;
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
  details: any;
  setCountry: Dispatch<SetStateAction<string>>;
  zipCode: number;
  setZipCode: Dispatch<SetStateAction<number>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  data: any;
  setData: Dispatch<SetStateAction<any>>;
  showDeleteModel: boolean;
  setShowDeleteModel: Dispatch<SetStateAction<boolean>>;
  showDetailsModel: boolean;
  setShowDetailsModel: Dispatch<SetStateAction<boolean>>;
  loader: boolean;
  setLoader: Dispatch<SetStateAction<boolean>>;
  previous: () => any;
  next: () => any;
  newVendor: (e: any) => any;
  editVendor: (id: any) => any;
  deleteDetails: (id: any) => any;
  getDetails: (id: any) => any;
};

const VendorUI = ({
  id,
  setId,
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
  showModal,
  setShowModal,
  data,
  setData,
  previous,
  next,
  details,
  newVendor,
  deleteDetails,
  editVendor,
  loader,
  setLoader,
  showDeleteModel,
  setShowDeleteModel,
  showDetailsModel,
  setShowDetailsModel,
  getDetails,
  page,
  setPage,
}: Props) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-11/12 h-5/6 border-2">
        <div
          className={` ${
            loader ? "flex" : "hidden"
          } justify-center py-5 text-xl `}
        >
          Loading...
        </div>
        <div className="w-full h-16 flex justify-between items-center px-2 bg-gray-400 text-xl font-semibold">
          <div className="flex justify-between items-center text-center w-5/6">
            <div className="text-center w-full">Name</div>
            <div className="text-center w-full">Account No.</div>
            <div className="text-center w-full">Bank Name</div>
          </div>
          <div className="w-1/6">
            <div> </div>
            <div></div>
            <div
              onClick={() => setShowModal(true)}
              className="relative md:left-8 hover:cursor-pointer md:px-2 bg-black w-fit rounded-full  text-gray-400"
            >
              <span className="text-[10px]  ">Create New </span>
            </div>
          </div>
        </div>
        {data?.map((d: any) => (
          <div
            className="w-full h-16 flex border justify-between items-center px-2"
            key={d._id}
          >
            <div className="flex justify-between text-center items-center w-5/6">
              <div className="text-center w-full">{d.name}</div>
              <div className="text-center w-full ">{d.accountNo}</div>
              <div className="text-center w-full"> {d.bankName} </div>
            </div>

            <div className="h-1/6">
              <Icon
                onClick={() => {
                  setShowDetailsModel(true);
                  getDetails(d._id);
                  console.log("hello world", d);
                  setId(d._id);
                }}
                icon="material-symbols:info-outline"
                className="text-xl hover:cursor-pointer"
              />
            </div>
            <div>
              <Icon
                onClick={() => {
                  setShowModal(true);
                  getDetails(d._id);
                  console.log("hello world", d);
                  setId(d._id);
                }}
                icon="mdi:pencil-outline"
                className="text-xl hover:cursor-pointer"
              />
            </div>
            <div>
              <Icon
                icon="mdi:bin-outline"
                className="text-xl hover:cursor-pointer "
                onClick={() => {
                  setShowDeleteModel(true);
                  setId(d._id);
                }}
              />
            </div>
          </div>
        ))}

        <div className="flex w-full mt-5 justify-around ">
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
      <VendorDelete
        id={id}
        showDeleteModel={showDeleteModel}
        setShowDeleteModel={setShowDeleteModel}
        deleteDetails={deleteDetails}
      />
      <VendorModel
        id={id}
        setShowModal={setShowModal}
        showModal={showModal}
        newVendor={newVendor}
        editVendor={editVendor}
        getDetails={getDetails}
        name={name}
        setName={setName}
        accountNo={accountNo}
        setAcccountNo={setAcccountNo}
        bankName={bankName}
        setBankName={setBankName}
        address1={address1}
        setAddress1={setAddress1}
        address2={address2}
        setAddress2={setAddress2}
        city={city}
        setCity={setCity}
        country={country}
        setCountry={setCountry}
        zipCode={zipCode}
        setZipCode={setZipCode}
      />
      <VendorDetailsModal
        showDetailsModel={showDetailsModel}
        setShowDetailsModel={setShowDetailsModel}
        details={details}
      />
    </div>
  );
};

export default VendorUI;
