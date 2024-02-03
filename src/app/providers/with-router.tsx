import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Spin } from "antd"; // ~ shared/ui/sping
import { Provider } from "react-redux";
import { store } from "entities/post/store";

export const withRouter = (component: () => React.ReactNode) => () => (
    <Provider store={store}>
    <BrowserRouter>
        <Suspense fallback={<Spin delay={300} className="overlay" size="large" />}>
            {component()}
        </Suspense>
    </BrowserRouter>
    </Provider>
);
