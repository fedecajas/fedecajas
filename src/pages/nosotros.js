import Title from "@elements/Title";
import Limiter from "@containers/Limiter";
import WeAre from "@components/nosotros/WeAre";
import Presentation from "@components/cajas/Presentation";

/* Data */
import { nosotrosInfo, principiosInfo } from "@static/nosotros";

function Nosotros(props) {
    return (
        <Limiter>
            <Presentation title={'Quienes Somos'} subtitle={'Fedecajas'} className={'container__presentation'}/>
            <Title backgroundColor={'#FFF'} title={'Sobre Nosotros'} />
            <WeAre nosotros={nosotrosInfo} />
            <Title backgroundColor={'#FFF'} title={'Principios Orientadores'} />
            <WeAre nosotros={principiosInfo} />
        </Limiter>
    );
}

export default Nosotros;