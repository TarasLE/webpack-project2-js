import './sass/main.scss';

import Router from './utilites/router';
import startPage from './pages/startPage';

import initScrollToTop from './utilites/scrollToTop';
import initNavigation from './utilites/navigation';
import navigateToTeamPage from './utilites/navigateToTeamPage';

import './utilites/header';
// import './templates/modal_header-search.hbs';
// navigateToTeamPage();
// initNavigation();
// initScrollToTop();

window['router'] = new Router({
  root: '/',
  routes: [
    {
      path: '',
      callback: () => {
        startPage();
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
