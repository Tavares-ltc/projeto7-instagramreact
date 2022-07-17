import React from 'react'

const postContent = [
    { imgUser: "img/meowed.svg", imgPost: "img/gato-telefone.svg", img_whoLiked: "img/respondeai.svg", whoLiked: "respondeai", likes: "101.523" },
    { imgUser: "img/barked.svg", imgPost: "img/dog.svg", img_whoLiked: "img/adorable_animals.svg", whoLiked: "adorable_animals", likes: "99.159" },
]
    function Post(props) {

    const [iconName, setIconName] = React.useState("heart-outline");
    const [iconColor, setIconColor] = React.useState("heart-outline");
    const [userLike, setUserLike] = React.useState(0);
    const [heartAnimation, setHeartAnimation] = React.useState("md hydrated heartAnimation")

    function likeThePost() {
        if (iconName === "heart") {
            setIconName("heart-outline");
            setIconColor("md hydrated");
            setUserLike(0);
        }
        else {
            setIconName("heart");
            setIconColor("md hydrated paintedRed");
            setUserLike(1);
            animation()
        }
    }
    function animation() {
        setHeartAnimation("md hydrated heartAnimation transform")
        setInterval(() => {
             setHeartAnimation("md hydrated heartAnimation")
        }, 1000);
    }
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUser} />
                    meowed
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <div class="imgPost">
                <img onDoubleClick={likeThePost} src={props.imgPost} />
                <ion-icon class={heartAnimation} name="heart"></ion-icon>
                </div>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={iconColor} onClick={likeThePost} name={iconName}></ion-icon>
                        <ion-icon name="chatbubble-outline" ></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.img_whoLiked} />
                    <div class="texto">
                        Curtido por <strong>{props.whoLiked}</strong> e <strong>outras {props.likes + userLike} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Posts() {
    return (
        <div class="posts">
            {postContent.map(item => (<Post imgUser={item.imgUser} imgPost={item.imgPost} img_whoLiked={item.img_whoLiked} whoLiked={item.whoLiked} likes={item.likes} />))}
        </div>
    )
}

export default Posts