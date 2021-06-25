import Head from "next/head";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { connectToDatabase } from '../util/mongodb'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import dynamic from "next/dynamic";

const LeafletMapNoSSR = dynamic(() => import("../components/LeafletMap"), {
  ssr: false,
});

export default function ParcelsMap({ parcels }) {
  return (
    <div className="wrapper">
      <Head>
        <title>Landaxe | Parcels</title>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
      </Head>
      <Header />
      <main>
        <LeafletMapNoSSR className="map" />
        <div className="sidebar">
          <ul className="parcel-list">
            {parcels.map(parcel => (
              <li className="parcel-list__item" key={parcel._id}>
                <Row>
                  <Col xs={7}>
                    <h5 className="badges">
                      <Badge variant="secondary">Commercial</Badge>
                    </h5>
                    <h3>{parcel.parcelNumber}</h3>
                    <h5>
                      123 green drive
                      <br />
                      Wooster, OH 44691
                    </h5>
                  </Col>
                  <Col xs={5} style={{ textAlign: "center" }}>
                    <Image src="https://placehold.it/120x120" rounded fluid />
                  </Col>
                </Row>
                <Row style={{ alignItems: "center" }}>
                  <Col xs={7}>
                    <h2 className="m-0">
                      <Badge variant="primary" className="mr-1">
                        {parcel.acreage} acres
                      </Badge>
                    </h2>
                  </Col>
                  <Col xs={5} style={{ textAlign: "center" }}>
                    <h3 className="price m-0">$14,000.00</h3>
                    {/* <Button variant="none">View Parcel Detail</Button> */}
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-flow: column nowrap;
          width: 100vw;
          height: 100vh;
          padding-top: 54px;
        }
        main {
          display: flex;
          flex: 1;
        }
        .map {
          width: 75%;
          flex: 1;
        }
        .sidebar {
          background: #504b43;
          min-width: 420px;
          height: 100vh;
          overflow: hidden;
        }
        .parcel-list {
          height: 100vh;
          overflow: scroll;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .parcel-list__item {
          padding:  1.125rem;
          background: #fff;
        }
        .price {
        }
        .badges > * + * {
          margin-right: 1rem;
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

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const parcels = await db
    .collection('parcels')
    .find({})
    .toArray()

    return {
      props: {
        parcels: JSON.parse(JSON.stringify(parcels))
      }
    }
}