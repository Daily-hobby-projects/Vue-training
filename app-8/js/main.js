const posts=[
    {
        id:1,
        name:"Jail in Uganda",
        author:"jeje",
        likes:1,
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam harum laudantium adipisci corporis tenetur possimus voluptates quia repellendus aperiam!"
    },
    {
        id:2,
        name:"The rise of VueJS",
        author:"jannet",
        likes:0,
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam harum laudantium adipisci corporis tenetur possimus voluptates quia repellendus aperiam!"
    },
    {
        id:3,
        name:"Vue is awesome",
        author:"jordan",
        likes:12,
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam harum laudantium adipisci corporis tenetur possimus voluptates quia repellendus aperiam!"
    },
    {
        id:4,
        name:"I am Stressed out",
        author:"jerry",
        likes:3,
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam harum laudantium adipisci corporis tenetur possimus voluptates quia repellendus aperiam!"
    },
    {
        id:5,
        name:"Politics in Uganda",
        author:"jona",
        likes:7,
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam harum laudantium adipisci corporis tenetur possimus voluptates quia repellendus aperiam!"
    },
    {
        id:6,
        name:"Jail in Uganda",
        author:"jonathan",
        likes:13,
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam harum laudantium adipisci corporis tenetur possimus voluptates quia repellendus aperiam!"
    },
]

const postComponent={
    template:`
       <div>
            <h3>{{post.name}}</h3>
            <p>by {{post.author}}</p>
            <p>{{post.content}}</p>
            <a href="#" v-on:click="addLike(post.id)">{{post.likes}} Likes</a>
       </div>
    
    `,
    props:['post','posts']
}

new Vue(
    {
        el:"#app",
        data:{
            posts:posts
        },
        computed:{
            sortedPosts(){
                return this.posts.sort((a,b)=>{
                    return b.likes - a.likes
                })
            }
        },
        methods:{
            addLike(postID){
                let post =this.posts.find(post=> post.id == postID);

                post.likes++;
            }
        },
        components:{
            'post-component':postComponent
        }
    }
)