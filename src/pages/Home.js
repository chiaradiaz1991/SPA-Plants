
import getData from '../utils/getData';

const Home = async () => {
  const character = await getData();
  const view = `
  <div class="characters">
  ${character.results.map((el)=> `
    <article class="characters-item">
      <a href="#/${el.id}/">
        <img src=${el.image} alt="">
        <h2>${el.name}</h2>
      </a>
    </article>
  `).join('')}
  </div>`;

  return view;
};

export default Home;
