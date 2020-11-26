import Header from '../template/Header';
import Home from '../pages/Home';
import Plant from '../pages/Plant';
import Error from '../pages/Error';

const routes = {
  '/': Home,
  '/:id': Plant,
  '/contact': 'Contact',
}

const router = async() => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
}

export default router;