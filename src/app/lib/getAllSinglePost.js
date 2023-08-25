export default async function getAllSinglePost(id) {
  const res = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-newest${id}`
  );
  if (!res.ok) {
    throw new Error("Error Fetching Posts");
  }
  return res.json();
}
