import { AnimeCharacters, AnimeGenreProducer, AnimeRelation, FullAnime } from "@/lib/types/fullAnime";
import axios, { AxiosResponse } from "axios";

export default async function getAnimeFull(animeID: string) {
    const anime = await axios.get(`https://api.jikan.moe/v4/anime/${animeID}/full`)
        .then((response: AxiosResponse) => response.data.data)
    const characteresponse = await axios.get(`https://api.jikan.moe/v4/anime/${animeID}/characters`)
        .then((response: AxiosResponse) => response.data.data)


    const characters: AnimeCharacters[] = characteresponse?.map((character: any) => {

        const singleCharacter: AnimeCharacters = {
            id: character.character.mal_id,
            image: character.character.images.webp.image_url,
            name: character.character.name,
            role: character.role,
        };

        return singleCharacter;
    });

    let synopsis: string = anime.synopsis?.replace(/\n\n/g, '') || anime.synopsis;
    synopsis = synopsis?.replaceAll('[Written by MAL Rewrite]', '') || synopsis;
    synopsis = synopsis?.replace(/\"/g, '') || synopsis;

    let genres: AnimeGenreProducer[] = anime.genres?.map((genre: any) => ({
        id: genre.mal_id,
        name: genre.name,
        type: "Genre"
    }));
    anime.explicit_genres?.map((genre: any) => {
        genres.push({
            id: genre.mal_id,
            name: genre.name,
            type: "Explicit Genre"
        });
    });
    anime.themes?.map((genre: any) => {
        genres.push({
            id: genre.mal_id,
            name: genre.name,
            type: "Themes"
        });
    });
    anime.demographics.map((genre: any) => {
        genres.push({
            id: genre.mal_id,
            name: genre.name,
            type: "Demographics"
        });
    });

    let producers: AnimeGenreProducer[] = anime.producers.map((producer: any) => ({
        id: producer.mal_id,
        name: producer.name,
        type: "Producer"
    }));
    anime.licensors.map((producer: any) => {
        producers.push({
            id: producer.mal_id,
            name: producer.name,
            type: "Licensor"
        });
    });
    anime.studios.map((producer: any) => {
        producers.push({
            id: producer.mal_id,
            name: producer.name,
            type: "Studio"
        });
    });

    let relations: AnimeRelation[] = anime.relations.map((relation: any) => ({
        id: relation.entry[0].mal_id,
        relation: relation.relation,
        name: relation.entry[0].name,
        type: relation.entry[0].type
    }))

    const response: FullAnime = {
        id: anime.mal_id,
        malurl: anime.url,
        banner: anime.images.webp.large_image_url,
        title: anime.title_english,
        titleJP: anime.title,
        type: anime.type,
        source: anime.source,
        episodes: anime.episodes,
        status: anime.status,
        airdate: anime.aired.string,
        score: anime.score,
        rank: anime.rank,
        popularity: anime.popularity,
        synopsis: synopsis,
        season: anime.season,
        year: anime.year,
        producers: producers,
        genres: genres,
        relations: relations,
        characters: characters,
    };

    return response;
}