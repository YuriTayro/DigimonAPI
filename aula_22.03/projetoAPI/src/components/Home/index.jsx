import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContexts";



const Home = ()=>{

    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div style={{backgroundColor: theme.background, color: theme.text}}>
            <h1>Bem-vindo à API do Digimon</h1>

            <label>
                <input type="checkbox" onChange={toggleTheme}/>
                Mudar tema
            </label>
        </div>
    )
}


export default Home;