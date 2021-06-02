import React from 'react'



export const LoadingScreen = () => {
    const imgSrc = ['https://picsum.photos/200/350', 'https://picsum.photos/250/300', 'https://picsum.photos/210/300', 'https://picsum.photos/200/310']

    const imgList = imgSrc.map((src, i) => {
        return (
            <div key={i} className={`img-wrap img-wrap_${i}`}>
                <img src={src} alt={`img${i}`} />
            </div >
        )
    })

    return (
        <div className="LoadingScreen">
            {imgList}
        </div >
    )
}
