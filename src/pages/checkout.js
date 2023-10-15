import React from "react";
import Link from "next/link";

import { client } from "E:/ecommerce/ctrlaltelite/lib/client";

const Checkout = () => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="styles/COutstyles.css" />
    </head>

    <body>
      {/* <!-- start of Checkout --> */}
      <div class="container py-3">
        <h1 class="heading-checkout">Checkout</h1>
      </div>

      <hr class="my-4" />

      <div class="container py-5">
        <h4>Billing Address</h4>
        <form novalidate>
          <div class="row">
            <div class="col-sm-6">
              <label for="FirstName" class="form-lavel">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="e.g. Johno"
                id="FirstName"
              />
              <div class="invalid-feedback">Valid first name is required</div>
            </div>
            <div class="col-sm-6">
              <label for="LastName" class="form-lavel">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="e.g. Smothoo"
                id="LastName"
              />
              <div class="invalid-feedback">Valid first name is required</div>
            </div>
            <div class="col-12 py-3">
              <label for="Username" class="form-label">
                Email Address
              </label>
              <div class="input-group">
                <span class="input-group-text"></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="smitho@gmailoo.como"
                  id="Username"
                />
              </div>
              <div class="invalid-feedback">Valid first name is required</div>
            </div>
            <div class="col-md-5 py-3">
              <label for="Country" class="form-label">
                Country
              </label>
              <select class="form-control" id="Country">
                <option value="">Choose...</option>
                <option value="Australia">South Africa</option>
                <option value="Australia">Brazil</option>
                <option value="Australia">China</option>
              </select>
              <div class="invalid-feedback">Valid first name is required</div>
            </div>
            <div class="col-md-4 py-3">
              <label for="Country" class="form-label">
                Province
              </label>
              <select class="form-control" id="State">
                <option value="">Choose...</option>
                <option value="Australia">Limpopo</option>
                <option value="Australia">Gauteng</option>
                <option value="Australia">Mpumalanga</option>
              </select>
              <div class="invalid-feedback">Valid first name is required</div>
            </div>
            <div class="col-md-3 py-3">
              <label for="Zipcode" class="form-label">
                Zipcode
              </label>
              <div class="input-group">
                <span class="input-group-text">@</span>
                <input
                  type="number"
                  class="form-control"
                  placeholder="8399"
                  id="Username"
                />
              </div>
              <div class="invalid-feedback">Valid first name is required</div>
            </div>

            <hr class="my-4" />

            {/* <!-- shipping address and billing --> */}
            <div class="col-12">
              <div class="form-check">
                <input
                  id="sameAdress"
                  type="checkbox"
                  class="form-check-input"
                />
                <label class="form-check-label" for="sameAdress">
                  Shipping address is the same as billing
                </label>
              </div>
              <div class="form-check">
                <input
                  id="sameAdress"
                  type="checkbox"
                  class="form-check-input"
                />
                <label class="form-check-label" for="sameAdress">
                  Save this information for later purchases
                </label>
              </div>
            </div>

            <hr class="my-4" />

            {/* <!-- payment methods --> */}
            <h3 class="mb-3">Payments</h3>
            <div class="form-check">
              <input
                type="radio"
                name="paymentMethod"
                class="form-check-input"
                id="creditCard"
                checked
                required
              />
              <label for="creditCard">Credit Card</label>
            </div>

            <div class="form-check">
              <input
                type="radio"
                name="paymentMethod"
                class="form-check-input"
                id="Debit"
                checked
                required
              />
              <label for="Debit">Debit Card</label>
            </div>

            <div class="form-check">
              <input
                type="radio"
                name="paymentMethod"
                class="form-check-input"
                id="EFT"
                checked
                required
              />
              <label for="EFT">EFT</label>
            </div>

            <div class="form-check">
              <input
                type="radio"
                name="paymentMethod"
                class="form-check-input"
                id="EFT"
                checked
                required
              />
              <label for="EFT">Paypal</label>
            </div>

            <div class="row my-5">
              <div class="col-md-6">
                <label for="fullname" class="form-label">
                  Name on Card
                </label>
                <input type="text" class="form-control" id="fullname" />
                <small class="text-muted">Full name as displayed on Card</small>
                <div class="invalid-feedback">Name on card is required.</div>
              </div>
              <div class="col-md-6">
                <label for="cc-number" class="form-label">
                  Name on Card
                </label>
                <input type="text" class="form-control" id="cc-number" />
                <small class="text-muted">number infront of Card</small>
                <div class="invalid-feedback">
                  Credit card number is required.
                </div>
              </div>
              <div class="col-md-3 py-5">
                <label for="cc-expire" class="form-label">
                  Expiration
                </label>
                <input type="text" class="form-control" id="cc-expire" />
                <div class="invalid-feedback">
                  Accurate expiration is required
                </div>
              </div>
              <div class="col-md-3 py-5">
                <label for="cc-cvv" class="form-label">
                  CVV
                </label>
                <input type="text" class="form-control" id="cc-cvv" />
                <small class="text-muted">3 digit code behind card</small>
                <div class="invalid-feedback">CVV is required</div>
              </div>
            </div>

            <hr />
            <Link href={`/success`}>
           

              <button class="btn btn-primary btn-lg btn-block">
                Continue to Checkout
              </button>
            </Link>
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
);

export default Checkout;
