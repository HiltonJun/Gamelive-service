import { DateTime } from "luxon";
import { SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { mockedProducts, mockedUsers } from "../../mocks";
import ProductsList from "../../components/ProductsList";
import { mockedCategories } from "../../mocks";
import { Dispatch, SetStateAction, useState } from "react";
import { Category, Product } from "../../types";

interface HomeProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Home = ({ setLogged }: HomeProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    mockedCategories[0]
  );

  const filteredProductsByCategory: Product[] = mockedProducts.filter(
    (element) => element.categoryId.filter((id) => {id === selectedCategory.id})
  );

    return (
    <Styled.HomeContainer>
      <Menu path="home" setLogged={setLogged} />
      <Styled.HomeContentContainer>
        <Styled.CategoriesNavigationBar>
          {mockedCategories.map((element) => {
            return (
              <Styled.CategoriesNavigationButton
                active={element.name === selectedCategory.name}
                onClick={() => setSelectedCategory(element)}
              >
                {element.name}
              </Styled.CategoriesNavigationButton>
            );
          })}
        </Styled.CategoriesNavigationBar>
        <ProductsList list={filteredProductsByCategory} />
      </Styled.HomeContentContainer>
    </Styled.HomeContainer>
  );
};

export default Home;
