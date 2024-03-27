import { AnimeCard } from "@/lib/types/animeCard";
import axios from "axios";


export default async function getTopanime(page = 1) {
    const data = await axios.get(`https://api.jikan.moe/v4/top/anime?limit=24&page=${page}`)
        .then((res) => res.data);

    const animeData: AnimeCard[] = data.data.map((anime: any) => {
        let synopsis: string = anime.synopsis?.replace(/\n\n/g, '') || anime.synopsis;
        synopsis = synopsis?.replaceAll('[Written by MAL Rewrite]', '') || synopsis;
        synopsis = synopsis?.replace(/\"/g, '') || synopsis;

        let genres: string[] = anime.genres.map((genre: any) => genre.name);
        anime.explicit_genres.map((genre: any) => {
            genres.push(genre.name);
        });
        anime.themes.map((genre: any) => {
            genres.push(genre.name);
        });
        anime.demographics.map((genre: any) => {
            genres.push(genre.name);
        });


        let singleData: AnimeCard = {
            id: anime.mal_id,
            banner: anime.images.webp.large_image_url,
            mal_link: anime.url,
            title: anime.title_english,
            titleJP: anime.title,
            type: anime.type,
            source: anime.source,
            episodes: anime.episodes,
            status: anime.status,
            score: anime.score,
            rank: anime.rank,
            popularity: anime.popularity,
            synopsis: synopsis,
            season: anime.season,
            year: anime.year,
            genres: genres,
        };

        return singleData;
    });

    const lastpage: number = data.pagination.last_visible_page;
    const hasnext: boolean = data.pagination.has_next_page;

    return { lastpage, hasnext, animeData };
}