import Link from "next/link";
import { useRouter } from "next/router"

import coffeeStoresData from '../../data/coffee-stores.json'

export function getStaticProps({ params }) {

    return {
        props: {
            coffeeStore: coffeeStoresData.find(coffeeStore => {
                return coffeeStore.id.toString() === params.id;
            })
        }
    }
}

export function getStaticPaths() {
    return {
        paths: [
            { params: { id: '0' } },
            { params: { id: '1' } }
        ],
        fallback: true
    }
}

const CoffeeStore = (props) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <div>
            {router.query.id}
            <Link href="/"><a>Back to home</a></Link>
            <Link href="/coffee-store/dynamic"><a>Go to dynamic</a></Link>
            <p>{props.coffeeStore.address}</p>
            <p>{props.coffeeStore.name}</p>

        </div>
    )
}

export default CoffeeStore