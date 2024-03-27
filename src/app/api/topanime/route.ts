import { AnimeCard } from "@/lib/types/animeCard";
import axios from "axios";
import { NextResponse } from "next/server";


export async function GET() {
    const data = await axios.get('https://api.jikan.moe/v4/top/anime?limit=24')
        .then((res) => res.data);

    const response: AnimeCard[] = data.data.map((anime: any) => {
        let synopsis: string = anime.synopsis.replace(/\n\n/g, '');
        synopsis = synopsis.replaceAll('[Written by MAL Rewrite]', '');
        synopsis = synopsis.replace(/\"/g, '');

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
    })

    return NextResponse.json({ response });
}