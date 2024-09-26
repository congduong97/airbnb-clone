import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";

async function Reservations() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subTitle="Please login" />
      </ClientOnly>
    );
  }
  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (!reservations?.length) {
    return (
      <ClientOnly>
        <EmptyState
          title="No reservations found"
          subTitle="Looks lik you have no reservations on your properties"
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}

export default Reservations;
