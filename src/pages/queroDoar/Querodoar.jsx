import iconeLivro from '../../assets/iconeLivro.png'
import s from './querodoar.module.scss'
export default function Querodoar(){
    return(
        <section>
            <section className={s.queroDoarsection}>
                <p>Por favor preencha informações tatata</p>
                <form action="">
                    <div>
                        <img src={iconeLivro} alt="" />
                        <h2>informações do Livro</h2>
                    </div>
                     <input type="text" name='' id=' ' placeholder='Titulo' />
                        <input type="text" name='' id=' ' placeholder='Categoria' />
                        <input type="text" name='' id=' ' placeholder='Autor' />
                        <input type="text" name='' id=' ' placeholder='Link' />
                        <input type="submit" value="Doar" className={s.BotãoDoar}/>
                </form>
            </section>
        </section>
    )
}