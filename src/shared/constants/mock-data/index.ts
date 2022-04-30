import {DISCOVERY_POST_VIDEOS, POST_VIDEO_NAMES} from '..';

const POST_TYPE = {
  MULTIPLE: 'MULTIPLE',
  REELS: 'REELS',
};

export const USER_DATA = [
  {
    id: 0,
    name: 'Blake Swanson',
    profilePhoto:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    postDetail: [
      {
        id: 0,
        asset:
          'https://images.unsplash.com/photo-1558293842-c0fd3db86157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80',
      },
      {
        id: 1,
        asset:
          'https://envato-shoebox-0.imgix.net/ea3b/7e03-5957-4f84-b356-e5c1fa15607b/DSC_8311.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=5112cf383b532e3dab9731fe9da4e26f',
      },
    ],
    likes: 33.678,
    comments: 76,
  },
  {
    id: 1,
    name: 'Ian Dooley',
    profilePhoto:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    postDetail: [
      {
        id: 0,
        isVideo: true,
        asset:
          'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
    ],
    likes: 2.405,
    comments: 6,
  },
  {
    id: 2,
    name: 'Rafaella Mendes Diniz',
    profilePhoto:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    postDetail: [
      {
        id: 0,
        isVideo: true,
        asset:
          'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      },
    ],
    likes: 1.005,
    comments: 12,
  },
  {
    id: 3,
    name: 'Gian Cescon',
    profilePhoto:
      'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
    postDetail: [
      {
        id: 0,
        asset:
          'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      },
      {
        id: 1,
        asset:
          'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80',
      },
    ],
    likes: 768,
    comments: 105,
  },
  {
    id: 4,
    name: 'My Music',
    profilePhoto:
      'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    postDetail: [
      {
        id: 0,
        isVideo: true,
        asset: POST_VIDEO_NAMES.MUSIC,
      },
    ],
    likes: 37,
    comments: 28,
  },
];

export const DISCOVERY_DATA = [
  {
    id: 0,
    name: 'Adriana Merly',
    country: 'America',
    asset:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 1,
    name: 'City Travel',
    country: 'England',
    isVideo: true,
    asset: 'CITY',
  },
  {
    id: 2,
    name: 'Jonny Depp',
    country: 'America',
    type: POST_TYPE.REELS,
    asset:
      'https://images.unsplash.com/photo-1525721653822-f9975a57cd4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2190&q=80',
  },
  {
    id: 3,
    name: 'Tuana Maden',
    country: 'Turkey',
    asset:
      'https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2674&q=80',
  },
  {
    id: 4,
    type: POST_TYPE.REELS,
    name: 'Ben Salt',
    country: 'Sweden',
    asset:
      'https://images.unsplash.com/photo-1622601848423-7236c500a0af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  },
  {
    id: 5,
    name: 'Ben Salt',
    country: 'Sweden',
    asset:
      'https://images.unsplash.com/photo-1594767169572-04fe914b61de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80',
  },
  {
    id: 6,
    name: 'Flowers',
    country: 'Germany',
    isVideo: true,
    asset: 'MUSIC',
  },
  {
    id: 7,
    name: 'Valter Jonn',
    country: 'Germany',
    asset:
      'https://images.unsplash.com/photo-1622602070618-3005cb2f79a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
  },
  {
    id: 8,
    name: 'Phones',
    country: 'America',
    isVideo: true,
    asset: 'PHONE',
  },
  {
    id: 9,
    name: 'Doğa Zengin',
    country: 'Turkey',
    type: POST_TYPE.MULTIPLE,
    asset:
      'https://images.unsplash.com/photo-1533231323158-932d0ccb1afb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  },
  {
    id: 10,
    name: 'Adriana April',
    country: 'America',
    type: POST_TYPE.MULTIPLE,
    asset:
      'https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80',
  },
  {
    id: 11,
    name: 'Berry Berry',
    country: 'Sweden',
    isVideo: true,
    asset: POST_VIDEO_NAMES.SURFING,
  },
  {
    id: 12,
    name: 'Berry Berry',
    country: 'Italy',
    type: POST_TYPE.MULTIPLE,
    asset:
      'https://images.unsplash.com/photo-1464468164664-850fcaf6be4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2648&q=80',
  },
  {
    id: 13,
    name: 'Adem Top',
    country: 'America',
    type: POST_TYPE.REELS,
    asset:
      'https://images.unsplash.com/photo-1514926255734-79b2e9ef2501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  },
  {
    id: 14,
    name: 'Candy RE',
    country: 'America',
    asset:
      'https://images.unsplash.com/photo-1580556065382-d907f4839442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  },
  {
    id: 15,
    name: 'Adem Chiristina',
    country: 'America',
    asset:
      'https://images.unsplash.com/photo-1482849737880-498de71dda8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1294&q=80',
  },
  {
    id: 16,
    name: 'Pawel Czerwinski',
    country: 'Germany',
    isVideo: true,
    asset: 'DOG',
  },
  {
    id: 17,
    name: 'Ryan Spencer',
    country: 'Italy',
    asset:
      'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  },
  {
    id: 18,
    name: 'Jason Stat',
    country: 'England',
    asset:
      'https://images.unsplash.com/photo-1516825295207-81549bdd014c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  },
  {
    id: 19,
    name: 'Adalheida Paul',
    country: 'Germany',
    asset:
      'https://images.unsplash.com/photo-1598644612563-82fbfa1bf2dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1341&q=80',
  },
  {
    id: 20,
    name: 'Carl Boris',
    country: 'Germany',
    asset:
      'https://images.unsplash.com/photo-1615402020061-337a2a5a97ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
  },
];
