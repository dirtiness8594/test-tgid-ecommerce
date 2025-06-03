/**
 * Fetches homepage sections from the local API.
 *
 * Sends a GET request to `http://localhost:3001/sections` to retrieve
 * dynamic homepage content like featured product sections.
 *
 * @returns {Promise<Object>} Parsed JSON object containing sections data.
 * @throws Will throw an error if the fetch fails or returns an invalid response.
 */
export async function fetchHomeSections() {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/sections`)

        if (!res.ok) {
            throw new Error(`Failed to fetch sections: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        if (!data || typeof data !== "object") {
            throw new Error("Invalid data format received from sections API.");
        }

        return data;
    } catch (error) {
        console.error("Error fetching home sections:", error.message);
        throw error;
    }
}
