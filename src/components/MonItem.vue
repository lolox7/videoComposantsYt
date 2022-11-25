<template>
    <div v-if="showItem==true" @click="hideitem" class="MonItem"> {{name}} </div>
</template>


<script>
export default{
    props: {
        name: {
            default: "un item sans nom"
        }
    },
    data: () => {
        return {
            showItem: true
        }
    },
    methods:{
        hideitem(){
            console.log(("hideItem"));
            this.showItem = false;
        }
    }

}
    </script>


<style>
.MonItem {
    background-color: #fff;
    margin-top: 10px;
    padding: 15px 0;
    transition: 0.2s;
    cursor: pointer;
}
.MonItem:hover {
    background-color: rgb(32, 123, 241);
    color: white;
}

.MonItem:active {
    transition: 0.1s;
    transform:scale(0.8)
}
</style>