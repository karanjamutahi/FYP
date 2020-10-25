<template>
    <ul class="VerticalProgressList" v-bind:style="progressGradient">
        <slot></slot>
    </ul>
</template>

<script>

export default {
    name: 'VerticalProgress',
    props: ['progress'],
    data: function() {
        console.log('Progress is at: ' + this.progress * 100 + '%');
        return {
            activeColor: '#fbbc04',
            passiveColor: '#eee',
        }
    },
    computed: {
        progressGradient: function() {
            return {
                '--progress-background': `linear-gradient(180deg, ${this.activeColor} 0%, ${this.activeColor} ${this.currentProgress}%, ${this.passiveColor} ${this.currentProgress+1}%, ${this.passiveColor} 100%)`,
                };
        },
        currentProgress: function() {
            return this.progress * 100
        }
    }
}
</script>

<style scoped>
    .children {
        color: #ffa600;
        font-weight: 600;
    }

    ul.VerticalProgressList {
        list-style: none;
        position: relative;
        padding-left: 20%;
        color: #ffa600;
    }

    ul.VerticalProgressList::after {
        content: "";
        position: absolute;
        display: inline-block;
        width: 3px;
        left: 43px;
        top: 30px;
        height: calc(100% - 60px);
        background: var(--progress-background);
        /*background: linear-gradient(180deg, #fbbc04 0%, #fbbc04 30%, #eee 31%, #eee 100%);*/
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
        background-color:#eee;
        border: 3px solid #eee;
        left: 37px;
        z-index: 3;
    }

    li.active {
        font-size: 3.5em;
    }

    li.active::before {
        background-color: #fbbc04;
        border: 3px solid #fbbc04;
        width: 20px;
        height: 20px;
        left: 35px;
        margin: 20px 0;
    }

    li.active:first-child::before {
        margin: 0px 0px 20px 0px;
    }

    li.active:last-child::before {
        margin-bottom: 0px;
    }

    li.visited::before {
        background-color: #fbbc04;
        border: 3px solid #fbbc04;
    }

</style>