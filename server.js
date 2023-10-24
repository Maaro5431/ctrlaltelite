const express = require("express");
const cors = require("cors")
// const path = require("path");
// const bodyParser = require("body-parser");
const predictor = require("./predictor");


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//from the post request, access the form data then respond accodingly
app.post("/api/submit", (req,res) =>{
    console.log(req.body)
    let itemType = req.body.itemType;
    let itemSize = req.body.itemSize;
    let itemCondition = req.body.itemCondition;
    let itemBrand = req.body.itemBrand;

    console.log(itemType);
    console.log(itemSize);
    console.log(itemCondition);
    console.log(itemBrand);

    let predictedPrice;
    let respondMessage; //retuns message with predicted price or with an error message
    switch(itemType){
        case "top":
           predictedPrice= predictor.predictTopPrice([itemSize, itemCondition, itemBrand]);
           predictedPrice = Math.round(predictedPrice / 10)*10;
           respondMessage = `R${predictedPrice}`;
           break;
        case "pants":
            predictedPrice = predictor.predictPantsPrice([itemSize, itemCondition, itemBrand]);
            predictedPrice = Math.round(predictedPrice / 10)*10;
            respondMessage = `R${predictedPrice}`;
            break;
        case "shoe":
            predictedPrice = predictor.predictShoePrice([itemSize, itemCondition, itemBrand]);
            predictedPrice = Math.round(predictedPrice / 10)*10;
            respondMessage = `R${predictedPrice}`;
            break;
        default:
            respondMessage = `Sorry, An error occured. Cannot give predictions for ${itemType}.`;
            break;
        
    }//end of switch statements
    //responde with the predicted price of the item:
    res.json({pricePredicted: `${respondMessage}`});


});


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);

});


