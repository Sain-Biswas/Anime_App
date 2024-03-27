export type AnimeCharacters = {
    id: number,
    image: string,
    name: string,
    role: string
}

export type AnimeGenreProducer = {
    id: number,
    name: string,
    type: string
}

export type AnimeRelation = {
    id: number,
    relation: string,
    name: string,
    type: string
}

export type FullAnime = {
    id: number,
    malurl: string,
    banner: string,
    title: string,
    titleJP: string,
    type: string,
    source: string,
    episodes: number,
    status: string,
    airdate: string,
    score: number,
    rank: number,
    popularity: number,
    synopsis: string,
    season: string,
    year: number,
    producers: AnimeGenreProducer[],
    genres: AnimeGenreProducer[],
    relations: AnimeRelation[],
    characters: AnimeCharacters[]
}