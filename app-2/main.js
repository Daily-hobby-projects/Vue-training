const posts=[
    {
        id:1,
        user:"Jona",
        content:"I am too tired. I cant even eat food.",
        likes:3
    },
    {
        id:2,
        user:"Jerusha",
        content:"I am a good coder",
        likes:1
    },  {
        id:3,
        user:"Jerry",
        content:"I am a good footballer",
        likes:3
    },  {
        id:4,
        user:"Jannet",
        content:"I am a good developer. I code HTML",
        likes:6
    },  {
        id:5,
        user:"Jerusha",
        content:"I am a good to beat you out so hard.",
        likes:5
    },
]

const postComponent={
    template:`
            <div style="display:flex width:100%"> 
            <h3>{{post.user}}</h3>
            <p class="post-content">
                {{post.content}}
            </p>
            <small>
                {{post.likes}} likes <a href="#" class="like-btn" v-on:click="like(post.id)">Like</a>
            </small>
            </div>
    
    `,
    props:['post','posts']
}
new Vue(
    {
        el:'#app',
        data:{
            posts:posts
        },  
        computed:{
            sortedPosts(){
                return this.posts.sort((a,b)=>{
                    a.likes - b.likes
                });
            }
        },
        methods:{
            like(postId){
                const post=posts.find(
                    post=>post.id==postId
                )
                post.likes++;
            }
        },
        components:{
            "post-component":postComponent
        }
    }
)