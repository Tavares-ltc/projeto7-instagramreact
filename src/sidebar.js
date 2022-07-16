const sideBarContent = {
    userName: "catanacomics", nick: "Catana", profileIMG: "img/catanacomics.svg", suggestion: [
        { userName: "bad.vibes.memes", profileIMG: "img/bad.vibes.memes.svg", reason: "Segue você" },
        { userName: "chibirdart", profileIMG: "img/chibirdart.svg", reason: "Segue você" },
        { userName: "razoesparaacreditar", profileIMG: "img/razoesparaacreditar.svg", reason: "Novo no Instagram" },
        { userName: "adorable_animals", profileIMG: "img/adorable_animals.svg", reason: "Segue você" },
        { userName: "smallcutecats", profileIMG: "img/smallcutecats.svg", reason: "Segue você" }
    ]
}
function CreateUserInfo(props) {
    return (

        <div class="usuario">
        <img src={props.profileIMG} />
        <div class="texto">
            <strong>{props.userName}</strong>
            {props.nick}
        </div>
    </div>
        )
}
function CreateSideBar(props) {
    return (

        
        <div class="sugestao">
        <div class="usuario">
            <img src={props.profileIMG} />
            <div class="texto">
                <div class="nome">{props.userName}</div>
                <div class="razao">{props.reason}</div>
            </div>
        </div>
        <div class="seguir">Seguir</div>
    </div>
        )
}
function SideBar() {
    return (
        <div class="sidebar">

            <CreateUserInfo userName={sideBarContent.userName} nick={sideBarContent.nick} profileIMG={sideBarContent.profileIMG} />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {(sideBarContent.suggestion).map(suggestionContent => <CreateSideBar userName={suggestionContent.userName} profileIMG={suggestionContent.profileIMG} reason={suggestionContent.reason} />)}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

export default SideBar