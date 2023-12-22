
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Browser, Home, Layout} from "./router";


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Layout>
                                <Home />

                            </Layout>
                        }
                    >
                    </Route>
                    <Route
                    path='/browser'
                    element={
                        <Layout>
                            <Browser/>

                        </Layout>
                    }
                >
                </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
