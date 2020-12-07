<template>
    <div>
          <h2>{{getGreeting}}</h2>
   <p>This is my HELLO WORLD COMPONENT</p>
    </div>
</template>

<script>
export default{
    name:'MyComponent',
    data(){
        return{
            reversedGreeting:" !dlroW olleH"
        }
    }
}
</script>


<style lang="css" scoped>
h2{
    text-align: center;
}    
</style>