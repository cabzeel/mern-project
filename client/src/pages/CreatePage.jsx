import { useState } from "react"
import { useProductStore } from "../Store/product";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePage = () => {
   const [newProduct, setNewProduct] = useState({
      name: "",
      price: "",
      image: ""
   });
const {createProduct} = useProductStore();
   const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct);
    if(success) {
      toast.success(message, {
         position: 'bottom-right',
         autoClose: 5000, // Closes automatically after 3 seconds
       });
    } 

    else {
      toast.error('Operation failed. Please try again.', {
        position: 'bottom-right',
        autoClose: 5000,
      });
   }
   setNewProduct({name: '', price: '', image: ''})
}
  return (
    <section className="create_page">
      <h1>Create New Product</h1>
      <div className="create_product">
         <input placeholder="Enter Product name" 
            type="text" name="name" 
            value={newProduct.name} 
            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
         />
         <input placeholder="Input product price"
            name="Price" 
            value={newProduct.price}
            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
          />
         <input placeholder="Input product url"
             type="url" 
             name="image" 
             value={newProduct.image}
             onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
             />
         <button onClick={handleAddProduct} type="submit">Create New Product</button>
      </div>
    </section>
  )
}

export default CreatePage