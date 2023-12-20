import React from "react"
import {Hero, LayOutSidebar, Treading} from "../router";

export const Home = () => {
    return (
        <>
            <Hero />
            <LayOutSidebar>
                <Treading />
            </LayOutSidebar>

        </>
    )
}