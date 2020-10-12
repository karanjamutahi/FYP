<template>
    <ul class="VerticalProgressList">
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name: 'VerticalProgress',
    data: function() {
        return {
            iko: "tu sawa"
        }
    }
}
</script>

<style scoped>
    .children {
        color: red;
    }

    ul.VerticalProgressList {
        list-style: none;
        position: relative;
        padding-left: 20%;
    }

    ul.VerticalProgressList::after {
        content: "";
        position: absolute;
        display: inline-block;
        width: 3px;
        left: 43px;
        top: 30px;
        height: calc(100% - 60px);
        background: linear-gradient(to bottom, #1d976c, #93f9b9);
        z-index: 0;
    }

    li {
        padding: 20px 0;
    }

    li::before {
        content: "";
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;
        background-color: white;
        border: 3px solid #1d976c;
        left: 37px;
        z-index: 3;
    }

    li.active::before {
        background-color: #1d976c;
    }

</style>