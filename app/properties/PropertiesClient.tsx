"use client";

import { Listing, Reservation, User } from "@prisma/client";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "../components/listing/ListingCard";

function PropertiesClient({
  listing,
  currentUser,
}: {
  listing: Listing[];
  currentUser: User;
}) {
  const router = useRouter();
  const [deleteId, setDeleteId] = useState("");

  const onCancel = useCallback((id: string) => {
    setDeleteId(id);
    axios
      .delete(`/api/listings/${id}`)
      .then(() => {
        toast.success("Listing deleted");
        router.refresh();
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      })
      .finally(() => {
        setDeleteId("");
      });
  }, []);

  return (
    <Container>
      <Heading
        title="Trips"
        subTitle="Where you've been and where you're going"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listing.map((listing) => {
          return (
            <ListingCard
              key={listing.id}
              data={listing}
              actionId={listing.id}
              onAction={onCancel}
              disabled={deleteId === listing.id}
              actionLabel="Delete properties"
              currentUser={currentUser}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default PropertiesClient;
