'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimeCard } from "@/lib/types/animeCard";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import StarIcon from "@/lib/icons/Star";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Link from "next/link";

interface AnimeCardProps {
    anime: AnimeCard
}

const AnimeCardPreview: React.FC<AnimeCardProps> = ({ anime }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Card className="w-72 border-2">
                        <Link href={`/anime/${anime.id}`}>
                            <CardHeader>
                                <AspectRatio ratio={9 / 16} className="bg-muted rounded-sm overflow-hidden">
                                    <Image
                                        src={anime.banner}
                                        alt={anime.title}
                                        fill
                                        className="object-cover"
                                    />
                                </AspectRatio>
                            </CardHeader>
                            <CardFooter className="justify-between">
                                <div className="flex items-center"> <StarIcon className="" /> <p className="h-6">{anime.score}</p> </div>
                                <Badge className="rounded-sm">{anime.type}</Badge>
                            </CardFooter>
                            <CardHeader className="text-center">
                                <CardTitle>
                                    {anime.title}
                                </CardTitle>
                                <CardDescription>
                                    {anime.titleJP}
                                </CardDescription>
                            </CardHeader>
                        </Link>
                    </Card>
                </TooltipTrigger>
                <TooltipContent className="bg-card border max-w-56 ring-1" side={"right"}>
                    <div className="flex justify-end my-3">
                        <Badge className="rounded-sm">{anime.source}</Badge>
                    </div>
                    <div className="grid grid-cols-3 mb-3">
                        <div className="flex flex-col items-center">
                            <p>Episodes</p>
                            <p>{anime.episodes}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p>Rank</p>
                            <p>{anime.rank}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p>Popularity</p>
                            <p>{anime.popularity}</p>
                        </div>
                    </div>
                    <p>Aired : {anime.season} {anime.year}</p>
                    <p>Status: {anime.status}</p>
                    <ScrollArea className="my-3 h-24">
                        {anime.synopsis}
                    </ScrollArea>
                    <div className="flex justify-evenly gap-1 flex-wrap">
                        {
                            anime.genres.map((genre: string) => (
                                <Badge className="" key={`${genre}-${anime.id}`}>
                                    {genre}
                                </Badge>
                            ))
                        }
                    </div>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default AnimeCardPreview