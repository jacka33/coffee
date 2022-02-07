import Link from "next/link";
import { useRouter } from "next/router"

const CoffeeStore = () => {
    const router = useRouter();
    return (
        <div>
            {router.query.id}
            <Link href="/"><a>Back to home</a></Link>
            <Link href="/coffee-store/dynamic"><a>Go to dynamic</a></Link>

        </div>
    )
}

export default CoffeeStore