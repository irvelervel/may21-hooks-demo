import { useEffect } from "react"

const Unmount = () => {

    // mimicking the componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('bye bye')
        }
    }, [])

    return (
        <h1>COMPONENT TO BE UNMOUNTED</h1>
    )
}

export default Unmount