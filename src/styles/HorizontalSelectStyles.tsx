import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 140px;
`

export const Text = styled.Text`
  font-family: MetropolisBold;
  font-weight: 600;
  font-size: 16px;
  color: white;
`;

export const ScrollView = styled.ScrollView`
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 40%;

`

export const SelectionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  max-width: 122px;
  height: 100px;
  font-family: MetropolisBold;

`

interface SelectionNumberProps {
  fontSize: string,
}

export const SelectionNumber = styled.Text<SelectionNumberProps>`
  color: white;
  margin-left: 10px;
  margin-right: 10px;
  width: ${p => p.fontSize.length > 0 ? "100px" : "100px"};
  font-family: ${p => p.fontSize.length > 0 ? "MetropolisBold" : "MetropolisRegular"};
  font-size: ${p => p.fontSize.length > 0 ? p.fontSize : "35px"};
  align-items: center;
  text-align: center;
`

export const Border = styled.View`
  height: 50px;
  width: 1px;
  background-color: gray;

`