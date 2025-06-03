/**
 * Home Component
 *
 * Displays the homepage with dynamic product sections.
 * 
 * Features:
 * - Fetches homepage sections from an external API (`fetchHomeSections`)
 * - Displays a loading state while data is being retrieved
 * - Renders the `Header` and multiple `List` components for each section
 *
 * State Management:
 * - `sections`: holds parsed data fetched from the API
 * - `loading`: controls conditional rendering during data fetch
 *
 * Dependencies:
 * - `useEffect` and `useState` for lifecycle and state handling
 * - Custom components: `Header` and `List`
 */


import { useEffect, useState } from "react";
import { fetchHomeSections } from "../services/homeAPI";
import Header from "../../header/components/header";
import List from "../../product/components/list";

function Home() {
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadSections() {
            try {
                const data = await fetchHomeSections();
                const parsed = Object.values(data);
                setSections(parsed);
            } catch (err) {
                console.error("Erro ao buscar seções:", err);
            } finally {
                setLoading(false);
            }
        }

        loadSections();
    }, []);

    if (loading) return <p>Carregando...</p>;

    return (
        <>
            <Header />
            {sections.map((section) => (
                <List key={section.id} section={section} />
            ))}
        </>
    );
}

export default Home;
