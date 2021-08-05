import App from './App.svelte';

// const app = new App({
// 	target: document.body,
// 	props: {
// 	}
// });

// export default app;


const target = document.body

function replaceContents ( node ) {
    node.innerHTML = '';
    return node;
  }
const target1 = document.querySelector( '#model_map' )
new App({ target, props: { } });
