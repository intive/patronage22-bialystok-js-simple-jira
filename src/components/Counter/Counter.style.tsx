import { styled } from "@mui/material/styles";

// export const CounterWrapper = styled.div`
//   position: absolute;
//   bottom: 1%;
//   right: 5%;
// `;

// export const CounterNumber = styled.p`
//   font-size: 40px;
//   font-weight: bold;
//   text-align: center;
// `;

export const CounterWrapper = styled("div")({
  position: "absolute",
  bottom: "1%",
  right: "5%",
});

export const CounterNumber = styled("p")({
  fontSize: "40px",
  fontWeight: "bold",
  textAlign: "center",
});
