import Head from "next/head";
import { Formik, Form, Field } from "formik";

import Header from "../components/header";
import Footer from "../components/footer";

export default function RequestOffer() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-7">
              <h1>Request a Land Purchase Offer</h1>
              <p>
                Commodo deserunt occaecat adipisicing irure esse mollit ut
                deserunt amet exercitation sunt mollit culpa. Ea dolore id eu
                dolor irure sit. Cupidatat ut velit culpa deserunt minim irure
                sit.
              </p>
              <p>
                Ut excepteur dolor in magna in dolore esse voluptate id proident
                voluptate culpa nisi quis. Dolore pariatur fugiat qui proident
                occaecat consectetur deserunt irure ad. Aliqua exercitation
                fugiat proident enim labore. Adipisicing aliquip magna occaecat
                nostrud.
              </p>
              <p>
                In dolor eu tempor enim minim nulla velit. Tempor ipsum qui
                labore nulla occaecat non tempor aliquip adipisicing. Voluptate
                pariatur eu proident labore reprehenderit proident qui
                exercitation laboris. Adipisicing consequat officia in ea et
                sunt aliquip.
              </p>
            </div>
            <div className="col-xs-12 col-md-5">
              <h2>Offer Request Form</h2>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  phone: "",
                  email: "",
                  state: "State",
                }}
              >
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
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    <Field
                      type="phone"
                      id="phone"
                      name="phone"
                      placeholder="123-456-7890"
                      className="form-control"
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
                    />
                  </div>
                  <div className="form-group">
                    <div class="form-row">
                      <div className="col col-md-8">
                        <label htmlFor="propertyState" className="sr-only">
                          State
                        </label>
                        <Field
                          as="select"
                          id="propertyState"
                          className="form-control"
                        >
                          <option>Ohio</option>
                        </Field>
                      </div>
                      <div class="col col-md-4">
                        <label htmlFor="propertyZipCode" className="sr-only">
                          Property Zip Code
                        </label>
                        <Field
                          type="text"
                          id="propertyZipCode"
                          name="propertyZipCode"
                          placeholder="Zip Code"
                          className="form-control"
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
                    Submit Request
                  </button>
                </Form>
              </Formik>
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
        }
        main {
          height: 100%;
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
