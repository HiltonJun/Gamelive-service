import styled, { css } from "styled-components";

interface MenuItemProps {
  logout?: boolean;
  active?: boolean;
}

interface MenuItemButtonProps {
  active?: boolean;
}

export const MenuContainer = styled.div`
  min-width: 6.5rem;
  height: 9rem;
  border-radius: 0 0 16px 0;
  background: linear-gradient(rgb(18, 11, 66), transparent),
    linear-gradient(to top left, rgb(90, 12, 130), transparent),
    linear-gradient(to top right, rgb(14, 80, 193), transparent);
  background-blend-mode: screen;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 8rem;
    padding: 1rem;
  }

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #252836;
    border-radius: 48px 0 0 48px;
  }

  #user-avatar {
    width: 4rem;
    height: 4rem;
    padding: 1rem;
    border-radius: 3rem;
  }
`;

export const MenuItem = styled.div<MenuItemProps>`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px 0px 0px 12px;

  ${({ logout }) =>
    logout &&
    css`
      bottom: 0;
      width: calc(6.5rem - 12px);
      border-radius: 16px;
    `}
`;

export const MenuItemButton = styled.button<MenuItemButtonProps>`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  background-color: #5b0c82;
  border-radius: 8px;
  color: #0e50c1;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #0e50c1;
      color: #ffffff;
    `}
`;
