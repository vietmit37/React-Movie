import styled from "styled-components";

const ContainerFooter = styled.div`
  padding: 80px 60px;
  background: #355764;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const WrapperFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

const ColumnFooter = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const RowFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const LinkFooter = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;

const TitleFooter = styled.p`
  font-size: 24px;
  color: #ccc;
  margin-bottom: 40px;
  font-weight: bold;
`;
export default function Footer({ children, ...restProps }) {
  return <ContainerFooter {...restProps}>{children}</ContainerFooter>;
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <WrapperFooter {...restProps}>{children}</WrapperFooter>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <RowFooter {...restProps}>{children}</RowFooter>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <ColumnFooter {...restProps}>{children}</ColumnFooter>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <LinkFooter {...restProps}>{children}</LinkFooter>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <TitleFooter {...restProps}>{children}</TitleFooter>;
};
