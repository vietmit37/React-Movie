import { styled } from "@mui/material/styles";

export const ScreenContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DescriptionChair = styled(ScreenContainer)`
  justify-content: center;
`;
export const TableChair = ({ ...props }) => {
  return (
    <table style={{ width: "70%", textAlign: "center" }}>
      <thead>
        <tr>
          <th>Ghế chưa đặt</th>
          <th>Ghế đang đặt</th>
          <th>Ghế vip</th>
          <th>Ghế đã đặt</th>
          <th>Ghế mình đặt</th>
          <th>Ghế khách đang đặt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ButtonChairNormal>{""}</ButtonChairNormal>
          </td>
          <td>
            <ButtonChairSelected>{""}</ButtonChairSelected>
          </td>
          <td>
            <ButtonChairVip>{""}</ButtonChairVip>
          </td>
          <td>
            <ButtonChairDisabled>{""}</ButtonChairDisabled>
          </td>
          <td>
            <ButtonChairMeBooking>{""}</ButtonChairMeBooking>
          </td>
          <td>
            <ButtonChairSelected2>{""}</ButtonChairSelected2>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const TrapezoidStyle = styled("div")`
  border-bottom: 50px solid gray;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  height: 0;
  width: 80%;
  opacity: 0.3;
  text-align: center;
  filter: drop-shadow(-11px 66px 64px #000);
  -webkit-filter: drop-shadow(0px 128px 63px rgba(8, 8, 8, 0.38));
  -moz-filter: drop-shadow(0px 128px 63px rgba(8, 8, 8, 0.38));
`;
export const Trapezoid = ({ title, ...props }) => {
  return (
    <TrapezoidStyle {...props}>
      <h3>{title}</h3>
    </TrapezoidStyle>
  );
};
export const ButtonChairNormal = styled("button")`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 15px;
  background-color: rgb(123, 122, 122);
  color: #fff;
`;
export const ButtonChairSelected = styled(ButtonChairNormal)`
  background-color: #fad9a1 !important;
`;
export const ButtonChairDisabled = styled(ButtonChairNormal)`
  background-color: rgb(232, 76, 76);
  /* cursor: no-drop; */
`;
export const ButtonChairVip = styled(ButtonChairNormal)`
  background-image: linear-gradient(to right, #14c38e, #b8f1b0 100%);
`;
export const ButtonChairMeBooking = styled(ButtonChairDisabled)`
  background-color: rgb(246, 246, 246);
  box-shadow: -1px 2px 18px -6px orange;
  color: orange !important;
  border: 1px solid orange;
`;
export const ButtonChairSelected2 = styled(ButtonChairDisabled)`
  background-color: #395b64;
`;
export const ButtonChair = ({
  vip,
  disabled,
  selected,
  me,
  khach,
  ...props
}) => {
  return (
    <>
      {vip ? (
        me ? (
          <ButtonChairMeBooking disabled {...props} />
        ) : disabled ? (
          <ButtonChairDisabled disabled {...props} />
        ) : selected ? (
          <ButtonChairSelected selected {...props} />
        ) : khach ? (
          <ButtonChairSelected2 disabled {...props} />
        ) : (
          <ButtonChairVip {...props} />
        )
      ) : me ? (
        <ButtonChairMeBooking disabled {...props} />
      ) : disabled ? (
        <ButtonChairDisabled disabled {...props} />
      ) : selected ? (
        <ButtonChairSelected selected {...props} />
      ) : khach ? (
        <ButtonChairSelected2 disabled {...props} />
      ) : (
        <ButtonChairNormal {...props} />
      )}
    </>
  );
};
