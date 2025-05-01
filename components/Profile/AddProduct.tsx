import { UploadButton } from "@/app/lib/uploadthing";
import { productCategories, productStatus, productTags, productTypes } from "@/public/demo/demoSelectItems";
import React, { FormEvent, useState } from "react";
import Select from "react-select";

const AddProduct = () => {
  const [productItems,setProductItems] = useState({
    title: "",
    date: new Date().toISOString().split('T')[0],
    kg: 0,
    price: 0,
    tags: [
      { value: '', label: '' }
    ],
    categories: [
      { value: '', label: '' }
    ],
    type: [
      { value: '', label: '' }
    ],
    status: [
      { value: '', label: '' }
    ],
    image: "",
    description: "",
    additionalInfo: ""
  });

  const handleAddNewProduct = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


  };

  return (
    <form action="#" className="add-product-form" onSubmit={handleAddNewProduct}>
      <h2 className="title">Add New Product</h2>
      <div className="input-half-area">
        <div className="single-input">
          <label htmlFor="title">Title*</label>
          <input 
            type="text" 
            placeholder="Enter title:" 
            id="title"
            value={productItems.title} 
            onChange={(e) => setProductItems((prev) => {
              return {
                ...prev,
                title: e.target.value
              }
            })} 
          />
        </div>
        <div className="single-input">
          <label htmlFor="lifespan">Lifespan*</label>
          <input 
            type="date" 
            id="lifespan"
            value={productItems.date} 
            onChange={(e) => setProductItems((prev) => {
              return {
                ...prev,
                date: e.target.value
              }
            })} 
          />
        </div>
      </div>
      <div className="input-half-area">
        <div className="single-input">
          <label htmlFor="kg">Kg*</label>
          <input 
            type="number" 
            id="kg"
            placeholder="Kg:" 
            value={productItems.kg} 
            onChange={(e) => setProductItems((prev) => {
              return {
                ...prev,
                kg: parseInt(e.target.value)
              }
            })} 
          />
        </div>
        <div className="single-input">
          <label htmlFor="price">Price*</label>
          <input 
            type="number" 
            id="price"
            placeholder="Price:" 
            value={productItems.price} 
            onChange={(e) => setProductItems((prev) => {
              return {
                ...prev,
                price: parseInt(e.target.value)
              }
            })} 
          />
        </div>
      </div>
      <div className="input-half-area">
        <div className="single-input">
          <label htmlFor="tags">Tags*</label>
          <Select
            isMulti
            options={productTags}
            id="tags"
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select tags:"
            value={productItems.tags}
            onChange={(selectedOption) => setProductItems((prev) => { 
              return {
                ...prev,
                tags: [
                  ...selectedOption
                ]
              }
            })}
          />
        </div>
        <div className="single-input">
          <label htmlFor="categories">Catergories*</label>
          <Select
            isMulti
            id="categories"
            options={productCategories}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select categories:"
            onChange={(selectedOption) => setProductItems((prev) => { 
              return {
                ...prev,
                categories: [
                  ...selectedOption
                ]
              }
            })}
          />
        </div>
      </div>
      <div className="input-half-area">
        <div className="single-input">
          <label htmlFor="type">Type*</label>
          <Select
            options={productTypes}
            id="type"
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select type:"
            value={productItems.type}
            onChange={(selectedOption) => {          
              setProductItems((prev) => {
                return {
                  ...prev,
                  type: [
                    selectedOption
                  ]
                }
              })
            }}
          />
        </div>
        <div className="single-input">
          <label htmlFor="status">Status*</label>
          <Select
            options={productStatus}
            id="status"
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select status:"
            value={productItems.status}
            onChange={(selectedOption) => {              
              setProductItems((prev) => {
                return {
                  ...prev,
                  status: [
                    selectedOption
                  ]
                }
              })
            }}
          />
        </div>
      </div>
      <div className="upload-button">
        <UploadButton
          endpoint="imageUploader"
          content={{
            button: "Upload Image",
          }}
          onClientUploadComplete={(res) => {
            setProductItems((prev) => {
              return {
                ...prev, 
                image: res[0].ufsUrl
              }
            });
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>

      <div className="single-input">
        <label htmlFor="description">Description*</label>
        <textarea
          placeholder="Enter description:"
          rows={5}
          name="description"
          id="description"
          value={productItems.description}
          onChange={(e) => setProductItems((prev) => {
            return {
              ...prev,
              description: e.target.value
            }
          })}
        ></textarea>
      </div>
      <div className="single-input">
        <label htmlFor="additionalInfo">Additional Information*</label>
        <textarea
          placeholder="Enter additional information:"
          rows={5}
          name="additionalInfo"
          id="additionalInfo"
          value={productItems.additionalInfo}
          onChange={(e) => setProductItems((prev) => {
            return {
              ...prev,
              additionalInfo: e.target.value
            }
          })}
        ></textarea>
      </div>
      <button className="rts-btn btn-primary">Save Change</button>
    </form>
  );
};

export default AddProduct;