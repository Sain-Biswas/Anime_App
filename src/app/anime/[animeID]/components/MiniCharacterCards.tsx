import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AnimeCharacters } from "@/lib/types/fullAnime"
import Image from "next/image"


interface MiniCharacterCardsProps {
    data: AnimeCharacters[],
    title: string
}

const MiniCharacterCards: React.FC<MiniCharacterCardsProps> = ({ data, title }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="rounded-sm bg-primary/20">View Characters</Button>
            </DialogTrigger>
            <DialogContent className="w-[80vw]">
                <DialogHeader>
                    <DialogTitle className="text-3xl">Characters</DialogTitle>
                    <DialogDescription>
                        {title}
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="w-full h-[60vh] ">
                    <div className="flex justify-stretch gap-2 flex-wrap pb-2">
                        {
                            data.map((character: AnimeCharacters) => (
                                <Card key={character.id} className="w-36 p-2 text-center block">
                                    <CardHeader className="p-2">
                                        <AspectRatio ratio={9 / 16} className="bg-muted rounded-sm overflow-hidden">
                                            <Image
                                                src={character.image}
                                                alt={character.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </AspectRatio>
                                    </CardHeader>
                                    <CardHeader className="p-2">
                                        <CardTitle>
                                            {character.name}
                                        </CardTitle>
                                        <CardDescription>
                                            {character.role}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            ))
                        }
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}

export default MiniCharacterCards