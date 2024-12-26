import React, { useState } from 'react';
import { MdEdit, MdDelete  } from 'react-icons/md';
import { useProductStore } from '../Store/product';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal';


const ProductCard = ({product}) => {
   const [isModalOpen, setModalOpen] = useState(false);
   const openModal = () => setModalOpen(true);
   const closeModal = () => setModalOpen(false);


   const { deleteProducts, updateProducts } = useProductStore();
   
   const handleDeleteProduct = async (id) => {
      const {success, message} = await deleteProducts(id);
      if (success) {
    toast.success(message, {
      toastId: `delete-success-${id}`,
      position: 'top-right',
      autoClose: 5000,
    });
  } else {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
    });
  }
   }
   const [updatedProduct, setUpdatedProduct] = useState(product)

   const handleUpdateProduct = async (id, updatedProduct) => {
      const {success, message} = await updateProducts(id, updatedProduct);
      closeModal();
      if (!success) {
         toast.error(message, {
            position: 'top-right',
            autoClose: 5000,
         })
      } else {
         toast.success(message, {
            position: 'top-right',
            autoClose: 5000,

         })
      }
   }
   
  return (
    <div className='product_card'>
      <img src={product.image} alt={product.name} />
      <div>
         <h1>{product.name}</h1>
         <h3>{product.price}$</h3>
      </div>
      <div className='icons'>
         <MdEdit title='edit product' className='edit_icon' onClick={openModal}/>
         <MdDelete  title='delete product' className='delete_icon' onClick={() => handleDeleteProduct(product._id)}/>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
         <h1 className='modal_header'>Update Product</h1>
         <input placeholder="Enter Product name" 
            type="text" name="name" 
            value={updatedProduct.name} 
           onChange={(e) => setUpdatedProduct({...updatedProduct, name:e.target.value})}
         />
         <input placeholder="Input product price"
            name="Price" 
            value={updatedProduct.price}
            onChange={(e) => setUpdatedProduct({...updatedProduct, price:e.target.value})}
          />
         <input placeholder="Input product url"
             type="url" 
             name="image" 
             value={updatedProduct.image}
             onChange={(e) => setUpdatedProduct({...updatedProduct, image:e.target.value})}
             />
         <div className='btns'>
         <button className='btn' onClick={() =>handleUpdateProduct(product._id, updatedProduct)}>Update</button>
            <button className='cancel_btn' onClick={closeModal}>Cancel</button>
         </div>
      </Modal>
    </div>
  )
}

export default ProductCard