
Feature('Welcome');

Scenario('Visit the home page', ({ I }) => {
  I.amOnPage('/');

  I.see('Home');
});

Scenario('Add a new post', ({ I }) => {
  I.amOnPage('/');

  I.dontSee('What time is it?');
});