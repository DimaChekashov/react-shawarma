import React, { useCallback, useEffect } from "react";
import {
    Categories,
    SortPopup,
    ShawarmaBlock,
    ShawarmaBlockLoader,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchShawarmas } from "../redux/actions/shawarmas";

const categoryNames = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
];

const sortIems = [
    { name: "популярности", type: "popular", order: "desc" },
    { name: "цене", type: "price", order: "desc" },
    { name: "алфавит", type: "name", order: "asc" },
];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ shawarmas }) => shawarmas.items);
    const isLoaded = useSelector(({ shawarmas }) => shawarmas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);

    useEffect(() => {
        dispatch(fetchShawarmas(sortBy, category));
    }, [category, sortBy]);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    activeSortType={sortBy.type}
                    items={sortIems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Вся шаурма</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((item) => (
                          <ShawarmaBlock
                              key={item.id}
                              isLoading={true}
                              {...item}
                          />
                      ))
                    : Array(12)
                          .fill(0)
                          .map((_, index) => (
                              <ShawarmaBlockLoader key={index} />
                          ))}
            </div>
        </div>
    );
}

export default Home;
