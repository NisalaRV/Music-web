import React from "react"
import {Hero, LayOutSidebar, New, Treading} from "../router";

export const Home = () => {
    return (
        <>
            <Hero />
            <LayOutSidebar>
                <Treading />
                <New/>
            </LayOutSidebar>

        </>
    )
}