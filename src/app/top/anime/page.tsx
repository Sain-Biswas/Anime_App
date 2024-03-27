import AnimeCardPreview from "@/components/AnimeCardPreview";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import getTopanime from "@/lib/functions/getTopAnime";
import { AnimeCard } from "@/lib/types/animeCard";


const Page = async (props: any) => {
    const page = Number.parseInt(props.searchParams.page) || 1;
    const { lastpage, hasnext, animeData } = await getTopanime(page);
    return (
        <div className="">
            <div className="text-4xl px-2 my-2 font-semibold">
                Top Anime
            </div>
            <div className="flex flex-wrap gap-4 justify-evenly">
                {
                    animeData.map((anime: AnimeCard) => (
                        <AnimeCardPreview key={anime.id} anime={anime} />
                    ))

                }
            </div>
            <Pagination className="my-8">
                <PaginationContent>
                    {(page > 1) && <PaginationItem>
                        <PaginationPrevious href={`/top/anime?page=${page - 1}`} />
                    </PaginationItem>}
                    {(page > 2) && <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>}
                    {(page > 1) && <PaginationItem>
                        <PaginationLink href={`/top/anime?page=${page - 1}`}>{page - 1}</PaginationLink>
                    </PaginationItem>}
                    <PaginationItem>
                        <PaginationLink href={`/top/anime?page=${page}`} isActive>
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                    {(page < lastpage) && <PaginationItem>
                        <PaginationLink href={`/top/anime?page=${page + 1}`}>{page + 1}</PaginationLink>
                    </PaginationItem>}
                    {(page < lastpage - 1) && <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>}
                    {(page < lastpage) && <PaginationItem>
                        <PaginationNext href={`/top/anime?page=${page + 1}`} />
                    </PaginationItem>}
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default Page