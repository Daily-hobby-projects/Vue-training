const submissions = [
    {
        id: 1,
        title: 'Yellow Pail',
        description: 'Code.',
        url: '#',
        votes: 16,
        avatar: '../public/images/avatars/daniel.jpg',
        submissionImage: '../public/images/submissions/image-yellow.png',
    },
    {
        id: 2,
        title: 'Yellow Pail',
        description: 'Pole.',
        url: '#',
        votes: 26,
        avatar: '../public/images/avatars/daniel.jpg',
        submissionImage: '../public/images/submissions/image-yellow.png',
    },  {
        id: 3,
        title: 'Yellow Pail',
        description: 'warehose.',
        url: '#',
        votes: 56,
        avatar: '../public/images/avatars/daniel.jpg',
        submissionImage: '../public/images/submissions/image-yellow.png',
    },  {
        id: 4,
        title: 'Yellow Pail',
        description: 'branch.',
        url: '#',
        votes: 145,
        avatar: '../public/images/avatars/daniel.jpg',
        submissionImage: '../public/images/submissions/image-yellow.png',
    },
]

new Vue(
    {
       el:'#app',
       data:{
           submissions:submissions
       },
       computed:{
           sortedSubmissions(){
               return this.submissions.sort((a,b)=>{
                   return b.votes - a.votes;
               })
           }
       },
       methods:{
           upVote(submissionId){
               const submission=this.submissions.find(
                   submission=>submission.id==submissionId
               );
               submission.votes++;
           }    
       }
    }
)