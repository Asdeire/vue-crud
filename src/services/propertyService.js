const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchProperties = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return data.slice(0, 10).map((item, index) => ({
        id: item.id,
        title: item.title,
        description: item.body,
        location: `Location ${index + 1}`,
        price: (index + 1) * 1000,
    }));
};


export const createProperty = async (newProperty) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newProperty),
    });

    const data = await response.json();

    return {
        ...newProperty,
        id: data.id,
    };
};


export const updateProperty = async (id, property) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(property),
    });
    return response.json();
};

export const deleteProperty = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
