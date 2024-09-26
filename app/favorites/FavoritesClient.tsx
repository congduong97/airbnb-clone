import { Listing, User } from "@prisma/client";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listing/ListingCard";

function FavoritesClient({
  listings,
  currentUser,
}: {
  listings: Listing[];
  currentUser: User | null;
}) {
  return (
    <Container>
      <Heading title="Favorites" subTitle="List of places you have favorite!" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => {
          return (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default FavoritesClient;
