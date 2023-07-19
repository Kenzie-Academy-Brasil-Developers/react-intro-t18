export const NewsletterForm = () => {
    return(
        <form className="form">
            <input type="email" name="email" id="email" placeholder="E-mail" />
            <button type="submit" className="btn">Cadastrar-se</button>
        </form>
    )
}