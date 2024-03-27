import getAnimeFull from '@/lib/functions/getAnimeFull';
import React from 'react'
import MiniCharacterCards from './components/MiniCharacterCards';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface PageProps {
    params: {
        animeID: string
    }
}

const Page: React.FC<PageProps> = async ({ params }) => {
    const animeID: string = params.animeID;
    const anime = await getAnimeFull(animeID);

    return (
        <div
            className='overflow-hidden w-[100vw]'
            style={{
                backgroundImage: `url(${anime.banner})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div
                className='bg-background/80 p-3 w-[100vw] flex flex-col md:flex-row gap-x-2 gap-y-1'
            >
                <div className='w-[100vw] md:w-[18rem] flex flex-col gap-1 justify-start'>
                    <AspectRatio ratio={9 / 16} className="rounded-sm max-w-[16rem] block bg-muted overflow-hidden">
                        <Image
                            src={anime.banner}
                            alt={anime.title}
                            fill
                            className="object-cover block"
                        />
                    </AspectRatio>
                    <div className='text-center'>
                        <p className='font-extrabold'>Aired</p>
                        {anime.airdate}
                    </div>
                    <Button className='w-full rounded-s rounded-e bg-primary/40'>
                        <Link href={anime.malurl} className='w-full text-lg font-semibold'>
                            View on MAL <ExternalLinkIcon className='inline-block w-4 h-4' />
                        </Link>
                    </Button>
                </div>
                <div className='flex-grow flex flex-col justify-between md:h-[calc(100vh-4.5rem)]'>
                    <div>
                        <p className='text-4xl font-semibold text-center'>{anime.title}</p>
                        <p className='text-lg text-gray-500 text-center'>{anime.titleJP}</p>
                        <p className='text-center font-extrabold'>{anime.season.toUpperCase()} {anime.year}</p>
                        <div className='flex flex-wrap justify-center gap-4 text-center'>
                            <Badge className='bg-background/30 flex font-mono flex-col rounded'>
                                <p className='text-lg text-black font-semibold dark:text-white'>Type</p>
                                <p className='text-gray-500 text-base font-normal'>{anime.type}</p>
                            </Badge>
                            <Badge className='bg-background/30 flex font-mono flex-col rounded'>
                                <p className='text-lg text-black font-semibold dark:text-white'>Source</p>
                                <p className='text-gray-500 text-base font-normal'>{anime.source}</p>
                            </Badge>
                            <Badge className='bg-background/30 flex font-mono flex-col rounded'>
                                <p className='text-lg text-black font-semibold dark:text-white'>Episodes</p>
                                <p className='text-gray-500 text-base font-normal'>{anime.episodes}</p>
                            </Badge>
                            <Badge className='bg-background/30 flex font-mono flex-col rounded'>
                                <p className='text-lg text-black font-semibold dark:text-white'>Status</p>
                                <p className='text-gray-500 text-base font-normal'>{anime.status}</p>
                            </Badge>
                            <Badge className='bg-background/30 flex font-mono flex-col rounded'>
                                <p className='text-lg text-black font-semibold dark:text-white'>MAL Score</p>
                                <p className='text-gray-500 text-base font-normal'>{anime.score}</p>
                            </Badge>
                            <Badge className='bg-background/30 flex font-mono flex-col rounded'>
                                <p className='text-lg text-black font-semibold dark:text-white'>Rank</p>
                                <p className='text-gray-500 text-base font-normal'>{anime.rank}</p>
                            </Badge>
                            <Badge className='bg-background/30 flex font-mono flex-col rounded'>
                                <p className='text-lg text-black font-semibold dark:text-white'>Popularity</p>
                                <p className='text-gray-500 text-base font-normal'>{anime.popularity}</p>
                            </Badge>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                {/* <MiniCharacterCards data={anime.characters} title={anime.title} /> */}
            </div>
        </div>
    )
}

export default Page