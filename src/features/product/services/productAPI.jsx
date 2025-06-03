
export async function fetchProductsByIds(ids) {
    const query = ids.map(id => `id=${id}`).join("&");
    const res = await fetch(`http://localhost:3001/products?${query}`);
    return await res.json();
  }
  