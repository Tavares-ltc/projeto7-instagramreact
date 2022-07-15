const postContent = [{ imgUser: "img/meowed.svg", imgPost: "img/gato-telefone.svg", img_whoLiked: "img/respondeai.svg", whoLiked: "respondeai", likes: "101.523" }, { imgUser: "img/barked.svg", imgPost: "img/dog.svg", img_whoLiked: "img/adorable_animals.svg", whoLiked: "adorable_animals", likes: "99.159" }]
function Post(props) {
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
                <img src={props.imgPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.img_whoLiked} />
                    <div class="texto">
                        Curtido por <strong>{props.whoLiked}</strong> e <strong>outras {props.likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Posts() {
    return (
        <div class="posts">
            {postContent.map(item => (<Post imgUser={item.imgUser} imgPost={item.imgPost} img_whoLiked={item.img_whoLiked} whoLiked={item.img_whoLiked} likes={item.likes} />))}
        </div>
    )
}

export default Posts