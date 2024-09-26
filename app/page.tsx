import getCurrentUser from "./actions/getCurrentUser";
import getListings from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listing/ListingCard";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    userId: string;
  };
}) {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();
  const isEmpty = !listings?.length;
  if (isEmpty)
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((list) => {
            return (
              <ListingCard
                key={list.id}
                data={list}
                currentUser={currentUser}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
}
