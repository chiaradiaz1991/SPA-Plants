
const resolveRoutes = (route)=> {
  if (route.length < 9) {
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }
  return `/${route}`; //about
};

export default resolveRoutes;