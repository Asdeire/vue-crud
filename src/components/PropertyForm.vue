<template>
    <div class="property-form">
        <h3>Create New Property</h3>
        <form @submit.prevent="handleSubmit">
            <input v-model="title" placeholder="Title" required />
            <textarea v-model="description" placeholder="Description" required></textarea>
            <input v-model="location" placeholder="Location" required />
            <input v-model.number="price" placeholder="Price" required type="number" />
            <button type="submit">Add Property</button>
        </form>
    </div>
</template>

<script>
import { createProperty } from "../services/propertyService";

export default {
    name: "PropertyForm",
    data() {
        return {
            title: "",
            description: "",
            location: "",
            price: null,
        };
    },
    methods: {
        async handleSubmit() {
            console.log("Submitting form...");

            const newProperty = {
                title: this.title,
                description: this.description,
                location: this.location,
                price: this.price,
            };

            try {
                const createdProperty = await createProperty(newProperty);
                console.log("Property created:", createdProperty);
                this.$emit("propertyAdded", createdProperty);
                this.title = this.description = this.location = "";
                this.price = null;
            } catch (error) {
                console.error("Error creating property:", error);
            }
        },
    },

};
</script>
