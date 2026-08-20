import React, { useEffect, useState } from 'react'
import { toFullUrl } from '../../utils/photo';
import './WhatToSee.scss'
import { Link } from 'react-router';

const RecTitle = {
    ru: "Что посмотреть",
    uk: "Що подивитися",
    de: "Was gibt es zu sehen?"
};

const WhatToSee = ({rec, lang, paths}) => {
    const [recommendations, setRecommendations] = useState([]);
    const storageKey = `recommendations_${paths}`;

    const getRandomRecommendations = (recommendations, limit = 8) => {
    if (!recommendations?.length) {
        return [];
    }

    const shuffled = [...recommendations].sort(
        () => Math.random() - 0.5
    );

    const selected = [];
    const usedTypes = new Set();

    for (const recommendation of shuffled) {
        const availableType = recommendation.types?.find(
            type => !usedTypes.has(type)
        );

        if (availableType) {
            selected.push(recommendation);
            usedTypes.add(availableType);
        }

        if (selected.length === limit) {
            break;
        }
    }

    if (selected.length < limit) {
        for (const recommendation of shuffled) {
            if (!selected.some(item => item.id === recommendation.id)) {
                selected.push(recommendation);
            }

            if (selected.length === limit) {
                break;
            }
        }
    }

    return selected;
};

useEffect(() => {

        if (!rec?.length) { return; }

        const today = new Date().toLocaleDateString('sv-SE');
        const saved = localStorage.getItem(storageKey);

        if (saved) {

            const data = JSON.parse(saved);

            if (data.date === today) {

                const savedRecommendations = data.ids
                    .map(id => rec.find(item => item.id === id))
                    .filter(Boolean);

                if (savedRecommendations.length === data.ids.length) {
                    setRecommendations(savedRecommendations);
                    return;
                }
            }
        }

        const newRecommendations = getRandomRecommendations(rec, 8);

        setRecommendations(newRecommendations);

        localStorage.setItem(
            storageKey,
            JSON.stringify({
                date: today,
                ids: newRecommendations.map(item => item.id)
            })
        );

    }, [rec, storageKey]);

    return (
    <div className="container">
        <h2>{RecTitle[lang]}</h2>

        <div className="cards">
            {recommendations?.map(r => (
                <div className="card" key={r.id}>
                    <div className="card__photo">
                        <img src={toFullUrl(r.photo)} alt={r.name} />
                    </div>

                    <div className="card__name">
                        <Link to={`/${paths}/attractions/${r.path}`}> {r.name}</Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default WhatToSee