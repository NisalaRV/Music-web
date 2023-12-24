import React from "react"
import { album } from "../assets/data/data"
import { Card_lg } from "../common/Card_lg"

export const Album = () => {
    return (
        <>
            <section className='treading hero mt-8 sm:mt-20'>
                <h1 className='text-5xl font-bold mb-5 text-primary'>Album</h1>
                <div className='grid grid-cols-3 md:grid-cols-5 gap-5 sm:grid-cols-1'>
                    {album.map((item, i) => (
                        <div className='box card hero' key={i}>
                            <Card_lg cover={item.cover} name={item.name} tag={item.tag} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}