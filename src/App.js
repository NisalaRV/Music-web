
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Artist, Artists, Browser, Home, Layout} from "./router";


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
                    <Route
                        path='/artist'
                        element={
                            <Layout>
                                <Artist/>

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
