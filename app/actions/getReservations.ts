export default async function getReservations(params: {
  listingId?: string;
  userId?: string;
  authorId?: string;
}) {
  try {
    const { listingId, userId, authorId } = params;

    const query: any = {};
    if (listingId) {
      query.listingId = listingId;
    }
    if (userId) {
      query.userId = userId;
    }
    if (authorId) {
      query.authorId = { userId: authorId };
    }
    const reservations = await prisma?.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createAt: "desc",
      },
    });
    return reservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
