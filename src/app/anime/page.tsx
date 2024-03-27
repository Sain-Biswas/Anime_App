'use client';
import { useRouter } from "next/navigation"
import { useEffect } from "react";

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/');
    }, []);

    return (
        <div className="">
            redirecting...
        </div>
    )
}

export default Page