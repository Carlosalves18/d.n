import './form.css'

const Form = () =>{
    return(
        <div>
            <form action="">
                <label htmlFor="email"></label>
                <input type="email" name='email' id='' />
                <label htmlFor="senha">Senha</label>
                <input type="password" name='senha' id='' />
                <input type="submit" value='Envia'/>
            </form>
        </div>
    )
}
export default Form
