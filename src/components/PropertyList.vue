<template>
    <div>
        <PropertyForm @propertyAdded="addProperty" />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="property in properties" :key="property.id">
                    <td>{{ property.id }}</td>
                    <td>{{ property.title }}</td>
                    <td>{{ property.description }}</td>
                    <td>{{ property.location }}</td>
                    <td>{{ property.price }}</td>
                    <td>
                        <button @click="editProperty(property)">Edit</button>
                        <button @click="removeProperty(property.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import PropertyForm from "./PropertyForm.vue";
import { fetchProperties, deleteProperty, updateProperty } from "../services/propertyService";

export default {
    name: "PropertyList",
    components: { PropertyForm },
    data() {
        return {
            properties: [],
        };
    },
    methods: {
        async loadProperties() {
            this.properties = await fetchProperties();
        },
        addProperty(newProperty) {
            console.log("Property added:", newProperty);
            this.properties.push(newProperty);
        },
        async editProperty(property) {
            const updatedData = prompt(
                "Edit Property Title:",
                property.title
            );
            if (updatedData) {
                property.title = updatedData;
                await updateProperty(property.id, property);
            }
        },
        async removeProperty(id) {
            await deleteProperty(id);
            this.properties = this.properties.filter((prop) => prop.id !== id);
        },
    },
    created() {
        this.loadProperties();
    },
};
</script>