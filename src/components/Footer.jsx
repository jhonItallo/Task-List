import './FooterStyle.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='sobre'>
        <h2 >Sobre</h2>
        <p>este é um projeto criado para ajudar você a organizar de maneira <br/>eficiente seus projetos de vida.</p>
        </div>
        <div className='feedback'>
        <h2>Feedback</h2>
        <p>Sugestões ou encontrou algum problema? Contate este email <span>sjhonitallo@gmail.com</span></p>
        </div>
      </footer>
  )
}

export default Footer