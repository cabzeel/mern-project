import mongoose from "mongoose";

const productSchema = mongoose.Schema({
   name: {
      type: 'string',
      required: true
   },

   price: {
      type: Number,
      required: true
   },
   image: {
      type: 'string',
      required: true
   },
},{
   timestamps: true //createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema);
export default Product;