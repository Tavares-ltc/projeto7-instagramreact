import React from 'react'
import { useRef } from 'react';

const storiesContent = [
    { img: "img/9gag.svg", userName: "9gag" },
    { img: "img/meowed.svg", userName: "meowed" },
    { img: "img/barked.svg", userName: "barked" },
    { img: "img/nathanwpylestrangeplanet.svg", userName: "nathanwpylestrangeplanet" },
    { img: "img/wawawicomics.svg", userName: "wawawicomics" },
    { img: "img/respondeai.svg", userName: "respondeai" },
    { img: "img/filomoderna.svg", userName: "filomoderna" },
    { img: "img/memeriagourmet.svg", userName: "emeriagourmet" },
    { img: "img/nathanwpylestrangeplanet.svg", userName: "nathanwpylestrangeplanet" },
    { img: "img/wawawicomics.svg", userName: "wawawicomics" },
    { img: "img/respondeai.svg", userName: "respondeai" },
    { img: "img/filomoderna.svg", userName: "filomoderna" },
    { img: "img/memeriagourmet.svg", userName: "emeriagourmet" }
]
function Story(props) {

    return (
        <div class="story">
            <div class="imagem">
                <img class="borda_stories" src="/img/stories_background.jpg"></img>
                <img src={props.img} />
            </div>
            <div class="usuario">
                {props.userName}
            </div>
        </div>
    )
}

function Stories() {

    const scrollElement = useRef(null);


    function scrollLeft(scrollNun) {
      scrollElement.current.scrollLeft += scrollNun;
    };
 
    return (
        <div class="stories_container">
            <div onClick={() => scrollLeft(-50)} class="setinha_esquerda" >
            <ion-icon name="chevron-back-circle"></ion-icon>            </div>
            <div onClick={() => scrollLeft(50)} class="setinha_direita" >
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>  
        <div ref={scrollElement} class="stories">
            {storiesContent.map(content => <Story img={content.img} userName={content.userName} />)}
        </div>
        </div>
    )
};

export default Stories