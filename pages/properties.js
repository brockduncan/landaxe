import Head from "next/head";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { connectToDatabase } from '../util/mongodb'
import faker from 'faker'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import dynamic from "next/dynamic";

const LeafletMapNoSSR = dynamic(() => import("../components/LeafletMap"), {
  ssr: false,
});

const properties = [];

export default function ParcelsMap({ parcels }) {
  return (
    <div className="wrapper">
      <Head>
        <title>Landaxe | Properties</title>
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
        <div className="flex">
        <LeafletMapNoSSR properties={parcels} style={{width: '100vw', height: '100vh'}} />
        {/* <div className="hidden lg:block lg:w-1/3"></div> */}
        </div>
      </main>
      <Footer />
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