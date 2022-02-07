import { useRouter } from "next/router"

const CoffeeStore = () => {
    const router = useRouter();
    return (
        <div>
            {router.query.id}
            <a href="/">Back to home</a>
        </div>
    )
}

export default CoffeeStore