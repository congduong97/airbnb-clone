import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import getReservations from "../actions/getReservations";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";

async function Properties() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subTitle="Please login" />
      </ClientOnly>
    );
  }

  const listings = await getListings({
    userId: currentUser.id,
  });
  if (!listings?.length) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subTitle="Looks like you have no properties"
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <PropertiesClient listing={listings} currentUser={currentUser} />
    </ClientOnly>
  );
}

export default Properties;
