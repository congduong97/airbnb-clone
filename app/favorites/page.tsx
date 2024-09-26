import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoritesClient from "./FavoritesClient";

async function Favorites() {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();
  if (!listings?.length)
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subTitle="Looks like you have no favorite listings."
        />
      </ClientOnly>
    );
  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
}

export default Favorites;
