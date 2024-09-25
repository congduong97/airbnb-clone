"use client";

import { Reservation, User } from "@prisma/client";
import Container from "../components/Container";
import Heading from "../components/Heading";

function TripClient({
  reservations,
  currentUser,
}: {
  reservations: Reservation[];
  currentUser: User;
}) {
  return (
    <Container>
      <Heading
        title="Trips"
        subTitle="Where you've been and where you're going"
      />
      <div className=""></div>
    </Container>
  );
}

export default TripClient;
