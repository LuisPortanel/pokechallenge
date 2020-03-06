<div>

# Pokemon Challenge

By Luis Portanel, **Sr. Front-end Developer** ([luis@portanel.com](mailto:luis@portanel.com))

This is a proof of concept to show all the knowledge I have on React and all the Frontend Stack in general.

This entire project was created in just **2 hours** (you can check that running `git log`).

## Usage

`yarn install` to install all the dependencies.

`yarn start` to start the App.

## Functionality

### Pokelist

When you navigate to `/pokelist` an initial call is made to the PokéAPI to retrieve the first 30 pokemon.

That result is saved on the `store` along with the `loadMoreUrl` to retrieve the next 30 pokemon. The PokeList component then uses that stored information to render the pokemon and the <span>Load More</span> button.

When the user clicks on <span>Load More</span>, the `loadMoreUrl` is updated, which triggers another fetch for the next 30 pokemon. The result of that call is added to the store and the `loadMoreUrl` is also saved.

Thanks to that, when the component is unmounted and mounted again (by leaving the page), all the pokemon that have been retrieved are rendered again.

### Pokemon by number

When the user click on a pokemon, it navigates to the `/pokemon/:number` page, where the `pokemonNumber` is retrieved from the url.

When the page loads, it looks for the pokemon information on the store, if its not found, it is fetched and then saved to the store.

Then the `Pokemon` component is rendered using the pokemon information on the state and adds animation to the sprite.

## Dependencies

This project was created with Create React App as a base.

Then, lost of dependencies were installed to add awesome functionality like:

*   **React Redux**: To create the store as a single source of truth.
*   **Redux Thunk**: To manage asyncronous dispatch of actions.
*   **Redux DevTools Extension**: To debug the store on the browser.
*   **React Router**: To implement routing and history.
*   **EsLint**: To generate a standarized code.
*   **Flow**: To add static typing.
*   **Axios**: To make reliable calls to PokéAPI.
*   **React Spring**: To implement animations.
*   **Bootstrap**: To quickly add cool styles.

</div>