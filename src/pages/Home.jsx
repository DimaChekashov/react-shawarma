import React from 'react';
import productImg from "../assets/img/product-img-shawarma.png";

import {Categories, SortPopup} from '../components';

function Home() {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={(name) => console.log(name)}
                    items={[
                        "Мясные",
                        "Вегетарианская",
                        "Гриль",
                        "Острые",
                        "Закрытые",
                    ]}
                />
                <SortPopup items={['популярности', 'цене', 'алфавиту']} />
            </div>
            <h2 className="content__title">Вся шаурма</h2>
            <div className="content__items">
                <div className="shawarma-block">
                    <img
                        className="shawarma-block__image"
                        src={productImg}
                        alt="Shawarma"
                    />
                    <h4 className="shawarma-block__title">
                        Куриная-шаурма
                    </h4>
                    <div className="shawarma-block__selector">
                        <ul>
                            <li className="active">обычная</li>
                            <li>острая</li>
                        </ul>
                        <ul>
                            <li className="active">мал.</li>
                            <li>сред.</li>
                            <li>бол.</li>
                        </ul>
                    </div>
                    <div className="shawarma-block__bottom">
                        <div className="shawarma-block__price">
                            от 80 ₽
                        </div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>{" "}
                <div className="shawarma-block">
                    <img
                        className="shawarma-block__image"
                        src={productImg}
                        alt="Shawarma"
                    />
                    <h4 className="shawarma-block__title">
                        Куриная-шаурма
                    </h4>
                    <div className="shawarma-block__selector">
                        <ul>
                            <li className="active">обычная</li>
                            <li>острая</li>
                        </ul>
                        <ul>
                            <li className="active">мал.</li>
                            <li>сред.</li>
                            <li>бол.</li>
                        </ul>
                    </div>
                    <div className="shawarma-block__bottom">
                        <div className="shawarma-block__price">
                            от 80 ₽
                        </div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>{" "}
                <div className="shawarma-block">
                    <img
                        className="shawarma-block__image"
                        src={productImg}
                        alt="Shawarma"
                    />
                    <h4 className="shawarma-block__title">
                        Куриная-шаурма
                    </h4>
                    <div className="shawarma-block__selector">
                        <ul>
                            <li className="active">обычная</li>
                            <li>острая</li>
                        </ul>
                        <ul>
                            <li className="active">мал.</li>
                            <li>сред.</li>
                            <li>бол.</li>
                        </ul>
                    </div>
                    <div className="shawarma-block__bottom">
                        <div className="shawarma-block__price">
                            от 80 ₽
                        </div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>{" "}
                <div className="shawarma-block">
                    <img
                        className="shawarma-block__image"
                        src={productImg}
                        alt="Shawarma"
                    />
                    <h4 className="shawarma-block__title">
                        Куриная-шаурма
                    </h4>
                    <div className="shawarma-block__selector">
                        <ul>
                            <li className="active">обычная</li>
                            <li>острая</li>
                        </ul>
                        <ul>
                            <li className="active">мал.</li>
                            <li>сред.</li>
                            <li>бол.</li>
                        </ul>
                    </div>
                    <div className="shawarma-block__bottom">
                        <div className="shawarma-block__price">
                            от 80 ₽
                        </div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>{" "}
                <div className="shawarma-block">
                    <img
                        className="shawarma-block__image"
                        src={productImg}
                        alt="Shawarma"
                    />
                    <h4 className="shawarma-block__title">
                        Куриная-шаурма
                    </h4>
                    <div className="shawarma-block__selector">
                        <ul>
                            <li className="active">обычная</li>
                            <li>острая</li>
                        </ul>
                        <ul>
                            <li className="active">мал.</li>
                            <li>сред.</li>
                            <li>бол.</li>
                        </ul>
                    </div>
                    <div className="shawarma-block__bottom">
                        <div className="shawarma-block__price">
                            от 80 ₽
                        </div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>{" "}
                <div className="shawarma-block">
                    <img
                        className="shawarma-block__image"
                        src={productImg}
                        alt="Shawarma"
                    />
                    <h4 className="shawarma-block__title">
                        Куриная-шаурма
                    </h4>
                    <div className="shawarma-block__selector">
                        <ul>
                            <li className="active">обычная</li>
                            <li>острая</li>
                        </ul>
                        <ul>
                            <li className="active">мал.</li>
                            <li>сред.</li>
                            <li>бол.</li>
                        </ul>
                    </div>
                    <div className="shawarma-block__bottom">
                        <div className="shawarma-block__price">
                            от 80 ₽
                        </div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>{" "}
                <div className="shawarma-block">
                    <img
                        className="shawarma-block__image"
                        src={productImg}
                        alt="Shawarma"
                    />
                    <h4 className="shawarma-block__title">
                        Куриная-шаурма
                    </h4>
                    <div className="shawarma-block__selector">
                        <ul>
                            <li className="active">обычная</li>
                            <li>острая</li>
                        </ul>
                        <ul>
                            <li className="active">мал.</li>
                            <li>сред.</li>
                            <li>бол.</li>
                        </ul>
                    </div>
                    <div className="shawarma-block__bottom">
                        <div className="shawarma-block__price">
                            от 80 ₽
                        </div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>{" "}
                <div className="shawarma-block">
                    <img
                        className="shawarma-block__image"
                        src={productImg}
                        alt="Shawarma"
                    />
                    <h4 className="shawarma-block__title">
                        Куриная-шаурма
                    </h4>
                    <div className="shawarma-block__selector">
                        <ul>
                            <li className="active">обычная</li>
                            <li>острая</li>
                        </ul>
                        <ul>
                            <li className="active">мал.</li>
                            <li>сред.</li>
                            <li>бол.</li>
                        </ul>
                    </div>
                    <div className="shawarma-block__bottom">
                        <div className="shawarma-block__price">
                            от 80 ₽
                        </div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>{" "}
                <div className="shawarma-block">
                    <img
                        className="shawarma-block__image"
                        src={productImg}
                        alt="Shawarma"
                    />
                    <h4 className="shawarma-block__title">
                        Куриная-шаурма
                    </h4>
                    <div className="shawarma-block__selector">
                        <ul>
                            <li className="active">обычная</li>
                            <li>острая</li>
                        </ul>
                        <ul>
                            <li className="active">мал.</li>
                            <li>сред.</li>
                            <li>бол.</li>
                        </ul>
                    </div>
                    <div className="shawarma-block__bottom">
                        <div className="shawarma-block__price">
                            от 80 ₽
                        </div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home