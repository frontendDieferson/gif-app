import React, { useEffect } from "react"
import twitterLogo from "./assets/twitter-logo.svg"
import "./App.css"

// Constants
const TWITTER_HANDLE = "diefpontotsx"
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`

const App = () => {

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;
  
      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet encontrada!");
  
          /*
           * O objeto 'solana' nos fornece uma função que nos permitirá conectar
           * diretamente com a carteira do usuário!
           */
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            "Conectado com a Chave Pública:",
            response.publicKey.toString()
          );
        }
      } else {
        alert("Objeto Solana não encontrado! Instale a Phantom Wallet 👻");
      }
    } catch (error) {
      console.error(error);
    }
  };

  /*
   * Vamos definir esse método para que nosso código não quebre.
   * Vamos escrever a lógica dele em seguida!
   */

  

  /*
   * Quando seu componente 'montar' pela primeira vez, vamos verificar se
   * temos uma Phantom Wallet conectada
   */
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);



  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🖼 Meu Portal de GIF 🖼</p>
          <p className="sub-text">Veja sua coleção de GIF no metaverso ✨</p>
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`feito com ❤️ por @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  )
}

export default App
