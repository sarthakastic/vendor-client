import React, { useState, useEffect } from "react";
import VendorUI from "../components/Vendor/VendorUI";
import axios from "axios";
type Props = {};

const Vendor = (props: Props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [details, setDetails] = useState<any>({});
  const [accountNo, setAccountNo] = useState(0);
  const [bankName, setBankName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [showDetailsModel, setShowDetailsModel] = useState(false);
  const [loader, setLoader] = useState(true);
  const getVendor = () => {
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
        setLoader(false);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getVendor();
    console.log("useeffect");
  }, [page]);

  const previous = () => {
    if (page != 1) setPage(page - 1);
  };
  const next = () => {
    if (data.length < 5) {
      console.log(data.length, "pages");
    } else setPage(page + 1);
  };

  const clearForm = () => {
    setAccountNo(0);
    setAddress1("");
    setAddress2("");
    setCity("");
    setName("");
    setCountry("");
    setBankName("");
    setZipCode(0);
  };

  const newVendor = (e: any) => {
    e.preventDefault();
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
        getVendor();
        clearForm();
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  const editVendor = (id: any) => {
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
        getVendor();
        clearForm(), console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const getDetails = (id: any) => {
    axios
      .get(`https://vendor-server-production-9234.up.railway.app/${id}`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      })
      .then((res) => {
        setDetails(res.data);

        console.log("teri maa", res.data);
        setName(res.data.name);
        console.log("Name", res.data.name);

        setAccountNo(res.data.accountNo);
        setAddress1(res.data.address1);
        setAddress2(res.data.address2);
        setBankName(res.data.bankName);
        setCity(res.data.city);
        setCountry(res.data.country);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  const deleteDetails = (id: any) => {
    console.log("id", id);
    axios
      .delete(`https://vendor-server-production-9234.up.railway.app/${id}`)
      .then((res) => {
        getVendor();
        console.log("Deleted Successfully", res.status);
      })
      .catch((err) => console.log(err));
  };
  console.log("data", data);

  return (
    <>
      <VendorUI
        name={name}
        setName={setName}
        accountNo={accountNo}
        setAcccountNo={setAccountNo}
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
        data={data}
        setData={setData}
        showModal={showModal}
        setShowModal={setShowModal}
        previous={previous}
        next={next}
        newVendor={newVendor}
        editVendor={editVendor}
        deleteDetails={deleteDetails}
        id={id}
        setId={setId}
        showDeleteModel={showDeleteModel}
        setShowDeleteModel={setShowDeleteModel}
        getDetails={getDetails}
        page={page}
        setPage={setPage}
        showDetailsModel={showDetailsModel}
        setShowDetailsModel={setShowDetailsModel}
        details={details}
        loader={loader}
        setLoader={setLoader}
      />
    </>
  );
};

export default Vendor;
