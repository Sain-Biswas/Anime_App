'use client';
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter();
    router.push('/');

    return (
        <div className="">
            redirecting...
        </div>
    )
}

export default Page