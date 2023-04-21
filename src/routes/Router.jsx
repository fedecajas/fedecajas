import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Components */
import Header from "@components/globals/Header.jsx";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* <Route exact path='/' element={<Home />} />
                <Route exact path='/proyectos' element={<Proyectos />} />
                <Route exact path='/interiorismo' element={<MyGallery />} />
                <Route exact path='/ideas' element={<Blog />} />
                <Route exact path='/nosotros' element={<Equipo />} />
                <Route exact path='/contacto' element={<Contacto />} />
                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;