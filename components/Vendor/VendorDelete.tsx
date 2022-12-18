import React, { Dispatch, SetStateAction } from "react";

type Props = {
  id: string;
  showDeleteModel: boolean;
  setShowDeleteModel: Dispatch<SetStateAction<boolean>>;
  deleteDetails: (id: any) => any;
};

const VendorDelete = ({
  id,
  setShowDeleteModel,
  showDeleteModel,
  deleteDetails,
}: Props) => {
  const handleClose = (e: any) => {
    if (e.target.id === "closeModal") {
      setShowDeleteModel(false);
    }
  };
  if (showDeleteModel === false) return null;
  return (
    <div
      className="fixed inset-0 z-20 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      id="closeModal"
      onClick={handleClose}
    >
      <div className="border-2 p-2 bg-white ">
        <div className="font-bold">
          Are you sure you want to permanently delete this data?
        </div>
        <div className="flex justify-around m-2">
          <div
            className="w-fit px-5 border bg-slate-200 rounded-lg "
            onClick={() => {
              setShowDeleteModel(false);
            }}
          >
            No
          </div>
          <div
            className="w-fit px-5 bg-red-500 text-white rounded-lg "
            onClick={() => {
              deleteDetails(id);
              setShowDeleteModel(false);
            }}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDelete;
