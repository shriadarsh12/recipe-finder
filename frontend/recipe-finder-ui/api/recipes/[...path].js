export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const url = new URL(req.url, "http://localhost");
  const parts = url.pathname.split("/").filter(Boolean).slice(2);
  const route = parts[0];
  const base = "https://www.themealdb.com/api/json/v1/1";

  try {
    let endpoint;

    if (route === "categories") {
      endpoint = `${base}/categories.php`;
    } else if (route === "search") {
      const query = url.searchParams.get("query") || "";
      endpoint = `${base}/search.php?s=${encodeURIComponent(query)}`;
    } else if (route === "details" && parts[1]) {
      endpoint = `${base}/lookup.php?i=${encodeURIComponent(parts[1])}`;
    } else if (route === "category" && parts[1]) {
      endpoint = `${base}/filter.php?c=${encodeURIComponent(parts[1])}`;
    } else if (route === "random") {
      endpoint = `${base}/random.php`;
    } else {
      return res.status(404).json({ error: "Recipe endpoint not found" });
    }

    const response = await fetch(endpoint);

    if (!response.ok) {
      return res.status(502).json({ error: "Recipe provider failed" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Recipe API error:", error);
    return res.status(500).json({ error: "Unable to load recipes" });
  }
}