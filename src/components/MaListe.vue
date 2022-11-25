<template class="MaListe">

    <div>ma liste</div>
    <div class="list">
        <MonItem v-for="(item, index) in items" :name="item.name" :key="index"   />
    </div>
</template>

<script>
import MonItem from './MonItem.vue';
export default {
    components: { MonItem } ,
    data:() => {
        return {
            items: [
            {name: "item1"},
            {name: "item2"},
            {name: "item3"},
            {name: "item4"},
            {name: "item5"},
            {name: "item6"},
            ]
        }
    }
}
</script>

<style>
.list{
    max-width: 40%;
    margin: 0 auto;
    background-color: rgb(233, 233, 233);
    padding: 30px;
}
/* .item {
    background-color: #fff;
    margin-top: 10px;
    padding: 15px 0;
    transition: 0.2s;
    cursor: pointer;
}
.item:hover {
    background-color: rgb(32, 123, 241);
    color: white;
}

.item:active {
    transition: 0.1s;
    transform:scale(0.8)
} */
</style>
