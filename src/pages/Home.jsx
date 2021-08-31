import React from 'react';
import {Categories, SortPopup, ShawarmaBlock} from '../components';

function Home({items}) {
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
                {
                    items.map(item => <ShawarmaBlock key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}

export default Home
