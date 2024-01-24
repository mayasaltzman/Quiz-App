import React, { useEffect, useState } from 'react'

function Home() {
    const [options, setOptions] = useState(null);
    const [questionCategory, setQuestionCategory] = useState("");

    useEffect(() => {
        // api with trivia category options
        const apiUrl = `https://opentdb.com/api_category.php`;

        fetch(apiUrl)
            .then((res) => res.json())
            .then((response) => {
                setOptions(response.trivia_categories);
            });
    }, [setOptions]);

    const handleCategoryChange = event => {
        setQuestionCategory(event.target.value)
    }
}

export default Home
