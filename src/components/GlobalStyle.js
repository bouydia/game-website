import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background: linear-gradient(45deg, #ff0055 0%, #000066 100%);
            border-radius:5px;
        }
    }
    
    body{
        font-family: 'Montserrat' , sans-serif;
    }
    
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.3rem;
    }
    p{
        font-size: 1rem;
        color: #696969;
        line-height: 200%;
    }
    a{
        text-decoration:none;
    }
    input{
            font-weight:bold;
    font-family:inherit;
    }
`

export default GlobalStyle