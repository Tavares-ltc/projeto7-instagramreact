const storiesContent = [
    { img: "img/9gag.svg", userName: "9gag" },
    { img: "img/meowed.svg", userName: "meowed" },
    { img: "img/barked.svg", userName: "barked" },
    { img: "img/nathanwpylestrangeplanet.svg", userName: "nathanwpylestrangeplanet" },
    { img: "img/wawawicomics.svg", userName: "wawawicomics" },
    { img: "img/respondeai.svg", userName: "respondeai" },
    { img: "img/filomoderna.svg", userName: "filomoderna" },
    { img: "img/memeriagourmet.svg", userName: "emeriagourmet" }]
function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">
                {props.userName}
            </div>
        </div>
    )
}
function Stories() {
    return (
        <div class="stories">
            {storiesContent.map(content => <Story img={content.img} userName={content.userName} />)}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
};

export default Stories