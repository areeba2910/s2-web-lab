var mongoose=require("mongoose");
var productSchema =mongoose.Schema({
    coursename:String,
    courseid:String,
    courseduration:String,
    coursefee:String,
});
const Product=mongoose.model("Product",productSchema);
module.exports=Product;