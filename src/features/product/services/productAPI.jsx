/**
 * Fetches product details by an array of product IDs.
 *
 * @param {Array<string|number>} ids - An array of product IDs to fetch.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of product objects.
 *
 * @throws {Error} Throws an error if the fetch request fails or response is invalid.
 *
 * @example
 * const productIds = [1, 2, 3];
 * fetchProductsByIds(productIds)
 *   .then(products => {
 *     console.log(products);
 *   })
 *   .catch(error => {
 *     console.error('Error fetching products:', error);
 *   });
 */

export async function fetchProductsByIds(ids) {
    if (!ids || !ids.length) return [];
  
    const query = ids.map((id) => `id=${encodeURIComponent(id)}`).join("&");
  
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
  
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products?${query}`, {
        signal: controller.signal,
      });
  
      clearTimeout(timeoutId);
  
      if (!res.ok) {
        throw new Error(`Fetch error: ${res.status} ${res.statusText}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch products by IDs:", error);
      return [];
    }
  }
  