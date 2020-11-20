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
    
    <div>
        <h4>{{post.user}}</h4>
        <p>{{post.content}}</p>
        <a href="#" @click="like(post.id)">{{post.likes}} Likes</a>
    </div>
    
    
    `,
    props:['posts','post'],
    methods:{
        like(postID){
            const post=posts.find(post=>post.id == postID);

            post.likes++;
        }
    }
}

new Vue(
    {
        el:"#app",
        components:{
            "post-component":postComponent
        },
        data:{
            posts:posts
        },
        computed:{
            sortedPosts(){
                return posts.sort((a,b)=>{
                    return b.likes -a.likes;
                })
            }
        }
    }
)