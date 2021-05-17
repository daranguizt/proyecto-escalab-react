export const BASE_URL = "https://graphql.anilist.co";
const getNewMangaQuery = `query ($page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (type: MANGA) {
        id,
        title {
          romaji
          english
          native
        },
        coverImage{
            medium
            large
        },
        status,
    description,
    startDate {
      year
      month
      day
    },
    endDate {
      year
      month
      day
    },
    chapters,
    volumes,
    genres,
    popularity
      
      }
    }
  }
`;
const getHotMangaQuery = `query ($page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (type: MANGA) {
        id,
        title {
          romaji
          english
          native
        },
        coverImage{
            medium
            large
        },
        status,
    description,
    startDate {
      year
      month
      day
    },
    endDate {
      year
      month
      day
    },
    chapters,
    volumes,
    genres,
    popularity
      
      }
    }
  }
`;

const getCurrentMangaQuery = `query($id: Int){
  Media(type: MANGA, id: $id){
    id,
    coverImage{
      medium
      large
    },
    title{
      romaji
      english
      native
    },
    status,
    description,
    startDate {
      year
      month
      day
    },
    endDate {
      year
      month
      day
    },
    chapters,
    volumes,
    genres,
    popularity
  
  }
}
`;

export const getNewMangaOptions = (page, perPage) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    query: getNewMangaQuery,
    variables: {
      page,
      perPage,
    },
  }),
});

export const getHotMangaOptions = (page, perPage) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    query: getHotMangaQuery,
    variables: {
      page,
      perPage,
    },
  }),
});

export const getCurrentMangaOptions = (id) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    query: getCurrentMangaQuery,
    variables: {
      id,
    },
  }),
});
