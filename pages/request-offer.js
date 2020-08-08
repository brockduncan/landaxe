import Head from "next/head";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";

export default function RequestOffer() {
  const [submitted, setSubmitted] = useState(false);

  const submitForm = (values) => {
    console.log(values);
    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((data) => {
        console.log(data);
        setSubmitted(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="wrapper">
      <Head>
        <title>Landaxe | Request an Offer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Hero title="Request an Offer" />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 px-4 pr-sm-1 pr-lg-5 mb-4 sm-centered">
              <h3>
                Are you looking for potential buyers and offers for your vacant
                land real estate?
              </h3>
              <p>
                We strive to maintain a strong catalog of premium vacant
                residential land and vacant commercial properties.
              </p>
              <p>
                Fill out the short request form and provide just a few details
                for our team to assess your property as thoroughly as possible.
              </p>
              <p>
                If we determine your property to be a good fit for us we'll
                respond with an offer or we may suggest listing your property on
                our private marketplace.
              </p>
            </div>
            <div className="col-xs-12 col-md-5 px-4 pr-sm-1">
              <h6 className="all-caps all-caps--sm">
                Land Purchase Offer Request
              </h6>
              {submitted ? (
                <>
                  <h1>Thank you!</h1>
                  <h5>
                    We will review the property details and provide a formal
                    response as soon as possible.
                  </h5>
                  <p style={{ fontStyle: "italic" }}>
                    Please allow up to 48 hours for a response.
                  </p>
                </>
              ) : (
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    parcelNumber: "",
                    propertyAddress: "",
                    propertyState: "Select a State",
                    propertyZipCode: "",
                    askingPrice: "",
                  }}
                  onSubmit={(values) => submitForm(values)}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="form-row">
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="firstName" className="sr-only">
                              First Name
                            </label>
                            <Field
                              type="text"
                              id="firstName"
                              name="firstName"
                              placeholder="First Name"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="lastName" className="sr-only">
                              Last Name
                            </label>
                            <Field
                              type="text"
                              id="lastName"
                              name="lastName"
                              placeholder="Last Name"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone" className="sr-only">
                          Phone Number
                        </label>
                        <Field
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="123-456-7890"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="sr-only">
                          Email Address
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          placeholder="your@email.com"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="parcelNumber" className="sr-only">
                          Parcel Number
                        </label>
                        <Field
                          type="text"
                          id="parcelNumber"
                          name="parcelNumber"
                          placeholder="Parcel Number"
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="propertyAddress" className="sr-only">
                          Property Address
                        </label>
                        <Field
                          type="text"
                          id="propertyAddress"
                          name="propertyAddress"
                          placeholder="Property Address"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <div className="form-row">
                          <div className="col col-md-8">
                            <label htmlFor="propertyState" className="sr-only">
                              State
                            </label>
                            <Field
                              as="select"
                              id="propertyState"
                              name="propertyState"
                              className="form-control"
                              required
                            >
                              <option disabled default>
                                Select a State
                              </option>
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                              <option value="AR">Arkansas</option>
                              <option value="CA">California</option>
                              <option value="CO">Colorado</option>
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="DC">District Of Columbia</option>
                              <option value="FL">Florida</option>
                              <option value="GA">Georgia</option>
                              <option value="HI">Hawaii</option>
                              <option value="ID">Idaho</option>
                              <option value="IL">Illinois</option>
                              <option value="IN">Indiana</option>
                              <option value="IA">Iowa</option>
                              <option value="KS">Kansas</option>
                              <option value="KY">Kentucky</option>
                              <option value="LA">Louisiana</option>
                              <option value="ME">Maine</option>
                              <option value="MD">Maryland</option>
                              <option value="MA">Massachusetts</option>
                              <option value="MI">Michigan</option>
                              <option value="MN">Minnesota</option>
                              <option value="MS">Mississippi</option>
                              <option value="MO">Missouri</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NV">Nevada</option>
                              <option value="NH">New Hampshire</option>
                              <option value="NJ">New Jersey</option>
                              <option value="NM">New Mexico</option>
                              <option value="NY">New York</option>
                              <option value="NC">North Carolina</option>
                              <option value="ND">North Dakota</option>
                              <option value="OH">Ohio</option>
                              <option value="OK">Oklahoma</option>
                              <option value="OR">Oregon</option>
                              <option value="PA">Pennsylvania</option>
                              <option value="RI">Rhode Island</option>
                              <option value="SC">South Carolina</option>
                              <option value="SD">South Dakota</option>
                              <option value="TN">Tennessee</option>
                              <option value="TX">Texas</option>
                              <option value="UT">Utah</option>
                              <option value="VT">Vermont</option>
                              <option value="VA">Virginia</option>
                              <option value="WA">Washington</option>
                              <option value="WV">West Virginia</option>
                              <option value="WI">Wisconsin</option>
                              <option value="WY">Wyoming</option>
                            </Field>
                          </div>
                          <div className="col col-md-4">
                            <label
                              htmlFor="propertyZipCode"
                              className="sr-only"
                            >
                              Property Zip Code
                            </label>
                            <Field
                              type="number"
                              id="propertyZipCode"
                              name="propertyZipCode"
                              placeholder="Zip Code"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="propertyDetails" className="sr-only">
                          Additional Property Details
                        </label>
                        <Field
                          as="textarea"
                          id="propertyDetails"
                          name="propertyDetails"
                          placeholder="Additional Property Details"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="askingPrice" className="sr-only">
                          Asking Price
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <Field
                            type="number"
                            id="askingPrice"
                            name="askingPrice"
                            placeholder="Asking Price"
                            className="form-control"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">.00</span>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        {isSubmitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            <span className="sr-only">Loading...</span>{" "}
                          </>
                        ) : (
                          ""
                        )}
                        Submit Request
                      </button>
                    </Form>
                  )}
                </Formik>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-flow: column nowrap;
          width: 100vw;
          height: 100vh;
          padding-top: 48px;
        }
        main {
          display: flex;
          flex: 1;
        }
        @media screen and (max-width: 767px) {
          .sm-centered {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
