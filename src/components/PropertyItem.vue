<template>
    <tr>
        <td>{{ property.title }}</td>
        <td>{{ property.description }}</td>
        <td>{{ property.location }}</td>
        <td>{{ property.price }}</td>
        <td>
            <button @click="onEdit">Edit</button>
            <button @click="onDelete">Delete</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: "PropertyItem",
    props: {
        property: Object,
    },
    methods: {
        onEdit() {
            const updatedData = {
                title: prompt("Edit Title:", this.property.title),
                description: prompt("Edit Description:", this.property.description),
                location: prompt("Edit Location:", this.property.location),
                price: parseFloat(prompt("Edit Price:", this.property.price)),
            };
            this.$emit("edit", this.property.id, updatedData);
        },
        onDelete() {
            if (confirm("Are you sure you want to delete this property?")) {
                this.$emit("delete", this.property.id);
            }
        },
    },
};
</script>