import './styles.css';

import Router from './utilites/router';
import MainPage from './pages/mainPage';


import initScrollToTop from './utilites/scrollToTop';
import initNavigation from './utilites/navigation';
import navigateToTeamPage from './utilites/navigateToTeamPage';

// navigateToTeamPage();
// initNavigation();
// initScrollToTop();

window['router'] = new Router({
  root: '/',
  routes: [
    {
      path: '',
      callback: () => {
        MainPage();
      },
    },
  ],
});

/*
window['router'] = new Router({
  root: '/',
  routes: [
    {
      path: /film\/(.*)/,
      callback: () => {
        FilmPage();
      },
    },
    {
      path: 'library/watched',
      callback: () => {
        libraryPageWatched();
      },
    },
    {
      path: 'library/queue',
      callback: () => {
        libraryPageQueue();
      },
    },
    {
      path: 'developers',
      callback: () => {
        teamPage();
      },
    },
    {
      path: '',
      callback: () => {
        MainPage();
      },
    },
  ],
});

*/
