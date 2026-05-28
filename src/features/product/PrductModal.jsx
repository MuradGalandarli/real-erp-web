import { useState } from "react";

export function ProductModal({ onNewProduct, company, category,brand,onClose}) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    brandId: "",
    categoryId: "",
    companyId: "",
    images: []
  });

  const handleSave = () => {
    debugger;
    const formData = new FormData();
    formData.append("Name", newProduct.name);
    formData.append("Description", newProduct.description || "");
    formData.append("BrandId", parseInt(newProduct.brandId));
    formData.append("CategoryId", parseInt(newProduct.categoryId));
    formData.append("CompanyId", parseInt(newProduct.companyId));

    newProduct.images.forEach(img => formData.append("Images", img));

    console.log("FormData hazırlandı:", newProduct);
    onNewProduct(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add</h2>
        <input type="text" placeholder="name" onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} />
        <input type="text" placeholder="description" onChange={(e) => setNewProduct({...newProduct, description: e.target.value})} />
        
        {/* <input type="text" 
        placeholder="brandId" 
        onChange={(e) => setNewProduct({...newProduct, brandId: e.target.value})} /> */}

        <select 
         onChange={(e) => setNewProduct({...newProduct, brandId: Number(e.target.value)})}
        >
          <option value="">Brands</option>
{
  brand.map((item)=>(
    <option key={item.id} value={item.id}>{item.brandName}</option>
  ))
}
        </select>
      
        <select name="" id=""
          onChange={(e) => setNewProduct({...newProduct, categoryId: Number(e.target.value)})}
        >
          <option value="">Categories</option>
          {
            category.map((c)=>(
              <option key={c.id} value={c.id}>{c.name}</option>
            ))
          }
        </select>
      
        {/* <input type="text" placeholder="categoryId"
         onChange={(e) => setNewProduct({...newProduct, categoryId: e.target.value})} />
         */}
        
        {/* <input type="text" placeholder="companyId"
         onChange={(e) => setNewProduct({...newProduct, companyId: e.target.value})} />
        */}
        <select name="" id=""
         onChange={(e) => setNewProduct({...newProduct, companyId: Number(e.target.value)})}
        >
          <option value="">Companies</option>
          {
            company.map((c)=>(
              <option key={c.id} value={c.id}>{c.name}</option>
            ))
          }
        </select>
       
       
       
        <input type="file" multiple onChange={(e) => setNewProduct({...newProduct, images: [...e.target.files]})} />
        <div className="modal-buttons">
          <button type="button" onClick={handleSave}>Save</button>
           <button type="button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}