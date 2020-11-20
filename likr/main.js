const posts=[
    {
        id:1,
        user:"Jona",
        content:"I am too tired. I cant even eat food.",
        likes:0
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
        likes:0
    },  {
        id:5,
        user:"Jerusha",
        content:"I am a good to beat you out so hard.",
        likes:0
    },
]

new Vue(
    {
        el:'#app',
        data:{
            posts:posts
        },
        computed:{
            sortedPosts(){
                return this.posts.sort((a,b)=>{
                    return b.votes - a.votes;
                })
            }
        },
        methods:{
            like(postId){
                const post=posts.find(
                    post=>post.id==postId
                )
                post.likes++;
            }
        }
    }
)