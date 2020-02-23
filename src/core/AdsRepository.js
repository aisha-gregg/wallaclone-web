import { http } from "./http";

export async function getAdsDetail({ filters }) {
  const parsedFilters = {
    ...filters,
    tags: filters.tags?.join(",") ?? undefined
  };
  const { data: ads } = await http.get("/ads", { params: parsedFilters });
  const usersPromises = ads.map(ad => http.get(`/users/${ad.userId}`));
  const usersPromiseResponse = await Promise.all(usersPromises);
  const users = usersPromiseResponse.map(userResponse => userResponse.data);
  const composedAds = ads.map(ad => {
    const adUser = users.find(user => user._id === ad.userId);
    return {
      ...ad,
      date: new Date(ad.date),
      user: adUser
    };
  });

  return composedAds;
}

export async function getAdDetail(id) {
  const { data: ad } = await http.get(`/ads/${id}`);
  const { data: user } = await http.get(`/users/${ad.userId}`);

  return {
    ...ad,
    date: new Date(ad.date),
    user
  };
}
