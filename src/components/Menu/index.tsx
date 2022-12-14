import * as Styled from "./styles";
import logo from "../../assets/logo_patterns/game-live-logo-white.png";
import avatar from "../../assets/images/avatar-user-1.jpg"
import { HomeIcon, SettingsIcon, LogoutIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface MenuProps {
  path: "home" | "settings";
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ path, setLogged }: MenuProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogged(false);
    navigate("/login");
  };

  return (
    <Styled.MenuContainer>
      <img alt="logo" src={logo} />
      <nav>
        <img id="user-avatar" alt="foto do usuário" src={avatar} />
        <Styled.MenuItem active={path === "home"}>
          <Styled.MenuItemButton
            onClick={() => navigate("/")}
            active={path === "home"}
          >
            <HomeIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
        <Styled.MenuItem active={path === "settings"}>
          <Styled.MenuItemButton
            onClick={() => navigate("/settings")}
            active={path === "settings"}
          >
            <SettingsIcon />
          </Styled.MenuItemButton>
          <Styled.MenuItem logout>
            <Styled.MenuItemButton onClick={handleLogout}>
              <LogoutIcon />
            </Styled.MenuItemButton>
          </Styled.MenuItem>
        </Styled.MenuItem>
      </nav>
    </Styled.MenuContainer>
  );
};

export default Menu;
