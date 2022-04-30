const POST_TYPE = {
  MULTIPLE: 'MULTIPLE',
  REELS: 'REELS',
};

export const USER_DATA = [
  {
    id: 0,
    name: 'Blake Swanson',
    profilePhoto: {
      uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    postDetail: [
      {
        id: 0,
        asset: {
          uri: 'https://images.unsplash.com/photo-1558293842-c0fd3db86157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80',
        },
      },
      {
        id: 1,
        asset: {
          uri: 'https://envato-shoebox-0.imgix.net/ea3b/7e03-5957-4f84-b356-e5c1fa15607b/DSC_8311.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=5112cf383b532e3dab9731fe9da4e26f',
        },
      },
      {
        id: 2,
        isVideo: true,
        asset: {
          uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        },
      },
      {
        id: 3,
        isVideo: true,
        asset: {
          uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        },
      },
    ],
    likes: 33.678,
    comments: 76,
  },
  {
    id: 0,
    name: 'Blake Swanson',
    profilePhoto: {
      uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    postDetail: [
      {
        id: 0,
        asset: {
          uri: 'https://images.unsplash.com/photo-1558293842-c0fd3db86157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80',
        },
      },
      {
        id: 1,
        asset: {
          uri: 'https://envato-shoebox-0.imgix.net/ea3b/7e03-5957-4f84-b356-e5c1fa15607b/DSC_8311.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=5112cf383b532e3dab9731fe9da4e26f',
        },
      },
      {
        id: 2,
        isVideo: true,
        asset: {
          uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        },
      },
      {
        id: 3,
        isVideo: true,
        asset: {
          uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        },
      },
    ],
    likes: 33.678,
    comments: 76,
  },
];

export const DISCOVERY_DATA = [
  {
    id: 0,
    name: 'Adrina Merly',
    country: 'America',
    asset: {
      uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  },
  {
    id: 1,
    name: 'Jason Stat',
    country: 'England',
    asset: {
      uri: 'https://images.unsplash.com/photo-1516825295207-81549bdd014c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
  },
  {
    id: 2,
    name: 'Jonny Depp',
    country: 'America',
    type: POST_TYPE.REELS,
    asset: {
      uri: 'https://images.unsplash.com/photo-1525721653822-f9975a57cd4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2190&q=80',
    },
  },
  {
    id: 3,
    name: 'Tuana Maden',
    country: 'Turkey',
    asset: {
      uri: 'https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2674&q=80',
    },
  },
  {
    id: 4,
    type: POST_TYPE.REELS,
    name: 'Ben Salt',
    country: 'Sweden',
    asset: {
      uri: 'https://images.unsplash.com/photo-1622601848423-7236c500a0af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
  },
  {
    id: 5,
    name: 'Ben Salt',
    country: 'Sweden',
    asset: {
      uri: 'https://images.unsplash.com/photo-1594767169572-04fe914b61de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80',
    },
  },
  {
    id: 6,
    name: 'Adalheida Paul',
    country: 'Germany',
    asset: {
      uri: 'https://images.unsplash.com/photo-1598644612563-82fbfa1bf2dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1341&q=80',
    },
  },
  {
    id: 7,
    name: 'Valter Jonn',
    country: 'Germany',
    asset: {
      uri: 'https://images.unsplash.com/photo-1622602070618-3005cb2f79a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  },
  {
    id: 8,
    name: 'Carl Boris',
    country: 'Germany',
    asset: {
      uri: 'https://images.unsplash.com/photo-1615402020061-337a2a5a97ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },
  },
  {
    id: 9,
    name: 'Doğa Zengin',
    country: 'Turkey',
    type: POST_TYPE.MULTIPLE,
    asset: {
      uri: 'https://images.unsplash.com/photo-1533231323158-932d0ccb1afb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
  },
  {
    id: 10,
    name: 'Adriana April',
    country: 'America',
    type: POST_TYPE.MULTIPLE,
    asset: {
      uri: 'https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80',
    },
  },
  {
    id: 11,
    name: 'Berry Berry',
    country: 'Sweden',
    asset: {
      uri: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80',
    },
  },
  {
    id: 12,
    name: 'Berry Berry',
    country: 'Italy',
    type: POST_TYPE.MULTIPLE,
    asset: {
      uri: 'https://images.unsplash.com/photo-1464468164664-850fcaf6be4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2648&q=80',
    },
  },
  {
    id: 13,
    name: 'Adem Top',
    country: 'America',
    type: POST_TYPE.REELS,
    asset: {
      uri: 'https://images.unsplash.com/photo-1514926255734-79b2e9ef2501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    },
  },
  {
    id: 14,
    name: 'Candy RE',
    country: 'America',
    asset: {
      uri: 'https://images.unsplash.com/photo-1580556065382-d907f4839442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    },
  },
  {
    id: 15,
    name: 'Adem Chiristina',
    country: 'America',
    asset: {
      uri: 'https://images.unsplash.com/photo-1482849737880-498de71dda8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1294&q=80',
    },
  },
  {
    id: 16,
    name: 'Pawel Czerwinski',
    country: 'Germany',
    asset: {
      uri: 'https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  },
  {
    id: 17,
    name: 'Ryan Spencer',
    country: 'Italy',
    asset: {
      uri: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    },
  },
];
