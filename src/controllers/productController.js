const Product = require('../models/product');
const { productValidationSchema } = require('../validators/productValidator');
//addProduct
async function addProduct(req,res){
    const { productId, name, description, price } = req.body;
    // validator code
    const validate = productValidationSchema.validate(req.body)
    console.log("VALIDATORS: ",validate)
    if(validate.error){
      return res.status(400).json({error: validate.error.details})
    }
  try {

    const prod = await Product.findOne({productId, name})

    if(prod){
      return res.status(302).json({message: "Product already exist"})
    }
    await Product.create({
      productId,
      name,
      description,
      price,
    });
    res.json({ message: 'Product added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding product' });
  }
}
// viewAllProducts
async function viewAllProducts(req,res){
  console.log(req.headers)
    try {
        const products = await Product.find();
        res.json(products);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching products' });
      }
}
//viewOne
async function viewOneProduct(req,res){
    const productId = req.params.productId;
    try {
        const product = await Product.findOne({productId:productId});
        if (!product) {
        return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching product' });
    }
}
//updateOne
async function updateOneProduct(req,res){
    const productId = req.params.productId;
    const { name, description, price } = req.body;

    
    if(name.length < 1){
      return res.status(404).json({error: "Product Id is Required"})
    }

    try {
        const product = await Product.findOne({productId})

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;

        await product.save()

        res.send("Product is Updated")
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating product' });
    }
}
module.exports = {addProduct,viewAllProducts,viewOneProduct,updateOneProduct}