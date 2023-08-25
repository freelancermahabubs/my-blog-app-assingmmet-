export default async function getAllPostCetagory() {
  const res = await fetch(
    "https://basic-blog.teamrabbil.com/api/post-categories"
  );
  if (!res.ok) {
    throw new Error("Error Fetching All Cetagory Posts");
  }
  return res.json();
}
