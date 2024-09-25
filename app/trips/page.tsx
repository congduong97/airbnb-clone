import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import getReservations from "../actions/getReservations";
import TripClient from "./TripClient";

async function TripPage() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subTitle="Please login" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });
  if (!reservations?.length) {
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found"
          subTitle="Looks like you havent reserved any trips"
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <TripClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
}

export default TripPage;
