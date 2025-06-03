import Header from "../../header/components/header";
import List from "../../product/components/list"

import { useEffect, useState } from 'react';
import { fetchHomeSections } from '../services/homeAPI';


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
                console.error('Erro ao buscar seções:', err);
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
            {/* <List /> */}


            {sections.map(section => (
                <List key={section.id} section={section} />
            ))}
        </>
    );
}

export default Home