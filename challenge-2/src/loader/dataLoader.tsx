export class DataLoader {
    public loadFile() : Data {
        return data;
    }
} 

export type Data = {
    currentUser :User,
    comments: Comment[]
}

export type User = {
    image:UserImage,
    username:string
}

export type UserImage = {
    png:string,
    webp:string
}

export type CommentBase = {
    id:number,
    content:string,
    createdAt:string,
    score:number
    user : User,
}

export type Comment = CommentBase & {
    replies : Reply[],
}

export type Reply = CommentBase & {
    replyingTo:string
}

const data : Data = {
  "currentUser": {
    "image": { 
      "png": "./img/avatars/image-juliusomo.png",
      "webp": "./img/avatars/image-juliusomo.webp"
    },
    "username": "juliusomo"
  },
  "comments": [
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "1 month ago",
      "score": 12,
      "user": {
        "image": { 
          "png": "./img/avatars/image-amyrobson.png",
          "webp": "./img/avatars/image-amyrobson.webp"
        },
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "2 weeks ago",
      "score": 5,
      "user": {
        "image": { 
          "png": "./img/avatars/image-maxblagun.png",
          "webp": "./img/avatars/image-maxblagun.webp"
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "1 week ago",
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": { 
              "png": "./img/avatars/image-ramsesmiron.png",
              "webp": "./img/avatars/image-ramsesmiron.webp"
            },
            "username": "ramsesmiron"
          }
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "2 days ago",
          "score": 2,
          "replyingTo": "ramsesmiron",
          "user": {
            "image": { 
              "png": "./img/avatars/image-juliusomo.png",
              "webp": "./img/avatars/image-juliusomo.webp"
            },
            "username": "juliusomo"
          }
        }
      ]
    }
  ]
}