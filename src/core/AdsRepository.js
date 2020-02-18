import { http } from "./http";

export async function getAdsDetail({ filters }) {
  const { data: ads } = await http.get("/ads", { params: filters });
  const usersPromises = ads.map(ad => http.get(`/users/${ad.userId}`));
  const usersPromiseResponse = await Promise.all(usersPromises);
  const users = usersPromiseResponse.map(userResponse => userResponse.data);
  const composedAds = ads.map(ad => {
    const adUser = users.find(user => user._id === ad.userId);
    return {
      ...ad,
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
    user
  };
}
