import { createStore } from "redux";
import { createWrapper, Context, MakeStore } from "next-redux-wrapper";
// import { rootReducer, RootState } from "./path/to/your/rootReducer";
import { actions, reducer } from "./Authentication/auth/auth.slice";
// Создайте функцию для создания Redux store
const makeStore = (context: Context) => createStore(reducer);

// Создайте и экспортируйте обертку для Next.js с помощью функции createWrapper
export const wrapper = createWrapper(makeStore);
