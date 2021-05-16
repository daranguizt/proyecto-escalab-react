export const BASE_URL = "https://graphql.anilist.co";
export const getNewMangaQuery = `query ($page: Int, $perPage: Int) {
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
        },
        coverImage{
            medium
        }
      }
    }
  }
`;

export const getNewMangaVariables = (page, perPage) => {
  return {
    page,
    perPage,
  };
};