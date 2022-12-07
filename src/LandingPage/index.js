import './style.css'
import { useState } from 'react'

export default function LandingPage() {

    const lightMode = 'modo-claro'
    const darkMode = 'modo-escuro'

    const [temaEscuro, setTemaEscuro] = useState(true);

    const alterarModo = () => {

        setTemaEscuro(!temaEscuro);

    }

    return (

        <div className={temaEscuro ? lightMode : darkMode}>
            <header>
                <div className='top limitar-secao'>
                    <img src='../assets/barbearia-logo.png' alt='Logo barbearia' className='logo-top'></img>
                    <button onClick={alterarModo} className={temaEscuro ? lightMode : darkMode}><img alt='Icon moon' src={temaEscuro ? `assets/sun.png` : `assets/moon.png`} className='icone'></img><strong>{temaEscuro ? `Light` : `Dark`}</strong></button>
                </div>
            </header>

            <section className='background'>

            </section>

            <section className='container limitar-secao'>
                <div>
                    <h1>Bem-vindo a Barber Shop</h1>
                    <p className='paragrafo1'><strong>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</strong></p>
                    <p className='paragrafo'>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                    <p className='assinatura'>S. Kelly</p>
                </div>
            </section>
        </div>

    );

};