import { createSlice } from '@reduxjs/toolkit'

// const loadPostsFromLocalStorage = ()=>{
//   const savedPosts = localStorage.getItem("posts");
//   return savedPosts ? JSON.parse(savedPosts) : [];
// }

const storedPosts = JSON.parse(localStorage.getItem("posts"));
const initialPost = storedPosts ? storedPosts : [
  {
        id: 1,
        desc: "Love For All, Hatred For None.",
        photo: "assets/post/1.jpeg",
        date: "02/05/20 2.01 pm",
        userId: 1,
        like: 32,
        comment: 9,
      },
      {
        id: 2,
        photo: "assets/post/2.jpeg",
        date: "02/02/2017 10.30 pm",
        userId: 2,
        like: 2,
        comment: 1,
      },
      {
        id: 3,
        desc: "Every moment is a fresh beginning.",
        photo: "assets/post/3.jpeg",
        date: "06/05/2023 11.30 pm",
        userId: 3,
        like: 61,
        comment: 2,
      },
      {
        id: 4,
        photo: "assets/post/4.jpeg",
        date: "02/03/2021 01.27 pm",
        userId: 4,
        like: 7,
        comment: 3,
      }
     
]



const initialState = {
  // userDetails:[
  //   {
  //       userId: "monojitpalit4@gmail.com",
  //       userPassword: "12345",
  //       userFirstName: "Monojit",
  //       userLastName: "Palit",
  //       userDateOfBirth:"2002-02-14"
  //   },
  //   {
  //       userId: "rick4@gmail.com",
  //       userPassword: "12345",
  //       userFirstName: "Rick",
  //       userLastName: "Palit",
  //       userDateOfBirth:"2003-02-14"
  //   }
  // ]
  Users: [
    {
      id: 1,
      profilePicture: "assets/person/1.jpeg",
      username: "Sukanya Das"
    },
    {
      id: 2,
      profilePicture: "assets/person/2.jpeg",
      username: "Sohan Mukherjee"
    },
    {
      id: 3,
      profilePicture: "assets/person/3.jpeg",
      username: "Arik Sen"
    },
    {
      id: 4,
      profilePicture: "assets/person/4.jpeg",
      username: "Sambhu Chaterjee"
    },
    {
      id: 5,
      profilePicture: "assets/person/5.jpeg",
      username: "Sunny Sen"
    },
    {
      id: 6,
      profilePicture: "assets/person/6.jpeg",
      username: "Mohan Dutta"
    },
    {
      id: 7,
      profilePicture: "assets/person/7.jpeg",
      username: "Rounak Maity"
    },
    {
      id: 8,
      profilePicture: "assets/person/8.jpeg",
      username: "Koushik Dutta"
    },
    {
      id: 9,
      profilePicture: "assets/person/9.jpeg",
      username: "Madhuri Sen"
    },
    
  ],
  // Posts:[
  //   {
  //     id: 1,
  //     desc: "Love For All, Hatred For None.",
  //     photo: "assets/post/1.jpeg",
  //     date: "5 mins ago",
  //     userId: 1,
  //     like: 32,
  //     comment: 9,
  //   },
  //   {
  //     id: 2,
  //     photo: "assets/post/2.jpeg",
  //     date: "15 mins ago",
  //     userId: 2,
  //     like: 2,
  //     comment: 1,
  //   },
  //   {
  //     id: 3,
  //     desc: "Every moment is a fresh beginning.",
  //     photo: "assets/post/3.jpeg",
  //     date: "1 hour ago",
  //     userId: 3,
  //     like: 61,
  //     comment: 2,
  //   },
  //   {
  //     id: 4,
  //     photo: "assets/post/4.jpeg",
  //     date: "4 hours ago",
  //     userId: 4,
  //     like: 7,
  //     comment: 3,
  //   },
  //   {
  //     id: 5,
  //     photo: "assets/post/5.jpeg",
  //     date: "5 hours ago",
  //     userId: 5,
  //     like: 23,
  //     comment: 5,
  //   },
  //   {
  //     id: 6,
  //     photo: "assets/post/6.jpeg",
  //     date: "1 day ago",
  //     userId: 6,
  //     like: 44,
  //     comment: 6,
  //   },
  //   {
  //     id: 7,
  //     desc: "Never regret anything that made you smile.",
  //     photo: "assets/post/7.jpeg",
  //     date: "2 days ago",
  //     userId: 7,
  //     like: 52,
  //     comment: 3,
  //   },
  //   {
  //     id: 8,
  //     photo: "assets/post/8.jpeg",
  //     date: "3 days ago",
  //     userId: 8,
  //     like: 15,
  //     comment: 1,
  //   },
  //   {
  //     id: 9,
  //     desc: "Change the world by being yourself.",
  //     photo: "assets/post/9.jpeg",
  //     date: "5 days ago",
  //     userId: 9,
  //     like: 11,
  //     comment: 2,
  //   },
  //   {
  //     id: 10,
  //     photo: "assets/post/10.jpeg",
  //     date: "1 week ago",
  //     userId: 10,
  //     like: 104,
  //     comment: 12,
  //   }
  // ]
  Posts:initialPost,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.userDetails.push(action.payload);
    },
    resetUserPassword: (state, action) => {
      const { userId, newPassword } = action.payload;
      const index = state.userDetails.findIndex(ele => ele.userId === userId);
      if (index !== -1) {
        state.userDetails[index].userPassword = newPassword;
      }
    },

    // addPost: (state, action)=>{
    //   state.Posts.unshift(action.payload);
    // }

    addPost:(state, action)=>{
      state.Posts.unshift(action.payload);
      localStorage.setItem("posts", JSON.stringify(state.Posts));
    },

    deletePost:(state, action)=>{
      const deleteId = action.payload
      state.Posts = state.Posts.filter((ele)=>ele.id!==deleteId);
      localStorage.setItem("posts", JSON.stringify(state.Posts));
    }


  },
})

export const { signUpUser, resetUserPassword, addPost, deletePost } = counterSlice.actions

export default counterSlice.reducer