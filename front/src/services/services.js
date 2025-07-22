export async function getTours() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch tours");
  return res.json();
}
export const getUser = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
};
export async function fetchUserProfile(accessToken) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) throw new Error("Failed to fetch user Prfile");

  return res.json();
}
