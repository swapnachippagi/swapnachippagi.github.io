var api = sc2.Initialize({
  app: 'steemkar',
  callbackURL: 'https://swapnachippagi.github.io/index.html',
  scope: ['vote', 'comment']
});

var link = api.getLoginURL(state);
console.log(link)
