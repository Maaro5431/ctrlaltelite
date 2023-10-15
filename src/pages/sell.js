import React from "react";
import Link from "next/link";


import { client } from "E:/ecommerce/ctrlaltelite/lib/client";
//import { HeadBanner } from "E:/ecommerce/ctrlaltelite/components";

const Sell = () => (
  <div>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <!---custom css--> */}
        <link rel="stylesheet" type="text/css" href="styles/styles.css" />
        {/* <!---bootsrap css--> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossorigin="anonymous"
        />

        <title>Sell</title>

        {/* <!--email function--> */}
        <script src="https://smtpjs.com/v3/smtp.js"></script>

        <script type="text/javascript">
          {function sendEmail() {
            var name = document.getElementById("sellName").value;
            var surname = document.getElementById("sellSurname").value;
            var emailaddress = document.getElementById("sellerEmail1").value;
            var itemname = document.getElementById("itemName").value;
            var itemdescription =
              document.getElementById("itemDescription").value;
            var itemtypenumber = document.getElementById("selecttype").value;
            var itemsizenumber = document.getElementById("selectsize").value;
            var itemcondition = document.getElementById("itemCondition").value;
            var itemprice = document.getElementById("itemPrice").value;
            var image = document.getElementById("itemImages");
            var url = URL.createObjectURL(image.files[0]);
            var file = image.files[0];
            var filename = file.name;
            var addresses = [emailaddress, "reidebden@gmail.com"];

            // state = {
            //   selectedFile: null,
            // };

            // fileUpload = (e) => {
            //   const reader = new FileReader();
            //   reader.onload = () => {
            //     if (reader.readyState === 2) {
            //       this.setState({ selectedFile: reader.result });
            //     }
            //   };
            //   reader.readAsDataURL(e.target.files[0]);
            // };

            //  combo box
            if (itemtypenumber == 1) {
              var itemtype = "top";
            } else if (itemtypenumber == 2) {
              var itemtype = "pants";
            } else if (itemtypenumber == 3) {
              var itemtype = "shoe";
            }

            if (itemsizenumber == 1) {
              var itemsize = "XXS";
            } else if (itemsizenumber == 2) {
              var itemsize = "XS";
            } else if (itemsizenumber == 3) {
              var itemsize = "S";
            } else if (itemsizenumber == 4) {
              var itemsize = "M";
            } else if (itemsizenumber == 5) {
              var itemsize = "L";
            } else if (itemsizenumber == 6) {
              var itemsize = "XL";
            } else if (itemsizenumber == 7) {
              var itemsize = "XXL";
            }
            //  send email
            var index, len;
            for (index = 0, len = addresses.length; index < len; index++) {
              var email = addresses[index];
              Email.send({
                Host: "smtp.elasticemail.com",
                Username: "reidebden@gmail.com",
                Password: "CB7CD24F4945B4E8DAB2668B5F7B2B87144B",
                To: email,
                From: "reidebden@gmail.com",
                Subject: "listingrequest",
                Body:
                  "new listing. see details below:" +
                  "<br/> customer name: " +
                  name +
                  "<br/> customer surname: " +
                  surname +
                  "<br/> customer email address: " +
                  email +
                  "<br/> item name: " +
                  itemname +
                  "<br/>item price: R" +
                  itemprice +
                  "<br/>itemtype: " +
                  itemtype +
                  "<br/>item size: " +
                  itemsize +
                  "<br/> item condition rating: " +
                  itemcondition +
                  "<br/>item description: " +
                  itemdescription,
                Attachments: [
                  {
                    name: "smtpjs.png",
                    path: "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png",
                  },
                ],
              }).then(function (message) {
                alert("mail sent successfully");
              });
            }
          }}
        </script>
      </head>
      <body>
        <div>
          <div class="section-divider">
            <h4 class="section-divider-text">
              Sell your clothes with us<span class="col-green">!</span>
            </h4>
          </div>
        </div>

        {/* <!---input form---> */}
        <div class="container">
          <form class="row needs-validation" novalidate>
            <div class="col-lg-6 col-md-12">
              {/* <!---first column asks users to upload images--> */}

              <div class="mb-3">
                <label for="itemImages" class="form-label">
                  Upload your images
                </label>
                {/* <img
                  src={selectedFile}
                  alt=""
                  id="img"
                  className="form-control"
                /> */}
                <input
                  class="form-control"
                  type="file"
                  id="itemImages"
                  accept="image/*"
                  multiple
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              {/* <!---2nd column gets the info of the sell and the item for sale--> */}
              <div class="mb-3">
                <label for="sellerName" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="sellName"
                  placeholder="Enter your name"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="mb-3">
                <label for="sellerSurname" class="form-label">
                  Surname
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="sellSurname"
                  placeholder="Enter your surname"
                />
              </div>
              <div class="mb-3">
                <label for="sellEmail" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="sellerEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  please enter a valid email address for us to contact you.
                </div>
              </div>

              <div class="mb-3">
                <label for="itemName" class="form-label">
                  Item name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="itemName"
                  placeholder="Enter the name of the item"
                />
              </div>
              <div class="mb-3">
                <label for="itemDescription" class="form-label">
                  Item description
                </label>
                <textarea
                  class="form-control"
                  id="itemDescription"
                  rows="3"
                ></textarea>
              </div>
              <div class="mb-3">
                <div class="row">
                  <div class="col">
                    <label for="itemType" class="form-label">
                      Item type
                    </label>
                    <select
                      id="selecttype"
                      class="form-select form-select-sm"
                      aria-label="Small select example"
                    >
                      {/* <!-- <option selected>Open this select menu</option> --> */}
                      <option value="1">Top</option>
                      <option value="2">Pants</option>
                      <option value="3">shoe</option>
                    </select>

                    <label for="itemSize" class="form-label">
                      Item size
                    </label>
                    <select
                      id="selectsize"
                      class="form-select form-select-sm"
                      aria-label="Small select example"
                    >
                      {/* <!-- <option selected>Open this select menu</option> --> */}
                      <option value="1">XXS</option>
                      <option value="2">XS</option>
                      <option value="3">S</option>
                      <option value="4">M</option>
                      <option value="5">L</option>
                      <option value="6">XL</option>
                      <option value="7">XXL</option>
                    </select>
                  </div>
                  <div class="col">
                    <label for="itemCondition" class="form-label">
                      Item Condition
                    </label>
                    <input
                      class="form-control"
                      id="itemCondition"
                      type="NUMBER"
                      MIN="0"
                      MAX="5"
                      VALUE="5"
                      SIZE="6"
                    />

                    <label for="itemPrice" class="form-label">
                      Item price
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="itemPrice"
                      placeholder="Price of item"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label>Try our new AI feature.</label>
                <label>
                  This feature will genarate a suggested price range for your
                  item to sell your item quickly and maximise your proffits
                </label>
                <button>genarate price</button>
                <label></label> {/* The modle output should be disaplayed here **************************************************************  */}
              </div>

              <div class="mb-3">
                <form method="post" />
                <button
                  class="btn btn-outline-success b-3"
                  onclick="sendEmail()"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  </div>
);

export default Sell;
