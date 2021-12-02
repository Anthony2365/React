import React from "react";
import {FiChevronRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import {Form, Title, Repositories} from './styles';

const Dashboard: React.FC = () => {
    return(
        <>
            <Title>Explore repositórios no GitHub</Title>
            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <Link to="#">
                    <img src="https://avatars.githubusercontent.com/u/83778642?v=4" alt="" />
                    <div>
                        <strong>React</strong>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia illum illo nulla explicabo nobis esse, sint iusto ipsum aspernatur, ea, veritatis itaque libero impedit a quidem! Expedita et illum dicta?</p>
                    </div>
                    <FiChevronRight />
                </Link>
            </Repositories>

            <Repositories>
                <Link to="#">
                    <img src="https://avatars.githubusercontent.com/u/83778642?v=4" alt="" />
                    <div>
                        <strong>React</strong>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia illum illo nulla explicabo nobis esse, sint iusto ipsum aspernatur, ea, veritatis itaque libero impedit a quidem! Expedita et illum dicta?</p>
                    </div>
                    <FiChevronRight />
                </Link>
            </Repositories>

            <Repositories>
                <Link to="#">
                    <img src="https://avatars.githubusercontent.com/u/83778642?v=4" alt="" />
                    <div>
                        <strong>React</strong>
                        <p>Lorem ipsum dolor , sit amet consectetur adipisicing elit. Quia illum illo nulla explicabo nobis esse, sint iusto ipsum aspernatur, ea, veritatis itaque libero impedit a quidem! Expedita et illum dicta?</p>
                    </div>
                    <FiChevronRight />
                </Link>
            </Repositories>

        </>
    );
}

export default Dashboard;