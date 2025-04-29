import {
  productCategories,
  productTags,
  productTypes,
} from "@/public/demo/demoSelectItems";
import React, { FormEvent, useState } from "react";

const AddProduct = () => {
  const [productItems,setProductItems] = useState({
    title: "",
    date: new Date(),
    kg: 0,
    price: 0,
    tags: [],
    categories: [],
    type: "",
    status: "",
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
          <input type="text" placeholder="Title" value={productItems.title} />
        </div>
        <div className="single-input">
          <input type="date" value={productItems.date.toISOString()} />
        </div>
      </div>
      <div className="input-half-area">
        <div className="single-input">
          <input type="number" placeholder="Kg" value={productItems.kg} />
        </div>
        <div className="single-input">
          <input type="number" placeholder="Price" value={productItems.price} />
        </div>
      </div>
      <div className="input-half-area">
        <div className="single-input">
          <select value={productItems.tags}>
            {productTags.map((productTag, index) => (
              <option key={index + 1}>{productTag}</option>
            ))}
          </select>
        </div>
        <div className="single-input">
          <select value={productItems.categories}>
            {productCategories.map((productCategory, index) => (
              <option key={index + 1}>{productCategory}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="input-half-area">
        <div className="single-input">
          <select value={productItems.type}>
            {productTypes.map((productType, index) => (
              <option key={index + 1}>{productType}</option>
            ))}
          </select>
        </div>
        <div className="single-input">
          <select value={productItems.status}>
            {["Active", "Deactive"].map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="custom-file-upload">
        <label htmlFor="productImage">Upload Image</label>
        <input type="file" id="productImage" value={productItems.image} accept="image/*" />
      </div>
      <textarea
        placeholder="Description"
        rows={5}
        name="description"
        id="description"
        value={productItems.description}
      ></textarea>
      <textarea
        placeholder="Additional Information"
        rows={5}
        name="additionalInfo"
        id="additionalInfo"
        value={productItems.additionalInfo}
      ></textarea>
      <button className="rts-btn btn-primary">Save Change</button>
    </form>
  );
};

export default AddProduct;
