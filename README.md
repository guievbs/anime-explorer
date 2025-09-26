# 🎌 Anime Explorer

Uma aplicação **SPA (Single Page Application)** desenvolvida em **React.js** que consome a **Jikan API** para explorar animes.  
O projeto permite pesquisar animes, visualizar detalhes em modais, favoritar e remover títulos, além de buscar animes aleatórios.  
O design é minimalista e moderno, totalmente **responsivo** e com deploy na **Vercel**.

---

## 🚀 Funcionalidades

- 🔍 **Busca de Animes**: pesquisa por título usando a [Jikan API](https://docs.api.jikan.moe/).  
- 🎲 **Anime Aleatório**: botão que retorna um anime aleatório (sem hentais).  
- ⭐ **Favoritos**: adicionar/remover animes da lista de favoritos, armazenados em `context`.  
- ❌ **Exclusão individual** de favoritos.  
- 🖼️ **Cards responsivos e fixos**: largura e altura padronizadas para manter layout consistente.  
- 📑 **Detalhes no Modal**: título, nota, tipo, temporada, estúdios, episódios e classificação indicativa.  
- 🌗 **Tema Claro/Escuro**: toggle entre light/dark mode com **Material UI**.  
- 🏠 **Voltar ao início**: botão Home para resetar a busca.  
- 🚫 **Filtro SFW**: exclui hentais (Rx), mantendo animes +18 sérios (R, R+).  
- 📱 **Design Responsivo**: grid com 1, 2 ou 3 cards por linha (dependendo da tela).  

---

## 🛠️ Tecnologias Utilizadas

- **React.js** (com **Hooks**: `useState`, `useEffect`, `useContext`, `useReducer`)  
- **Material UI (MUI)** → componentes de UI prontos, responsivos e acessíveis  
- **Framer Motion** → animações suaves na renderização dos cards  
- **Vite** → bundler rápido para desenvolvimento React  
- **Jikan API** → dados de animes (open source, baseada no MyAnimeList)  

---

## 📂 Estrutura do Projeto

```
src/
 ├── components/     # Componentes React (Header, Footer, AnimeCard, Modal, etc.)
 ├── contexts/       # Context API + Reducer para estado global
 ├── App.jsx         # Componente principal
 └── main.jsx        # Ponto de entrada
```

---

## ⚙️ Como Rodar Localmente

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/seu-usuario/anime-explorer.git
   cd anime-explorer
   ```

2. **Instalar dependências**
   ```bash
   npm install
   ```

3. **Rodar em ambiente de desenvolvimento**
   ```bash
   npm run dev
   ```

4. Acesse no navegador:
   ```
   http://localhost:5173
   ```

---

## 🌐 Deploy na Vercel
  
  ### [Link do Site](https://gs-anime-explorer.vercel.app/)
   
---

## 📜 Licença

Este projeto é open-source e pode ser usado livremente para estudos e melhorias.  
