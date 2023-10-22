const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    
    const ProductName = req.query.productName;
    const ProductCompany = req.query.productCompany;

    // Create an object with the user data
    const userData = {
        Product_Name: ProductName,
        Product_Company: ProductCompany
    }
    // Respond with JSON
    res.json(userData);
});

module.exports = router;