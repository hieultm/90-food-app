import { useEffect, useState } from "react"

function LoadImage(src) {
    const [sourceLoaded, setSourceLoaded] = useState(null)

    useEffect(() => {
        const img = new Image()

        img.src = src;
        img.onload = () => setSourceLoaded(src)

    }, [src])

    return sourceLoaded
}
export default LoadImage