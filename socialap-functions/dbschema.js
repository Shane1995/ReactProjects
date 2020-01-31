let db = {
  users: [
    {
      userId: 'OhSLKmAWoGP9nIaOc0iyTBHoQVt2',
      email: 'newUser@gmail.com',
      handle: 'shane03',
      createdAt: '2019-07-27T10:54:03.170Z',
      imageUrl:
        'http://firebasestorage.googleapis.com/v0/b/socialap-fed87.appspot.com/o/35530885357.jpg?alt=media',
      bio: 'This is my bio',
      website: 'https://www.mywebsite.com',
      location: 'Cape Town, South Africa'
    }
  ],
  screams: [
    {
      userHandle: 'shane03',
      body: 'This is the body of the users comment',
      createdAt: '2019-07-17T13:03:42.442Z',
      likeCount: 5,
      commentCount: 2
    }
  ]
};

const userDetails = {
  //redux data
  credentials: {
    userId: 'OhSLKmAWoGP9nIaOc0iyTBHoQVt2',
    email: 'newUser@gmail.com',
    handle: 'shane03',
    createdAt: '2019-07-27T10:54:03.170Z',
    imageUrl:
      'http://firebasestorage.googleapis.com/v0/b/socialap-fed87.appspot.com/o/35530885357.jpg?alt=media',
    bio: 'This is my bio',
    website: 'https://www.mywebsite.com',
    location: 'Cape Town, South Africa'
  },
  likes: [
    {
      userhandle: 'user',
      screamId: 'hh2399hasjdhsa'
    },
    {
      userhandle: 'user',
      screamId: 'dis2314jkj124342'
    }
  ]
};
