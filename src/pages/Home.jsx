import React, { useCallback, useEffect } from "react";
import { Categories, SortPopup, ShawarmaBlock } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import { fetchShawarmas } from "../redux/actions/shawarmas";

const categoryNames = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ shawarmas }) => shawarmas.items);

    useEffect(() => {
        if (!items.length) {
            dispatch(fetchShawarmas());
        }
    }, []);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    items={[
                        { name: "популярности", type: "popular" },
                        { name: "цене", type: "price" },
                        { name: "алфавиту", type: "alphabet" },
                    ]}
                />
            </div>
            <h2 className="content__title">Вся шаурма</h2>
            <div className="content__items">
                {items.map((item) => (
                    <ShawarmaBlock key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}

export default Home;
