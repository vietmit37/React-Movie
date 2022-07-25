import { Button, Card, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";

export const TicketGrid = styled(Grid)`
  width: 100%;
  margin-bottom: 10px;
`;
export const TicketCard = styled(Card)`
  width: 100%;
`;
export const TicketCardContent = styled("div")`
  margin: 20px;
`;
export const TicketTitleContainer = styled("h1")`
  color: #fff;
  text-align: center;
  background-color: #14c38e;
`;
export const TicketTitle = styled("h2")`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
export const TicketImage = styled("img")`
  max-width: 100%;
  height: auto;
`;

export const TicketDescriptionTitle = styled("p")`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;
export const TicketChairSelect = styled("span")`
  font-size: 1rem;
  color: #14c38e !important; ;
`;
export const TicketDescriptionContent = styled(TicketDescriptionTitle)`
  font-weight: normal;
  text-align: right;
`;
export const TicketChair = styled(TicketDescriptionTitle)`
  font-size: 1rem;
  color: ${red[400]};
  border: none;
`;
export const TicketPrice = styled(TicketChair)`
  font-size: 1rem;
  color: ${green[400]};
  text-align: right;
`;
export const TicketButton = styled(Button)`
  background-image: linear-gradient(
    to right,
    #14c38e,
    #e3fcbf 51%,
    #b8f1b0 100%
  );
  width: 100%;
  color: white;
  transition: all 0.5s ease;
  background-size: 200%;
  &:hover {
    background-image: linear-gradient(
      to right,
      #14c38e,
      #e3fcbf 51%,
      #b8f1b0 100%
    );
    color: black;
    font-weight: bold;
    background-position: right;
  }
`;
const UnderLine = styled("div")`
  border-bottom: ${({ underline }) => (underline ? "1px solid #ccc" : "none")};
  margin-bottom: 1rem;
`;
export const TicketDescription1 = ({ descTitle, descContent, ...props }) => {
  return (
    <>
      {props.underline ? (
        <UnderLine underline={props.underline}>
          <Grid container>
            <Grid item xs={6}>
              {props.detailTicket ? (
                <TicketDescriptionTitle>{descTitle}</TicketDescriptionTitle>
              ) : (
                <TicketChair>Ghế: {descTitle}</TicketChair>
              )}
            </Grid>
            <Grid item xs={6}>
              {props.detailTicket ? (
                <TicketDescriptionContent>
                  {descContent}
                </TicketDescriptionContent>
              ) : (
                <TicketPrice>{descContent}</TicketPrice>
              )}
            </Grid>
          </Grid>
        </UnderLine>
      ) : (
        <UnderLine>
          <Grid container>
            <Grid item xs={6}>
              {props.detailTicket ? (
                <TicketDescriptionTitle>{descTitle}</TicketDescriptionTitle>
              ) : (
                <TicketChair>Ghế: {descTitle}</TicketChair>
              )}
            </Grid>
            <Grid item xs={6}>
              {props.detailTicket ? (
                <TicketDescriptionContent>
                  {descContent}
                </TicketDescriptionContent>
              ) : (
                <TicketPrice>{descContent}</TicketPrice>
              )}
            </Grid>
          </Grid>
        </UnderLine>
      )}
    </>
  );
};
